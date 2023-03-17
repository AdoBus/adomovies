import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function PaginationGrid({ href, imageUrl, title }) {
    return (
        <div className="col-md-2 col-6 mb-3">
            {/* <!-- Item --> */}
            <Link className="card h-100 card-light shadow-sm card-hover border-0" href={href}>
                <div className="card-img-top card-img-hover">
                    <span className="img-overlay opacity-65"></span>
                    <Image width="195" height="288" src={imageUrl ? `https://image.tmdb.org/t/p/original${imageUrl}` : '/img/errors/grey.jpg'}
                        alt={title} />
                    <div className="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                        <div className="w-100 p-1">
                            <div className="mb-2">
                                <div className="d-flex align-items-center">
                                    <i className="fi-play-circle" style={{
                                        "fontSize": "50px", "lineHeight": "20px", "width": "200px",
                                        "marginTop": "-10px", "marginLeft": "-7px", "zIndex": "2", "color": "#08AB4B", "textAlign": "center"
                                    }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body text-center">
                    <p className="mb-0 fs-sm text-light opacity-70">{title}</p>
                </div>
            </Link>
        </div>
    )
}