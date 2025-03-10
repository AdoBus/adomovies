export default function SignIn() {
    return (
        <>
            <div className="modal fade" id="signin-modal" tabIndex="-1" style={{display:"none"}} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style={{maxWidth: '950px'}}>
                    <div className="modal-content">
                        <div className="modal-body px-0 py-2 py-sm-0">
                            <button className="btn-close position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
                            <div className="row mx-0 align-items-center">
                                <div className="col-md-6 border-end-md p-4 p-sm-5">
                                    <h2 className="h3 mb-4 mb-sm-5">Hey there!<br />Welcome back.</h2>
                                    <img className="d-block mx-auto" src="img/signin-modal/signin.svg" alt="Illustartion" width="344" />
                                    <div className="mt-4 mt-sm-5">Don&apos;t have an account?{' '}
                                        <a href="#signup-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Sign up here</a>
                                    </div>
                                </div>
                                <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                                    <a className="btn btn-outline-danger rounded-pill w-100 mb-3" href="#">
                                        <i className="fi-google fs-lg me-1"></i>Sign in with Google</a>
                                    <a className="btn btn-outline-info rounded-pill w-100 mb-3" href="#">
                                        <i className="fi-facebook fs-lg me-1"></i>Sign in with Facebook</a>
                                    <div className="d-flex align-items-center py-3 mb-3">
                                        <hr className="w-100" />
                                        <div className="px-3">Or</div>
                                        <hr className="w-100" />
                                    </div>
                                    <form className="needs-validation" noValidate="">
                                        <div className="mb-4">
                                            <label className="form-label mb-2" htmlFor="signin-email">Email address</label>
                                            <input className="form-control" type="email" id="signin-email" placeholder="Enter your email" required="" />
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <label className="form-label mb-0" htmlFor="signin-password">Password</label><a className="fs-sm" href="#">Forgot password?</a>
                                            </div>
                                            <div className="password-toggle">
                                                <input className="form-control" type="password" id="signin-password" placeholder="Enter password" required="" />
                                                <label className="password-toggle-btn" aria-label="Show/hide password">
                                                    <input className="password-toggle-check" type="checkbox" />
                                                    <span className="password-toggle-indicator" ></span>
                                                </label>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-lg rounded-pill w-100" type="submit">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}