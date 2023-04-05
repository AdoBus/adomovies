import React, { useState, useEffect } from "react";
import UploadPicture from "./UploadPicture";
import FormInputs from "./ProfileFormInputs";
import toast from "react-hot-toast"
import { Upload } from "@aws-sdk/lib-storage";
import { S3 } from "@aws-sdk/client-s3";


export default function ProfileForm({ session, countries, s3Bucket }) {
    const { user } = session
    const [image, setImage] = useState(null);
    const [userInfo, setUserInfo] = useState(
        {
            id: user._id,
            fullname: user.fullname,
            gender: user.gender,
            phone: user.phone,
            country: user.country,
            address: user.address,
            avatar: user.avatar
        }
    )

    useEffect(() => {
      setUserInfo(prevUserInfo => ({...prevUserInfo, avatar: image ? `https://adomovies.s3.eu-north-1.amazonaws.com/${user._id}-${image.name}` : user.avatar}))
    }, [image, user._id, user.avatar])
    

    const handleUpload = async () => {
        if (image) {
            const s3 = new S3({
                accessKeyId: s3Bucket.vc57fccddsd54355,
                secretAccessKey: s3Bucket.fxsr679964fhmk553,
                region: s3Bucket.lljppojbc4435fv,
            });

            const getBase64 = async (file) => {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.readAsArrayBuffer(file);
                    reader.onloadend = () => {
                        resolve(Buffer.from(reader.result));
                    };
                });
            };

            const params = {
                Bucket: "adomovies",
                Key: `${user._id}-${image.name}`,
                Body: await getBase64(image),
            };

            new Upload({
                client: s3,
                params
            })
                .done()
                .then(() => {
                    console.log('Success')
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleUpload()

        const { fullname, gender, phone, country, address } = userInfo

        if (!fullname || !gender || !phone || !country || !address) {
            toast.error("🧐 Please fill in all fields", {
                style: {
                    borderRadius: '10px',
                    background: '#1D1929',
                    color: '#fff',
                    border: "solid 1px white"
                },
                icon: null,
            })
        }

        const res = await fetch(`/api/auth/update-profile`, {
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
                    reject(data);
                } else {
                    setTimeout(() => {
                        resolve(data);
                    }, 2000);
                }
            }),
            {
                loading: 'We are updating your profile...',
                success: (() => {
                    return `Your profile updated successful`;
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
            <form onSubmit={handleSubmit} method="post">
                <div className="pt-2 row">
                    <div className="mb-2 mb-m-4 col-lg-9 col-md-12 col-sm-8">
                        <FormInputs user={user} countries={countries} setUserInfo={setUserInfo} userInfo={userInfo} />
                    </div>
                    <div className="mb-4 col-lg-3 col-md-12 col-sm-4">
                        <UploadPicture setImage={setImage} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="d-flex align-items-center justify-content-between pb-1">
                            <button type="submit" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-light btn-link px-0 btn-sm">
                                <i className="fi-trash me-2"></i>Delete account
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}