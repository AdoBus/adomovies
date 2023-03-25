import AccountMoviesAndTvHeader from "./AccountMovieAndTvHeader";
import CollectionList from "./CollectionList";
import React from "react";


export default function AccountMoviesAndTv({ header, medias, type, session }) {
    const [data, setData] = React.useState(medias);

    return (
        <>
            <AccountMoviesAndTvHeader setData={setData} total={medias.length} header={header} />
            {data.length > 0 ?
                data.map((media, index) => (
                    <>
                        {
                            media.original_name ?
                                <CollectionList style="none" divId="tv" key={index} setData={setData} media={media} type={type} data={data} session={session} />
                                :
                                <CollectionList style="show" divId="movie" key={index} setData={setData} media={media} type={type} data={data} session={session} />
                        }
                    </>
                )) :
                <></>}
        </>
    )
}