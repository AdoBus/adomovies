import nc from 'next-connect'


const handler = nc()
    .get((req, res) => {
        const query = req.query.q

        res.setHeader('Content-Type', 'image/png')

        fetch(`https://imdb-api.com/en/API/Posters/k_k32ze3oq/${query}`)
            .then(response => response.json())
            .then(data => (
                fetch(data.posters[0].link)
                .then(response => response.buffer())
                .then(data => {
                    return res.end(data)
                })
            ))
    })

export default handler