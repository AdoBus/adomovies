import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState } from "react";
import $ from 'jquery'
import PaginationGrid from "./PaginationGrid";

export default function Pagination({ discover, media_type, genres_id, tv_genre, pagination_type, query }) {

    const [data, setData] = useState(discover.results);
    const [hasMore, setHasMore] = useState(true);

    const getMoreData = async () => {
        const res = await fetch(
            `/api/pagination?t=${pagination_type}&m=${media_type}&p=${$("#xyzz").attr('name')}&g=${$("#pagination").attr('name')}&q=${query}`
        );

        const newaData = await res.json();

        setData((data) => [...data, ...newaData.results]);

        $("#xyzz").attr('name', `${parseInt($("#xyzz").attr('name')) + 1}`)

        if (parseInt($("#xyzz").attr('name')) >= newaData.total_pages) {
            setHasMore(false)
        }
    };

    return (
        <>
            <InfiniteScroll
                dataLength={data.length}
                next={getMoreData}
                hasMore={hasMore}
                loader={<p>loading...</p>}
                endMessage={<></>}
            >
                <div id="pagination" name={media_type === 'movie' ? genres_id : tv_genre} className="row g-4" style={{ "display": "show" }}>
                    {data.length > 0 ?
                        data.map((d, index) =>
                            "profile_path" in d ?
                                <PaginationGrid href={`people/${d.id}-${d.name.replaceAll(' ', '-')}`} imageUrl={d.profile_path} title={d.name} /> :
                                <PaginationGrid
                                    href={`/watch/${d.media_type ? d.media_type : media_type}/${d.id}-${media_type === 'tv' ? '1-' : ''}${d.original_title ?
                                        d.original_title.replaceAll(' ', '-') : d.original_name.replaceAll(' ', '-')}`}
                                    imageUrl={d.poster_path}
                                    title={d.original_title ? d.original_title : d.original_name} />
                        ) : <>Something went wrong.</>}
                </div>
            </InfiniteScroll>
        </>
    )
}