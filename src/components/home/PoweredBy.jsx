export default function PoweredBy() {
    return (
        <>
            <div className="py-4 border-top border-light">
                <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between py-2">
                    {/* <!-- Copyright--> */}
                    <p className="order-lg-1 order-2 fs-sm mb-2 mb-lg-0">
                        <a className="nav-link fw-bold" href="https://adobus.co.tz" target="_blank" rel="noreferrer">
                        © All rights reserved. Powerd by Ado<b>Bus</b>
                        </a>
                    </p>
                    <div className="d-flex flex-lg-row flex-column align-items-center order-lg-2 order-1 ms-lg-4 mb-lg-0 mb-4">
                        {/* <!-- Links--> */}
                        <div className="d-flex flex-wrap fs-sm mb-lg-0 mb-4 pe-lg-4">
                            <a className="nav-link px-2 mx-1" href="#">About</a>
                            <a className="nav-link px-2 mx-1" href="#">Blog</a>
                            <a className="nav-link px-2 mx-1" href="#">Support</a
                            ><a className="nav-link px-2 mx-1" href="#">Contacts</a>
                        </div>
                        <div className="d-flex align-items-center">
                            {/* <!-- Language switcher--> */}
                            <div className="dropdown">
                                <a className="nav-link dropdown-toggle fs-sm align-items-center p-0 fw-normal"
                                    href="#" id="langSwitcher" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                    <i className="fi-globe mt-n1 me-2 align-middle"></i>Eng
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark my-1" aria-labelledby="langSwitcher">
                                    <li>
                                        <a className="dropdown-item text-nowrap py-1" href="#">
                                            <img className="me-2" src="img/flags/de.png" alt="Deutsch" width="20" />
                                            Deutsch
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item text-nowrap py-1" href="#">
                                            <img className="me-2" src="img/flags/fr.png" alt="Français" width="20" />
                                            Français
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item text-nowrap py-1" href="#">
                                            <img className="me-2" src="img/flags/es.png" alt="Español" width="20" />
                                            Español
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Socials--> */}
                            <div className="ms-4 ps-lg-2 text-nowrap">
                                <a className="btn btn-icon btn-xs rounded-circle ms-2" href="#">
                                    <i className="fi-facebook"></i>
                                </a>
                                <a className="btn btn-icon btn-xs rounded-circle ms-2" href="#">
                                    <i className="fi-twitter"></i>
                                </a>
                                <a className="btn btn-icon btn-xs rounded-circle ms-2" href="#">
                                    <i className="fi-telegram"></i>
                                </a>
                                <a className="btn btn-icon btn-xs rounded-circle ms-2" href="#">
                                    <i className="fi-messenger"></i
                                    ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}