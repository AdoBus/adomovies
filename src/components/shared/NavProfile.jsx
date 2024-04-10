import React, {useState} from "react";
import Link from "next/link";
import { signOut } from "next-auth/react"
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/router";

export default function NavProfile({profile}) {
    const router = useRouter()
    const [avatar, setAvatar] = useState(profile.avatar) 
    const logOut = () => {
        signOut({ redirect: false })
        toast.success("👋 Bye Bye You've Log Out", {
            style: {
                borderRadius: '10px',
                background: '#1D1929',
                color: '#fff',
                border: "solid 1px white"
            },
            icon: null
        })
        router.push("/welcome")
    }
    return (
        <>
            <div className="dropdown d-none d-lg-block order-lg-3 my-n2 me-3">
                <a className="d-block py-2" type="button">
                    <Image className="rounded-circle" src={avatar} onError={() => setAvatar('/img/profile/popcorn.jpg')} width="40" height="40" alt={profile.fullname}/></a>
                <div className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                    <div className="d-flex align-items-start border-bottom border-light px-3 py-1 mb-2" style={{ "width": "16rem" }}>
                        <Image className="rounded-circle" src={avatar} onError={() => setAvatar('/img/profile/popcorn.jpg')} width="48" height="48" alt={profile.fullname} />
                        <div className="ps-2">
                            <h6 className="fs-base text-light mb-0">{profile.fullname}</h6>
                            <div className="fs-xs py-2">{profile.phone}<br />{profile.email}</div>
                        </div>
                    </div>
                    <Link className="dropdown-item" href="/account/profile">
                        <i className="fi-user me-2"></i>Personal Info
                    </Link>
                    <Link className="dropdown-item" href="/account/password">
                        <i className="fi-lock me-2"></i>Password & Security
                    </Link>
                    <Link className="dropdown-item" href="/account/my-favorites">
                        <i className="fi-heart me-2"></i>My Favorites
                    </Link>
                    <Link className="dropdown-item" href="/account/my-watchlists">
                        <i className="fi-bookmark me-2"></i>My Watchlists
                    </Link>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" onClick={() => logOut()}>Sign Out</a>
                </div>
            </div>
        </>
    )
}