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

        if (checkExisting) {
            res.status(200).json({
                status: 'added'
            });
        } else {
            res.status(404).json({
                error: 'not added'
            });
        }
        client.close();
        return;
    })

export default handler