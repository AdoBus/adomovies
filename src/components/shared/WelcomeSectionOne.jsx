import React from "react";

const WelcomeSectionOne = () => {
    return (
        <section className="bg-position-top-center mb-5 bg-repeat-0">
            <div className="card bg-transparent radius-0 pt-5 pb-5 trend-img border-0 overflow-hidden"
                style={{
                    backgroundImage: `url(/img/welcome/welcome.png)`,
                    backgroundSize: "cover", borderRadius: 0
                }}>
                <span className="img-gradient-overlay"></span>
                <div className="card-body content-overlay pb-0">
                    <div class="mb-md-5 py-5">
                        <div class="col-xl-6 col-lg-8 col-md-10 mx-auto mb-sm-5 mb-4 px-0 text-center">
                            <h1 class="display-5 text-light opacity-150 mt-sm-5 my-4">
                                Welcome <span style={{ "color": "#33cabb" }}>Adomovies.com</span>
                            </h1>
                            <h4 class="display-8 text-white mb-5">We&apos;re excited to have you join our community of avid viewers</h4>
                            <button type="button" style={{ "backgroundColor": "#33cabb" }} class="btn btn-success text-dark d-block w-100" href="#signin-modal" data-bs-toggle="modal">
                                GET STARTED
                            </button>
                        </div>
                        <div className="col-xl-6 col-lg-8 col-md-10 mx-auto mb-sm-5 mb-4 px-0 text-center">
                            <h4 class="h5 text-white">
                                Signing up is quick and easy, and best of all, completely free! Simply create an account, and start streaming your favorite movies and TV series today.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WelcomeSectionOne;