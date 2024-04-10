import nc from 'next-connect'

const handler = nc()
    .get((req, res) => {
        const type = req.query.t
        const media_type = req.query.m
        const page = req.query.p
        const genres = req.query.g
        const query = req.query.q
        let url;

        if (type === "discover") {
            url = `${process.env.tmdburl}/3/discover/${media_type}?api_key=${process.env.tmdbkey}&language=en-US&page=${page}${genres !== 'undefined' && '&with_genres='}${genres}&sort_by=popularity.desc`
        } else if (type === "top-rated") {
            url = `${process.env.tmdburl}/3/${media_type}/top_rated?api_key=${process.env.tmdbkey}&language=en-US&page=${page}`
        } else if (type === "search") {
            url = `${process.env.tmdburl}/3/search/multi?api_key=${process.env.tmdbkey}&language=en-US&page=${page}&include_adult=false&query=${query}`
        } else {
            return { "Status Code": 402 }
        }

        console.log(url)

        fetch(url)
            .then(response => response.json())
            .then(data => { res.json(data) });
    })

export default handler