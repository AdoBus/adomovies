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

        const client = new MongoClient(process.env.mongodb_url, {
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
            // loop on list and find total count on movies on that list
            const listWithCount = await Promise.all(getList.map(async list => {
                let items = await db.collection('movieList').countDocuments({ list_id: list._id.toString() });

                let collection = await db.collection('movieList').findOne({ list_id: list._id.toString() })

                // fetch one movie in movieList collection
                let image;
                if (items > 0) {
                    const movie_api = await fetch(
                        `${process.env.tmdburl}/3/${collection.media_type}/${collection.media_id}?api_key=${process.env.tmdbkey}&language=en-US`
                    )
                    const movie = await movie_api.json()
                    image = movie.backdrop_path
                }
                return { ...list, items, image }
            }))
            res.status(200).json({
                data: listWithCount
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