import nc from "next-connect"
import { MongoClient } from 'mongodb';

const handler = nc()
    .post(async (req, res) => {
        const { media_id, type, user_id, media_type } = req.body

        // check if all field are provided
        if (!media_id || !type || !user_id || !media_type) {
            res.status(422).json({
                error: 'Invalid informations provided'
            });
            return;
        }

        // Check type if is not favorite or watchlist
        if (type !== 'favorite' && type !== 'watchlist') {
            res.status(422).json({
                error: 'Invalid informations provided'
            });
            return;
        }

        // Check media_type if is not movie or tv
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

        //Check existing
        const checkExisting = await db
            .collection('movieCollection')
            .findOne({
                media_id,
                user_id: new ObjectId(user_id),
                type,
                media_type
            });

        //Delete movieCollection if exist
        if (checkExisting) {
            const status = await db.collection('movieCollection').deleteOne({
                media_id,
                user_id: new ObjectId(user_id),
                type,
                media_type
            });
            if (status.acknowledged === true) {
                res.status(200).json({
                    status: 'removed'
                });
            } else {
                res.status(500).json({
                    error: 'Something went wrong'
                });
            }
            client.close();
            return;
        }

        //Insert movieCollection
        const status = await db.collection('movieCollection').insertOne({
            media_id,
            type,
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
    })

export default handler