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
            <div class="modal fade" id="signup-modal" tabindex="-1" aria-hidden="true" style={{ display: "none" }}>
                <div class="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style={{ "maxWidth": "950px" }}>
                    <div class="modal-content bg-dark border-light">
                        <div class="modal-body px-0 py-2 py-sm-0">
                            <button class="btn-close btn-close-white position-absolute top-0 end-0 mt-3 me-3" type="button" data-bs-dismiss="modal"></button>
                            <div class="row mx-0 align-items-center">
                                <div class="col-md-6 p-4 p-sm-5">
                                    <h2 class="h3 text-light mb-4 mb-sm-5">Sign up now and watch the magic happen 🍿🎥</h2>
                                    <ul class="list-unstyled mb-4 mb-sm-5">
                                        <li class="d-flex mb-2"><i class="fi-check-circle text-primary mt-1 me-2"></i>
                                            <span class="text-light">Enter your info with a big smile on your face</span>
                                        </li>
                                        <li class="d-flex mb-2"><i class="fi-check-circle text-primary mt-1 me-2"></i>
                                            <span class="text-light">Hit that sign-up button</span>
                                        </li>
                                        <li class="d-flex mb-0"><i class="fi-check-circle text-primary mt-1 me-2"></i>
                                            <span class="text-light">Don&apos;t forget to verify your email because we don&apos;t want a stranger at the party</span>
                                        </li>
                                    </ul>
                                    <img class="d-block mx-auto" src="/img/signin-modal/signup.svg" width="344" alt="Illustartion" />
                                    <div class="text-light mt-sm-4 pt-md-3"><span class="opacity-60">Already have an account? </span>
                                        <a class="text-light" href="#signin-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Sign in</a>
                                    </div>
                                </div>
                                <div class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                                    <a class="btn btn-outline-info w-100 mb-3" href="#"><i class="fi-google fs-lg me-1"></i>Sign in with Google</a><
                                        a class="btn btn-outline-info w-100 mb-3" href="#"><i class="fi-facebook fs-lg me-1"></i>Sign in with Facebook
                                    </a>
                                    <div class="d-flex align-items-center py-3 mb-3">
                                        <hr class="hr-light w-100" />
                                        <div class="text-light opacity-70 px-3">Or</div>
                                        <hr class="hr-light w-100" />
                                    </div>
                                    <form onSubmit={handleSubmit} class="needs-validation" noValidate="">
                                        <div class="mb-4">
                                            <label class="form-label text-light" htmlFor="signup-name">Full name</label>
                                            <input class="form-control form-control-light" onChange={({ target }) =>
                                                setUserInfo({ ...userInfo, fullname: target.value })} type="text" id="signup-name" placeholder="Enter your full name" required="" />
                                        </div>
                                        <div class="mb-4">
                                            <label class="form-label text-light" htmlFor="signup-email">Email address</label>
                                            <input class="form-control form-control-light" onChange={({ target }) =>
                                                setUserInfo({ ...userInfo, email: target.value })} type="email" id="signup-email" placeholder="Enter your email" required="" />
                                        </div>
                                        <div class="mb-4">
                                            <label class="form-label text-light" htmlFor="signup-password">Password <span class="fs-sm opacity-50">min. 8 char</span></label>
                                            <div class="password-toggle">
                                                <input class="form-control form-control-light" onChange={({ target }) =>
                                                    setUserInfo({ ...userInfo, password: target.value })} type="password" id="signup-password" minLength="8" required="" />
                                                <label class="password-toggle-btn" aria-label="Show/hide password">
                                                    <input class="password-toggle-check" type="checkbox" /><span class="password-toggle-indicator"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <label class="form-label text-light" htmlFor="signup-password-confirm">Confirm password</label>
                                            <div class="password-toggle">
                                                <input class="form-control form-control-light" onChange={({ target }) =>
                                                    setUserInfo({ ...userInfo, confirm_password: target.value })} type="password" id="signup-password-confirm" minLength="8" required="" />
                                                <label class="password-toggle-btn" aria-label="Show/hide password">
                                                    <input class="password-toggle-check" type="checkbox" /><span class="password-toggle-indicator"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-check form-check-light mb-4">
                                            <label class="form-check-label" htmlFor="agree-to-terms"><span class="opacity-70">By joining, I agree to the</span> <a href="#" class="text-light">Terms of use</a> <span class="opacity-70">and</span> <a href="#" class="text-light">Privacy policy</a></label>
                                        </div>
                                        <button class="btn btn-primary btn-lg w-100" type="submit">Sign up</button>
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