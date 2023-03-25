const saveCollection = (media_id, type, user_id, media_type, setFavorite = null, setWatchlist = null) => {
    fetch(`/api/save-collection`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ media_id, type, user_id, media_type })
    }).then(
        res => res.json()
    ).then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            try {
                if (type === 'favorite') {
                    data.status === 'added' ? setFavorite(true) : setFavorite(false)
                } else {
                    data.status === 'added' ? setWatchlist(true) : setWatchlist(false)
                }
            } catch {
                console.log('Error: saveCollection()')
            }
        }
    })
}

export default saveCollection