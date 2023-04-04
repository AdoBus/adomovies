import React from "react";
import ProfileFormLayout from "./ProfileFormLayout";

export default function FormInputs({ countries, user, setUserInfo, userInfo }) {
    return (
        <div className="border border-light rounded-3 p-3 mb-4 accordion">
            <ProfileFormLayout title="Full name" content={user.fullname} divId="name-collapse">
                <div className="accordion-collapse collapse" id="name-collapse">
                    <input onChange={({ target }) => setUserInfo({ ...userInfo, fullname: target.value })} value={userInfo.fullname}
                        placeholder="Enter your name" className="form-control-light mt-3 form-control" />
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Gender" content={user.gender} divId="gender-collapse">
                <div className="accordion-collapse collapse" id="gender-collapse">
                    <select className="form-select-light mt-3 form-select" onChange={({ target }) => setUserInfo({ ...userInfo, gender: target.value })}>
                        {userInfo.gender &&
                            <option defaultValue={userInfo.gender}>{userInfo.gender}</option>}
                        <option value="Other">Other</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Phone number" content={user.phone} divId="phone-collapse">
                <div className="accordion-collapse collapse" id="phone-collapse">
                    <input onChange={({ target }) => setUserInfo({ ...userInfo, phone: target.value })} value={userInfo.phone}
                        placeholder="Enter your phone number" type="tel" className="form-control-light mt-3 form-control" />
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Country" content={user.country} divId="country-collapse">
                <div className="accordion-collapse collapse" id="country-collapse">
                    <select defaultValue={user.country} className="form-select-light mt-3 form-select"
                        onChange={({ target }) => setUserInfo({ ...userInfo, country: target.value })}>
                        {userInfo.country &&
                            <option defaultValue={userInfo.country}>{userInfo.country}</option>}
                        {countries.map((country, index) => (
                            <option key={index} value={country.name}>{country.name}</option>
                        ))}
                    </select>
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Address" content={user.address} divId="address-collapse" border={false}>
                <div className="accordion-collapse collapse" id="address-collapse">
                    <input onChange={({ target }) => setUserInfo({ ...userInfo, address: target.value })} value={userInfo.address}
                        placeholder="Enter your address" type="text" className="form-control-light mt-3 form-control" />
                </div>
            </ProfileFormLayout>
        </div>
    )
}