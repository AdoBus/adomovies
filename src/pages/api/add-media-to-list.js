import nc from "next-connect"
import { MongoClient } from 'mongodb';

const handler = nc()
    .post(async (req, res) => {
        const { media_id, list_id, user_id, media_type } = req.body

        if (!media_id || !list_id || !user_id || !media_type) {
            res.status(422).json({
                error: 'Invalid informations provided'
            });
            return;
        }

        if (media_type !== 'movie' && media_type !== 'tv') {
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

        const checkExisting = await db
            .collection('movieList')
            .findOne({
                media_id,
                user_id: new ObjectId(user_id),
                list_id,
                media_type
            });

        if (checkExisting) {
            res.status(422).json({
                error: 'This movie already in this list'
            });
            client.close();
            return;
        }

        const status = await db.collection('movieList').insertOne({
            media_id,
            list_id,
            user_id: new ObjectId(user_id),
            media_type,
            created_at: new Date()
        });

        if (status.acknowledged === true) {
            res.status(200).json({
                status: 'added'
            });
        }
        client.close();
        return;
    })

export default handler