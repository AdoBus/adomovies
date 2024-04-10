import ReactReadMoreReadLess from "react-read-more-read-less";
import moment from "moment";
import saveCollection from "../../helpers/save_collection";
import React from "react";


const CollectionList = ({session, media, setData, type, data, style, divId}) => {
    const user = session.user

    const removeCollection = (id, media_type) => {
        const newData = data.filter(media => media.id !== id);
        setData(newData);
        saveCollection(id, type, user._id, media_type);
    }
    return (
        <article style={{ "display": style }} className={`card card-light border-0 mb-3 shadow-sm card-hover card-horizontal ${divId}`}>
            <a href="#" className="card-img-top" style={{ "backgroundImage": `url(https://image.tmdb.org/t/p/original${media.backdrop_path})`, padding: "100px", backgroundSize: "cover" }}></a>
            <div className="card-body">
                <a href="#" className="fs-xs text-uppercase text-decoration-none">{media.status}</a>
                <h3 className="fs-base pt-1 mb-2">
                    <a href="#" className="nav-link text-light">{media.original_name ? media.original_name : media.original_title}</a>
                </h3>
                <div className="fs-sm text-light opacity-70 mb-2">{moment(media.last_air_date ? media.last_air_date : media.release_date).format('LL')}</div>
                <p className="fs-sm text-muted">
                    <ReactReadMoreReadLess
                        charLimit={180}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readMoreStyle={{ color: "#33cabb" }}
                        readLessStyle={{ color: "#33cabb" }}>
                        {media.overview}
                    </ReactReadMoreReadLess>
                </p>
                <a className="d-flex align-items-center text-decoration-none">
                    <div className="ps-2">
                        <div className="d-flex text-body fs-sm">
                            <span onClick={() => removeCollection(media.id, media.original_name ? 'tv' : 'movie')} type="button" className="me-3 pe-1 opacity-70 text-light">
                                <i className="fi-trash active opacity-70 text-light me-2"></i>
                                Remove
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </article>
    )
}
export default CollectionList