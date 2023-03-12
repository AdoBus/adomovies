import React from "react";

const ProfileBreadCumb = () => {
    return (
        <>
            <nav aria-label="breadcrumb" className="mb-4 pt-md-3">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/real-estate">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/real-estate/account-info">Account</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Personal Info</li>
                </ol>
            </nav>
        </>
    )
}
export default ProfileBreadCumb;