import React from "react";
import ProfileFormLayout from "./ProfileFormLayout";

export default function FormInputs({ countries, user }) {
    return (
        <div className="border border-light rounded-3 p-3 mb-4 accordion">
            <ProfileFormLayout title="Full name" content={user.fullname} divId="name-collapse">
                <div className="accordion-collapse collapse" id="name-collapse">
                    <input placeholder="Enter your name" className="form-control-light mt-3 form-control" value={user.fullname} />
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Gender" content={user.gender} divId="gender-collapse">
                <div className="accordion-collapse collapse" id="gender-collapse">
                    <select className="form-select-light mt-3 form-select">
                        {user.gender &&
                            <option selected value={user.gender}>{user.gender}</option>}
                        <option value="Other">Other</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Email" content={user.email} divId="email-collapse">
                <div className="accordion-collapse collapse" id="email-collapse">
                    <input placeholder="Enter your email address" type="email" className="form-control-light mt-3 form-control" value={user.email} />
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Phone number" content={user.phone} divId="phone-collapse">
                <div className="accordion-collapse collapse" id="phone-collapse">
                    <input placeholder="Enter your phone number" type="tel" className="form-control-light mt-3 form-control" value={user.phone} />
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Country" content={user.country} divId="country-collapse">
                <div className="accordion-collapse collapse" id="country-collapse">
                    <select className="form-select-light mt-3 form-select">
                        {user.country &&
                            <option selected value={user.country}>{user.country}</option>}
                        {countries.map((country, index) => (
                            <option key={index} value={country.name.common}>{country.name.common}</option>
                        ))}
                    </select>
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Address" content={user.address} divId="address-collapse" border={false}>
                <div className="accordion-collapse collapse" id="address-collapse">
                    <input placeholder="Enter your address" type="text" className="form-control-light mt-3 form-control" value={user.address} />
                </div>
            </ProfileFormLayout>
        </div>
    )
}