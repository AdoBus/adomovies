import React from "react";

export default function PersonInfo({title, value}) {
    return (
        <>
            <div className="d-flex mt-2 w-100 align-items-center justify-content-between justify-content-lg-start">
                <div className="ps-2">
                    <h6 className="fs-sm lh-base mb-1 text-light opacity-70">
                        {title}
                    </h6>
                    <p className="text-light opacity-70">{value}</p>
                </div>
            </div>
        </>
    )
}