import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function Biography({person}) {
    return (
        <>
            <div className="d-flex w-100 justify-content-between justify-content-lg-start">
                <h2 className="h3 mb-0 me-md-4 text-light">{person.name}</h2>
            </div>
            <div className="d-flex mt-4 w-100 justify-content-between justify-content-lg-start">
                <h2 className="h5 mb-0 me-md-4 text-light">Biography</h2>
            </div>
            <div className="text-light opacity-70 mt-2">
                <ReactReadMoreReadLess
                    charLimit={800}
                    readMoreText={"Read more"}
                    readLessText={"Read less"}
                    readMoreStyle={{ color: "#33cabb" }}
                    readLessStyle={{ color: "#33cabb" }}>
                    {person.biography}
                </ReactReadMoreReadLess>
            </div>
        </>
    )
}