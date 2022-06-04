import Image from "next/image"

export default function FooterLinks() {
    return (
        <>
            <div className="container mb-4 py-4 pb-lg-5">
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-6 col-sm-4">
                        <div className="mb-2 pb-sm-3">
                            <a className="navbar-brand d-flex justify-content-star me-2 me-xl-4">
                                <img className="d-block me-2" src="/img/logo/logo.svg" width="30" alt="Adomovies.com" /><h5 className="mt-2">Adomovies.com</h5>
                            </a>
                        </div>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a className="nav-link p-0 fw-normal  text-nowrap" href="mailto:info@adomovies.com">
                                    <i className="fi-mail mt-n1 me-1 align-middle text-primary"></i>info@adomovies.com
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a className="nav-link p-0 fw-normal  text-nowrap" href="#">
                                    <i className="fi-instagram mt-n1 me-1 align-middle text-primary"></i>Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Links--> */}
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <h3 className="fs-base ">Quick links</h3>
                        <ul className="list-unstyled fs-sm">
                            <li><a className="nav-link" rel="noreferrer" target="_blank" href="https://adobus.co.tz/">Ado<b>Bus</b></a></li>
                            <li><a className="nav-link" rel="noreferrer" target="_blank" href="https://adotelevision.vercel.app/">Ado<b>Television</b></a></li>
                        </ul>
                    </div>
                    {/* <!-- Links--> */}
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <h3 className="fs-base ">Company</h3>
                        <ul className="list-unstyled fs-sm">
                            <li><a className="nav-link" href="#">About Us</a></li>
                            <li><a className="nav-link" href="#">Privacy Policy</a></li>
                            <li><a className="nav-link" href="#">Terms and Conditions</a></li>
                            <li><a className="nav-link" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* <!-- Subscription form--> */}
                    <div className="col-lg-4 offset-lg-1">
                        <h3 className="fs-base">DISCLAIMER</h3>
                        <p>
                            This site does not store any files on the server.
                            All content is provided by unaffiliated third parties.
                            Adomovies.com is not responsible for the accuracy, copyright,
                            legality, dignity or other aspects of the content of any other
                            linked site. If you have any legal questions, please contact the
                            appropriate media owner or host site.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}