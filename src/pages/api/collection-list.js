import nc from "next-connect"
import { MongoClient } from 'mongodb';

const handler = nc()
    .post(async (req, res) => {
        const { user_id, type } = req.body
        
        // Check type if is not favorite or watchlist
        if (type !== 'favorite' && type !== 'watchlist') {
            res.status(422).json({
                error: 'Invalid informations provided'
            });
            return;
        }

        const client = new MongoClient(process.env.mongodb_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const { ObjectId } = require('mongodb');

        const db = client.db();

        //Check existing
        const collections = await db
            .collection('movieCollection')
            .find({
                user_id: new ObjectId(user_id),
                type,
            }).toArray();


        if (collections) {
            try {
                const movie_list = await Promise.all(collections.map(async collection => {
                    const movie_api = await fetch(
                        `${process.env.tmdburl}/3/${collection.media_type}/${collection.media_id}?api_key=${process.env.tmdbkey}&language=en-US`
                    )
                    const movie = await movie_api.json()
                    return movie;
                }))
                res.status(200).json({
                    results: movie_list
                });
            } catch (e) {
                console.log(e)
                res.status(500).json({
                    error: "Internal Server Error"
                })
            }
        } else {
            res.status(404).json({
                error: 'not found'
            });
        }

        client.close();
        return;
    })

export default handler