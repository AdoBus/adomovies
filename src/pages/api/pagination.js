import nc from 'next-connect'

const handler = nc()
    .get((req, res) => {
        const type = req.query.t
        const media_type = req.query.m
        const page = req.query.p
        const genres = req.query.g

        fetch(`https://api.themoviedb.org/3/${type}/${media_type}?api_key=${process.env.tmdbkey}&language=en-US&page=${page}&with_genres=${genres}&sort_by=popularity.desc`)
            .then(response => response.json())
            .then(data => { res.json(data) });
    })

export default handler