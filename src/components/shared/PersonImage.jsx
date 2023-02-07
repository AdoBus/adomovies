import React from "react";
import Image from "next/image";

export default function PersonImage({ person }) {
    return (
        <>
            <div className="gallery">
                <Image className="rounded-3" width="300" height="450" alt={person.name}
                    src={person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}` : '/img/errors/grey.jpg'} />
            </div>
        </>
    )
}