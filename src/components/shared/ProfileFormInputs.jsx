import React from "react";
import ProfileFormLayout from "./ProfileFormLayout";

export default function FormInputs({countries}) {
    return (
        <div className="border border-light rounded-3 p-3 mb-4 accordion">
            <ProfileFormLayout title="Full name" content="Robert Fox" divId="name-collapse">
                <div className="accordion-collapse collapse" id="name-collapse">
                    <input placeholder="Enter your name" className="form-control-light mt-3 form-control" value="Robert Fox" />
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Gender" content="Other" divId="gender-collapse">
                <div className="accordion-collapse collapse" id="gender-collapse">
                    <select className="form-select-light mt-3 form-select">
                        <option value="Other">Choose gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Email" content="adolph@email.com" divId="email-collapse">
                <div className="accordion-collapse collapse" id="email-collapse">
                    <input placeholder="Enter your email address" type="email" className="form-control-light mt-3 form-control" value="robert_fox@email.com" />
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Phone number" content="0712025272" divId="phone-collapse">
                <div className="accordion-collapse collapse" id="phone-collapse">
                    <input placeholder="Enter your phone number" type="tel" className="form-control-light mt-3 form-control" value="(302) 555-0107" />
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Country" content="Tanzania" divId="country-collapse">
                <div className="accordion-collapse collapse" id="country-collapse">
                    <select className="form-select-light mt-3 form-select">
                        {countries.map(country => (
                            <option value={country.name.common}>{country.name.common}</option>
                        ))}
                    </select>
                </div>
            </ProfileFormLayout>
            <ProfileFormLayout title="Address" content="Dar es salaam" divId="address-collapse" border={false}>
                <div className="accordion-collapse collapse" id="address-collapse">
                    <input placeholder="Enter your address" type="text" className="form-control-light mt-3 form-control" value="Dar es salaam" />
                </div>
            </ProfileFormLayout>
        </div>
    )
}