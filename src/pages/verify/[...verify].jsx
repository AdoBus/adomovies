import React, { useEffect } from "react";
import Layout from "../../components/shared/LayoutComponent";
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { Toaster } from "react-hot-toast";
import "react-multi-carousel/lib/styles.css";

export default function Verify() {
    const router = useRouter()
    useEffect(() => {
        const verify = router.query.verify
        if (verify) {
            const [id, key] = verify
            fetch(`/api/auth/verify-account`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, key })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        toast.error(`🧐 ${data.error}` , {
                            style: {
                                borderRadius: '10px',
                                background: '#1D1929',
                                color: '#fff',
                                border: "solid 1px white"
                            },
                            icon: null,
                        })
                        router.push('/welcome')
                    } else {
                        toast.success("🎉 Hooray! You're accout has been verified", {
                            style: {
                                borderRadius: '10px',
                                background: '#1D1929',
                                color: '#fff',
                                border: "solid 1px white"
                            },
                            icon: null,
                        })
                        router.push('/welcome')
                    }
                })
        }
    })
    return (
        <Layout>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <main className="page-wrapper">
                <section className="d-flex bg-dark align-items-center position-relative min-vh-100 py-5">
                    <span className="position-absolute top-50 start-50 translate-middle zindex-1 rounded-circle mt-sm-0 mt-n5"
                        style={{ "width": "50vw", "height": "50vw", "backgroundColor": "rgba(83, 74, 117, 0.3)", "filter": "blur(6.4vw)" }}>
                    </span>
                    <div className="container d-flex justify-content-center position-relative zindex-5 text-center">
                        <div className="col-lg-8 col-md-10 col-12 px-0">
                            <h1 className="display-1 mb-lg-5 mb-4 text-light">Checking...</h1>
                            <div className="ratio ratio-16x9 mx-auto mb-lg-5 mb-4 py-4" style={{ "maxWidth": "556px" }}>
                                <img className="py-4" src="/img/welcome/verify.svg" background="transparent" speed="1" loop="" autoplay="" alt="verify" />
                            </div>
                            <p className="h2 mb-lg-5 mb-4 pb-2 text-light">We are verifying your email</p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}