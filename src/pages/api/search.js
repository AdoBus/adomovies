import nc from 'next-connect'

const handler = nc()
    .get((req, res) => {
        const q = req.query.q

        fetch(`${process.env.tmdburl}/3/search/multi?api_key=${process.env.tmdbkey}&language=en-US&page=1&include_adult=false&query=${q}`)
            .then(response => response.json())
            .then(data => { res.json(data) });
    })

export default handler