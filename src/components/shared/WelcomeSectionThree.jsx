import React from "react";

const WelcomeSectionThree = () => {
    return (
        <section className="container mb-5 pb-lg-5 pb-3 pb-sm-4">
            <h2 className="mb-4 pb-2 text-light text-center">Why Us</h2>
            <div className="mx-auto" style={{ "maxWidth": "864px" }}>
                <div className="steps steps-light steps-vertical">
                    <div className="step">
                        <div className="step-progress">
                            <span className="step-progress-end"></span>
                            <span style={{ "backgroundColor": "#33cabb" }} className="step-number shadow-hover">1</span>
                        </div>
                        <div className="step-label">
                            <h3 className="h5 mb-2 pb-1 text-light">Always free</h3>
                            <p className="mb-0">
                                At last, you&apos;ve found a movie website that truly offers free content. You can watch anytime without needing to subscribe or pay any fees.
                            </p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-progress"><span className="step-progress-end"></span><span style={{ "backgroundColor": "#33cabb" }} className="step-number shadow-hover">2</span></div>
                        <div className="step-label">
                            <h3 className="h5 mb-2 pb-1 text-light">A lot to watch</h3>
                            <p className="mb-0">
                                Select from a vast collection of over 50,000 on-demand titles, all available for free, and enjoy instant access to over 3000 of Live TV series.
                            </p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-progress"><span className="step-progress-end"></span><span style={{ "backgroundColor": "#33cabb" }} className="step-number  shadow-hover">3</span></div>
                        <div className="step-label">
                            <h3 className="h5 mb-2 pb-1 text-light">Device friendly</h3>
                            <p className="mb-0">
                                Enjoy streaming premium content on your favorite devices, including Apple, Android, Smart TVs, and more. Get access to the good stuff anytime, anywhere.
                            </p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-progress"><span className="step-progress-end"></span><span style={{ "backgroundColor": "#33cabb" }} className="step-number shadow-hover">4</span></div>
                        <div className="step-label">
                            <h3 className="h5 mb-2 pb-1 text-light">Access worldwide</h3>
                            <p className="mb-0">
                                Experience the ultimate entertainment with access to the largest collection of content from numerous countries worldwide.
                                Our service offers more variety than any other platform, ensuring that you&apos;ll always find something new and exciting to watch..</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WelcomeSectionThree;