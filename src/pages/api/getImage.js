import nc from 'next-connect'


const handler = nc()
    .get((req, res) => {
        const query = req.query.q

        res.setHeader('Content-Type', 'image/png')

        fetch(`https://image.tmdb.org/t/p/original${query}`)
            .then(response => response.buffer())
            .then(data => {
                return res.end(data)
            }).catch(error => {
                res.json(error);
                res.status(405).end();
            })
    })

export default handler