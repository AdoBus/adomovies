import { MongoClient } from 'mongodb';
import { sendEmail } from "../../../../lib/send_email";
import { getDeviceInfo } from "../../../../lib/get_device_info"

async function handler(req, res) {
    if (req.method === 'POST') {
        const { current_pass, new_pass, confirm_pass, userId } = req.body

        if (!current_pass || !new_pass || !confirm_pass || !userId) {
            res.status(422).json({
                error: 'Invalid informations provided'
            });
            return;
        }

        if (new_pass !== confirm_pass) {
            res.status(422).json({
                error: 'Passwords do not match'
            });
            return;
        }

        const client = await MongoClient.connect(
            process.env.MONGODB_URI_DEV, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const { ObjectId } = require("mongodb");

        const db = client.db();

        const checkExisting = await db
            .collection('users')
            .findOne({
                _id: new ObjectId(userId)
            });

        if (!checkExisting) {
            res.json({
                error: 'User does not exist'
            });
            client.close();
        }

        const bcrypt = require('bcryptjs');

        const isMatch = await bcrypt.compare(current_pass, checkExisting.password);

        if (!isMatch) {
            res.status(422).json({
                error: 'Incorrect password'
            });
            return;
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(new_pass, salt);

        await db.collection("users").updateOne(
            {
                _id: new ObjectId(userId),
            },
            {
                $set: {
                    password: hashedPassword,
                },
            });

        // get browser information and ip address
        const deviceInfo = await getDeviceInfo(req)

        // save to userActivities
        await db.collection("userActivities").insertOne({
            userId: new ObjectId(userId),
            activity: "Password updated",
            deviceInfo: deviceInfo,
            date: new Date(),
        });

        // send email to notify user that he or she change the password
        const email = checkExisting.email
        const subject = "Password updated"
        const text = `
        Hi ${checkExisting.fullname},

        The password for your Adomovies account was changed on ${new Date()}.

        We are notifying you so you can ensure this change is from a trusted user.

        If you have any concerns, please contact us at support@adomovies.com.

        ------------------------------------------
        Email: ${email}
        Time: ${new Date()}
        IP address: ${deviceInfo['ip']}
        Browser: ${deviceInfo['userAgent']}
        Location: ${deviceInfo['city']} - ${deviceInfo['country']}
        ------------------------------------------

        Sincerely,
        The Team at Adomovies.com
        `
        await sendEmail({
            to: email,
            subject: subject,
            text: text
        });
        res.status(200).json({ message: "Password updated" });
        client.close();
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}

export default handler;