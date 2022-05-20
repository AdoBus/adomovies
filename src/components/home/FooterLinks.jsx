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
                                <a className="nav-link p-0 fw-normal  text-nowrap" href="tel:+255692536972">
                                    <i className="fi-device-mobile mt-n1 me-1 align-middle text-primary"></i>+255-692-536-972
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Links--> */}
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <h3 className="fs-base ">Quick links</h3>
                        <ul className="list-unstyled fs-sm">
                            <li><a className="nav-link" rel="noreferrer" target="_blank" href="https://www.imdb.com/">IMDb</a></li>
                            <li><a className="nav-link" rel="noreferrer" target="_blank" href="https://www.themoviedb.org/">TMDB</a></li>
                            <li><a className="nav-link" rel="noreferrer" target="_blank" href="https://www.rottentomatoes.com/">Rotten Tomatoes</a></li>
                            <li><a className="nav-link" rel="noreferrer" target="_blank" href="#">Events</a></li>
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
                        <h3 className="h4">Subscribe to our newsletter</h3>
                        <p>Be the first one to stream movies and series!</p>
                        <form className="form-group rounded-pill" style={{ maxWidth: '500px' }}>
                            <div className="input-group input-group-sm"><span className="input-group-text text-muted">
                                <i className="fi-mail"></i></span>
                                <input className="form-control" type="email" placeholder="Your email" />
                            </div>
                            <button className="btn btn-primary btn-sm rounded-pill" type="button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}