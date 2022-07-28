import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PersonTvAndMovies({route, media_credits, divID, style }) {
    return (
        <div id={divID} className="row g-4" style={{ "display": style }}>
            {media_credits.map(c => (
                <div key={c.id} className="col-md-2 col-4">
                    <Link href={`/${route}${c.id}-${route === 'watch/tv?q=' ? '1-' : ''}${c.original_title ? c.original_title : c.original_name}`}>
                        <a style={{"textDecoration": "none"}}>
                            <figure className="figure">
                                <Image className="rounded-1 figure-img" width="130px" height="195px" alt={c.title}
                                    src={c.poster_path ? `/api/getImage?q=${c.poster_path}` : '/img/errors/grey.jpg'} />
                                <figcaption className="figure-caption">{c.title ? c.title : c.name}</figcaption>
                            </figure>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}