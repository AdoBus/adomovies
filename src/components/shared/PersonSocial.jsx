import React from "react";

export default function PersonSocial({ person }) {
    return (
        <>
            <div className="d-flex mt-3 mb-3">
                {/* <!-- Socials--> */}
                <div className="ms-4 ps-lg-2 text-nowrap">
                    {person.external_ids.facebook_id &&
                        <a className="btn btn-icon rounded-circle ms-2 text-light opacity-70"
                            rel="noreferrer" target="_blank"
                            href={`https://www.facebook.com/${person.external_ids.facebook_id}`}>
                            <i className="fi-facebook"></i>
                        </a>
                    }
                    {person.external_ids.twitter_id &&
                        <a className="btn btn-icon rounded-circle ms-2 text-light opacity-70"
                            rel="noreferrer" target="_blank"
                            href={`https://www.twitter.com/${person.external_ids.twitter_id}`}>
                            <i className="fi-twitter"></i>
                        </a>
                    }
                    {person.external_ids.instagram_id &&
                        <a className="btn btn-icon rounded-circle ms-2 text-light opacity-70"
                            rel="noreferrer" target="_blank"
                            href={`https://www.instagram.com/${person.external_ids.instagram_id}`}>
                            <i className="fi-instagram"></i>
                        </a>
                    }
                </div>
            </div>
        </>
    )
}