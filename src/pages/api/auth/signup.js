import { MongoClient } from 'mongodb';
import { hash } from 'bcryptjs';
import { render } from "@react-email/render";
import WelcomeTemplate from "../../emails/WelcomeTemplate";
import { sendEmail } from "../../../../lib/send_email";


async function handler(req, res) {
    //Only POST mothod is accepted
    if (req.method === 'POST') {
        //Getting email and password from body
        const {
            email,
            password,
            fullname,
        } = req.body;
        //Validate
        if (!email || !email.includes('@') || !password) {
            res.status(422).json({
                error: 'Invalid informations provided'
            });
            return;
        }
        //Connect with database
        const client = await MongoClient.connect(
            process.env.mongodb_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        );
        const db = client.db();
        //Check existing
        const checkExisting = await db
            .collection('users')
            .findOne({
                email: email
            });
        //Send error response if duplicate user is found
        if (checkExisting) {
            res.json({
                error: 'User already exists'
            });
            client.close();
        }

        function generateRandomString(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          }

        //Hash password
        const status = await db.collection('users').insertOne({
            email,
            password: await hash(password, 12),
            fullname,
            verified: false,
            verified_key: generateRandomString(60)
        });

        if (status.acknowledged === true){
            const user = await db.collection('users').findOne({email})
            await sendEmail({
                to: user.email,
                subject: "Welcome to Adomovies.com",
                html: render(WelcomeTemplate(user)),
            });
        }

        //Send success response
        res.status(201).json({
            message: 'User created',
            ...status
        });
        //Close DB connection
        client.close();
    } else {
        //Response for other than POST method
        res.status(500).json({
            error: 'Route not valid'
        });
    }
}

export default handler;