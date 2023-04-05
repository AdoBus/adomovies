import React, { useState } from "react";
import toast from "react-hot-toast"


export default function AccountPasswordForm({ session }) {
    const userId = session.user._id
    const [userInfo, setUserInfo] = useState({
        current_pass: "",
        new_pass: "",
        confirm_pass: "",
        userId: userId
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (userInfo.current_pass === "" || userInfo.new_pass === "" || userInfo.confirm_pass === "") {
            toast.error("🧐 Oops, Missing Details!", {
                style: {
                    borderRadius: '10px',
                    background: '#1D1929',
                    color: '#fff',
                    border: "solid 1px white"
                },
                icon: null,
            })
            return
        }
        if (userInfo.new_pass !== userInfo.confirm_pass) {
            toast.error("🧐 Oops, Passwords don't match!", {
                style: {
                    borderRadius: '10px',
                    background: '#1D1929',
                    color: '#fff',
                    border: "solid 1px white"
                },
                icon: null,
            })
            return
        }
        const res = await fetch(`/api/auth/update-password`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
        })
        const data = await res.json()

        await toast.promise(
            new Promise((resolve, reject) => {
                if (data.error) {
                    reject(data);
                } else {
                    setTimeout(() => {
                        resolve(data);
                    }, 2000);
                }
            }),
            {
                loading: 'We are updating your password...',
                success: (() => {
                    return `Your password updated successful`;
                }),
                error: (e) => {
                    return `${e.error}`;
                },
            },
            {
                style: {
                    borderRadius: '10px',
                    background: '#1D1929',
                    color: '#fff',
                    border: "solid 1px white"
                }
            },

        )
    }
    return (
        <>
            <form className="needs-validation pb-4" onSubmit={handleSubmit}>
                <div className="row align-items-end mb-2">
                    <div className="col-sm-6 mb-2">
                        <label className="form-label text-light" htmlFor="account-password">Current password</label>
                        <div className="password-toggle">
                            <input onChange={({ target }) =>
                                setUserInfo({ ...userInfo, current_pass: target.value })}
                                className="form-control form-control-light" type="password" id="account-password" required="" />
                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                <input className="password-toggle-check" type="checkbox" />
                                <span className="password-toggle-indicator"></span>
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-2">
                        <a className="d-inline-block text-light mb-2" href="#">Forgot password?</a>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-sm-6 mb-3">
                        <label className="form-label text-light" htmlFor="account-password-new">New password</label>
                        <div className="password-toggle">
                            <input onChange={({ target }) =>
                                setUserInfo({ ...userInfo, new_pass: target.value })}
                                className="form-control form-control-light" type="password" id="account-password-new" required="" />
                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                <input className="password-toggle-check" type="checkbox" />
                                <span className="password-toggle-indicator"></span>
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                        <label className="form-label text-light" htmlFor="account-password-confirm">Confirm password</label>
                        <div className="password-toggle">
                            <input onChange={({ target }) =>
                                setUserInfo({ ...userInfo, confirm_pass: target.value })}
                                className="form-control form-control-light" type="password" id="account-password-confirm" required="" />
                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                <input className="password-toggle-check" type="checkbox" />
                                <span className="password-toggle-indicator"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-primary" type="submit">Update password</button>
            </form>
        </>
    )
}