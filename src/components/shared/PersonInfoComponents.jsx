import React from "react";
import PersonImage from "./PersonImage";
import PersonSocial from "./PersonSocial";
import PersonInfo from "./PersonInfo";
import moment from "moment";

export default function PersonInfoComponents({person}) {
    return (
        <>
            <PersonImage person={person} />
            <PersonSocial person={person}/>
            <div className="d-flex w-100 justify-content-between justify-content-lg-start">
                <h2 className="h5 mb-0 me-md-4 text-light">Personal Info</h2>
            </div>
            <PersonInfo title="Occupation" value={person.known_for_department} />
            <PersonInfo title="Credits" value={Math.round(person.popularity * 10) / 10} />
            <PersonInfo title="Gender" value={person.gender === 2 ? "Male" : "Female"} />
            <PersonInfo title="Birthday" value={moment(person.birthday).format('LL')} />
            {person.deathday !== null &&
                <PersonInfo title="Deathday" value={moment(person.deathday).format('LL')} />
            }
            <PersonInfo title="Place of Birth" value={person.place_of_birth} />
            {person.also_known_as.length > 0 &&
                <div className="d-flex mt-2 w-100 align-items-center justify-content-between justify-content-lg-start">
                    <div className="ps-2">
                        <h6 className="fs-sm lh-base mb-1 text-light opacity-70">
                            Also Known As
                        </h6>
                        {person.also_known_as.map(also_known_as => (
                            <p key={also_known_as} className="text-light opacity-70">{also_known_as}</p>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}