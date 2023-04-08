import nc from "next-connect"
import { MongoClient } from 'mongodb';

const handler = nc()
    .post(async (req, res) => {
        const { userId } = req.body

        // check if all field are provided
        if (!userId) {
            res.status(422).json({
                error: 'Invalid informations provided'
            });
            return;
        }

        const client = new MongoClient(process.env.MONGODB_URI_DEV, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const { ObjectId } = require('mongodb');

        const db = client.db();

        const getList = await db
            .collection('movieList')
            .find({
                userId: new ObjectId(userId),
            }).toArray();

        if (getList) {
            res.status(200).json({
                data: getList
            });
            return;
        } else {
            res.status(404).json({
                data: []
            });
        }
        client.close();

        res.status(500).json({
            error: 'Something went wrong'
        });
    })

export default handler;