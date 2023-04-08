import nc from "next-connect"
import { MongoClient } from 'mongodb';


const handler = nc()
    .post(async (req, res) => {
        const { name, description, isPublic, userId } = req.body

        if (!name || !description || !isPublic || !userId) {
            res.status(422).json({
                error: 'Invalid informations provided'
            });
            return;
        }

        if (isPublic !== "true" && isPublic !== "false") {
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

        //Check existing
        const checkExisting = await db
            .collection('movieList')
            .findOne({
                name,
                userId: new ObjectId(userId),
            });

        if (checkExisting) {
            res.status(422).json({
                error: 'List with this name already exist.'
            });
            return;
        }

        const status = await db.collection('movieList').insertOne({
            name,
            userId: new ObjectId(userId),
            description,
            isPublic: isPublic === "true" ? true : false,
        });
        if (status.acknowledged === true) {
            res.status(200).json({
                message: 'List created',
            });
        }
        client.close();

        res.status(500).json({
            error: 'Something went wrong'
        });
    })

export default handler