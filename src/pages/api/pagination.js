import nc from 'next-connect'

const handler = nc()
    .get((req, res) => {
        const type = req.query.t
        const media_type = req.query.m
        const page = req.query.p
        const genres = req.query.g

        if (type === "discover") {
            fetch(`https://api.themoviedb.org/3/discover/${media_type}?api_key=${process.env.tmdbkey}&language=en-US&page=${page}&with_genres=${genres}&sort_by=popularity.desc`)
                .then(response => response.json())
                .then(data => { res.json(data) });
        } else if (type === "top-rated") {
            fetch(`https://api.themoviedb.org/3/${media_type}/top_rated?api_key=${process.env.tmdbkey}&language=en-US&page=${page}`)
                .then(response => response.json())
                .then(data => { res.json(data) });
        }
    })

export default handler