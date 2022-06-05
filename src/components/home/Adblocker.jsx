import { AdBlockDetectedWrapper } from "adblock-detect-react";
import $ from 'jquery'
import { useEffect } from "react";

export default function Adblocker() {
    return (
        <>
            <AdBlockDetectedWrapper>
                <div className="modal show shadow-sm" id="myModal" style={{ display: "block" }}>
                    <div className="modal-dialog modal-sm modal-dialog-centered"
                        style={{ maxWidth: '400px' }}>
                        <div className="modal-content">
                            <div className="modal-body px-0 py-2 py-sm-0">
                                <div className="row mx-0 align-items-center">
                                    <div className="col-md-12 text-center px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                                        <img src="/img/logo/adblocker.png" width="130" height="100px" alt="adblocker"/>
                                        <h4>Please disable your ad blocker!</h4>
                                        <form className="needs-validation" noValidate="">
                                            <p>
                                                We know ads are annoying but please bear with us here & disable your ad blocker!
                                            </p>
                                            <p>This is the only way we monetize this site to keep it going.</p>
                                            <a className="btn btn-danger btn-lg rounded-pill w-100" href="https://adomovies.com">I&aposve disabled my ad blocker!</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdBlockDetectedWrapper>
        </>
    )

}