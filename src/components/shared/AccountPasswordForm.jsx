import React from "react";


export default function AccountPasswordForm() {
    return (
        <>
            <form className="needs-validation pb-4" novalidate="">
                <div className="row align-items-end mb-2">
                    <div className="col-sm-6 mb-2">
                        <label className="form-label text-light" for="account-password">Current password</label>
                        <div className="password-toggle">
                            <input className="form-control form-control-light" type="password" id="account-password" required="" />
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
                        <label className="form-label text-light" for="account-password-new">New password</label>
                        <div className="password-toggle">
                            <input className="form-control form-control-light" type="password" id="account-password-new" required="" />
                            <label className="password-toggle-btn" aria-label="Show/hide password">
                                <input className="password-toggle-check" type="checkbox" />
                                <span className="password-toggle-indicator"></span>
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                        <label className="form-label text-light" for="account-password-confirm">Confirm password</label>
                        <div className="password-toggle">
                            <input className="form-control form-control-light" type="password" id="account-password-confirm" required="" />
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