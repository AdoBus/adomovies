import { MongoClient } from 'mongodb';


async function handle(req, res) {
    try {
        if (req.method !== 'POST') {
            res.status(405).json({ error: 'Method not allowed' })
            return
        }

        const { id } = req.body
        
        if (!id) {
            res.status(422).json({ error: 'Invalid information provided' })
            return
        }

        const client = await MongoClient.connect(process.env.MONGODB_URI_DEV, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        const { ObjectId } = require('mongodb');

        const db = client.db()

        const user = await db.collection('users').findOne({
            _id: new ObjectId(id),
        })

        if (!user) {
            res.status(404).json({ error: 'User is not found' })
            client.close()
            return
        }

        delete user.password

        res.status(200).json({ user })
        client.close()

    } catch(error) {
        console.error(`Error occurred: ${error.message}`)
        res.status(500).json({ error: 'Internal server error' })
    }
}

export default handle