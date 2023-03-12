import React from "react";

export default function AccountLeftNavProfile() {
    return (
        <div className="d-flex d-md-block d-lg-flex align-items-start pt-lg-2 mb-4">
            <div className="position-relative rounded-circle overflow-hidden" style={{ "width": "48px", "height": "48px" }}>
                <span style={{
                    "boxSizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1",
                    "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px"
                }}>
                    <img alt="Annette Black" light="0" sizes="100vw" src="https://finder-react.createx.studio/_next/image?url=%2Fimages%2Favatars%2F03.jpg&w=48&q=75" />
                </span>
            </div>
            <div className="pt-md-2 pt-lg-0 ps-3 ps-md-0 ps-lg-3">
                <h2 className="fs-lg mb-0 text-light">Annette Black</h2>
                <ul className="list-unstyled fs-sm mt-3 mb-0">
                    <li>
                        <a className="nav-link-light fw-normal" href="tel:3025550107">
                            <i className="fi-phone opacity-60 me-2"></i>
                            (302) 555-0107
                        </a>
                    </li>
                    <li>
                        <a className="nav-link-light fw-normal" href="mailto:robert_fox@email.com">
                            <i className="fi-mail opacity-60 me-2"></i>
                            robert_fox@email.com
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}