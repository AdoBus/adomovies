import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";

const SignUp = () => {
    const [userInfo, setUserInfo] = useState(
        {
            "fullname": "",
            "confirm_password": "",
            "email": "",
            "password": "",
            "accept_terms": ""
        }
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (userInfo.fullname === "" || userInfo.email === "" || userInfo.password === "" || userInfo.confirm_password === "") {
            toast.error("🧐 Oops, Missing Details!", {
                style: {
                    borderRadius: '10px',
                    background: '#1D1929',
                    color: '#fff',
                    border: "solid 1px white"
                },
                icon: null,
            })
        }
        if (userInfo.password !== userInfo.confirm_password) {
            toast.error("🧐 Oops, Passwords don't match!", {
                style: {
                    borderRadius: '10px',
                    background: '#1D1929',
                    color: '#fff',
                    border: "solid 1px white"
                },
                icon: null,
            })
        }

        const res = await fetch(`/api/auth/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });
        
        const data = await res.json(); 
        
        await toast.promise(
          new Promise((resolve, reject) => {
            if (data.error) {
              reject(data); // Pass error message to error handler
            } else {
              setTimeout(() => {
                document.getElementById(`closeModal`)?.click();
                resolve(data); // Pass data to success handler
              }, 2000);
            }
          }),
          {
            loading: 'Signing up...',
            success: (() => {
                return `🍿 Welcome to the party! We've sent link to your email to verify your account.`;
            }),
            error: (e) => {
                return `😔 ${e.error}`;
            },
          },
          {
            style: {
              borderRadius: '10px',
              background: '#1D1929',
              color: '#fff',
              border: "solid 1px white"
            },
            success: { icon: null, duration:3000 },
            error: { icon: null },
          },
        );
        
    }
    return (
        <>
            <div className="modal fade" id="signup-modal" tabindex="-1" aria-hidden="true" style={{ display: "none" }}>
                <div className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style={{ "maxWidth": "950px" }}>
                    <div className="modal-content bg-dark border-light">
                        <div className="modal-body px-0 py-2 py-sm-0">
                            <button className="btn-close btn-close-white position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
                            <div className="row mx-0 align-items-center">
                                <div className="col-md-6 p-4 p-sm-5">
                                    <h2 className="h3 text-light mb-4 mb-sm-5">Sign up now and watch the magic happen 🍿🎥</h2>
                                    <ul className="list-unstyled mb-4 mb-sm-5">
                                        <li className="d-flex mb-2"><i className="fi-check-circle text-primary mt-1 me-2"></i>
                                            <span className="text-light">Enter your info with a big smile on your face</span>
                                        </li>
                                        <li className="d-flex mb-2"><i className="fi-check-circle text-primary mt-1 me-2"></i>
                                            <span className="text-light">Hit that sign-up button</span>
                                        </li>
                                        <li className="d-flex mb-0"><i className="fi-check-circle text-primary mt-1 me-2"></i>
                                            <span className="text-light">Don&apos;t forget to verify your email because we don&apos;t want a stranger at the party</span>
                                        </li>
                                    </ul>
                                    <img className="d-block mx-auto" src="/img/signin-modal/signup.svg" width="344" alt="Illustartion" />
                                    <div className="text-light mt-sm-4 pt-md-3"><span className="opacity-60">Already have an account? </span>
                                        <a className="text-light" href="#signin-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Sign in</a>
                                    </div>
                                </div>
                                <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                                    <a className="btn btn-outline-info w-100 mb-3" href="#"><i className="fi-google fs-lg me-1"></i>Sign in with Google</a><
                                        a className="btn btn-outline-info w-100 mb-3" href="#"><i className="fi-facebook fs-lg me-1"></i>Sign in with Facebook
                                    </a>
                                    <div className="d-flex align-items-center py-3 mb-3">
                                        <hr className="hr-light w-100" />
                                        <div className="text-light opacity-70 px-3">Or</div>
                                        <hr className="hr-light w-100" />
                                    </div>
                                    <form onSubmit={handleSubmit} className="needs-validation" noValidate="">
                                        <div className="mb-4">
                                            <label className="form-label text-light" htmlFor="signup-name">Full name</label>
                                            <input className="form-control form-control-light" onChange={({ target }) =>
                                                setUserInfo({ ...userInfo, fullname: target.value })} type="text" id="signup-name" placeholder="Enter your full name" required="" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label text-light" htmlFor="signup-email">Email address</label>
                                            <input className="form-control form-control-light" onChange={({ target }) =>
                                                setUserInfo({ ...userInfo, email: target.value })} type="email" id="signup-email" placeholder="Enter your email" required="" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label text-light" htmlFor="signup-password">Password <span className="fs-sm opacity-50">min. 8 char</span></label>
                                            <div className="password-toggle">
                                                <input className="form-control form-control-light" onChange={({ target }) =>
                                                    setUserInfo({ ...userInfo, password: target.value })} type="password" id="signup-password" minLength="8" required="" />
                                                <label className="password-toggle-btn" aria-label="Show/hide password">
                                                    <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label text-light" htmlFor="signup-password-confirm">Confirm password</label>
                                            <div className="password-toggle">
                                                <input className="form-control form-control-light" onChange={({ target }) =>
                                                    setUserInfo({ ...userInfo, confirm_password: target.value })} type="password" id="signup-password-confirm" minLength="8" required="" />
                                                <label className="password-toggle-btn" aria-label="Show/hide password">
                                                    <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-check form-check-light mb-4">
                                            <label className="form-check-label" htmlFor="agree-to-terms"><span className="opacity-70">By joining, I agree to the</span> <a href="#" className="text-light">Terms of use</a> <span className="opacity-70">and</span> <a href="#" className="text-light">Privacy policy</a></label>
                                        </div>
                                        <button className="btn btn-primary btn-lg w-100" type="submit">Sign up</button>
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
export default SignUp;