import nc from 'next-connect'


const handler = nc()
    .get((req, res) => {
        const query = req.query.q

        res.setHeader('Content-Type', 'image/png')

        fetch(`https://www.themoviedb.org/t/p/w440_and_h660_face${query}`)
            .then(response => response.buffer())
            .then(data => {
                return res.end(data)
            }).catch(error => console.log(error))
    })

export default handler