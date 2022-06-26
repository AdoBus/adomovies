export default function PoweredBy() {
    return (
        <>
            <div className="py-4 border-top border-light">
                <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between py-2">
                    {/* <!-- Copyright--> */}
                    <p className="order-lg-1 order-2 fs-sm mb-2 mb-lg-0">
                        <a className="nav-link fw-bold text-light opacity-70" href="https://adobus.co.tz" target="_blank" rel="noreferrer">
                        © All rights reserved. Powerd by Ado<b>Bus</b>
                        </a>
                    </p>
                    <div className="d-flex flex-lg-row flex-column align-items-center order-lg-2 order-1 ms-lg-4 mb-lg-0 mb-4">
                        {/* <!-- Links--> */}
                        <div className="d-flex flex-wrap fs-sm mb-lg-0 mb-4 pe-lg-4">
                            <a className="nav-link px-2 mx-1 text-light opacity-70" href="#">About</a>
                            <a className="nav-link px-2 mx-1 text-light opacity-70" href="#">Blog</a>
                            <a className="nav-link px-2 mx-1 text-light opacity-70" href="#">Support</a
                            ><a className="nav-link px-2 mx-1 text-light opacity-70" href="#">Contacts</a>
                        </div>
                        <div className="d-flex align-items-center">
                            {/* <!-- Socials--> */}
                            <div className="ms-4 ps-lg-2 text-nowrap">
                                <a className="btn btn-icon btn-xs rounded-circle ms-2 text-light opacity-70" href="#">
                                    <i className="fi-facebook"></i>
                                </a>
                                <a className="btn btn-icon btn-xs rounded-circle ms-2 text-light opacity-70" href="#">
                                    <i className="fi-twitter"></i>
                                </a>
                                <a className="btn btn-icon btn-xs rounded-circle ms-2 text-light opacity-70" href="#">
                                    <i className="fi-telegram"></i>
                                </a>
                                <a className="btn btn-icon btn-xs rounded-circle ms-2 text-light opacity-70" href="#">
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