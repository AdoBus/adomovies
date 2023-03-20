import React from "react";

const WelcomeSectionThree = () => {
    return (
        <section class="container mb-5 pb-lg-5 pb-3 pb-sm-4">
            <h2 class="mb-4 pb-2 text-light text-center">Why Us</h2>
            <div class="mx-auto" style={{ "maxWidth": "864px" }}>
                <div class="steps steps-light steps-vertical">
                    <div class="step">
                        <div class="step-progress">
                            <span class="step-progress-end"></span>
                            <span style={{ "backgroundColor": "#33cabb" }} class="step-number shadow-hover">1</span>
                        </div>
                        <div class="step-label">
                            <h3 class="h5 mb-2 pb-1 text-light">Always free</h3>
                            <p class="mb-0">
                                At last, you&apos;ve found a movie website that truly offers free content. You can watch anytime without needing to subscribe or pay any fees.
                            </p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-progress"><span class="step-progress-end"></span><span style={{ "backgroundColor": "#33cabb" }} class="step-number shadow-hover">2</span></div>
                        <div class="step-label">
                            <h3 class="h5 mb-2 pb-1 text-light">A lot to watch</h3>
                            <p class="mb-0">
                                Select from a vast collection of over 50,000 on-demand titles, all available for free, and enjoy instant access to over 3000 of Live TV series.
                            </p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-progress"><span class="step-progress-end"></span><span style={{ "backgroundColor": "#33cabb" }} class="step-number  shadow-hover">3</span></div>
                        <div class="step-label">
                            <h3 class="h5 mb-2 pb-1 text-light">Device friendly</h3>
                            <p class="mb-0">
                                Enjoy streaming premium content on your favorite devices, including Apple, Android, Smart TVs, and more. Get access to the good stuff anytime, anywhere.
                            </p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-progress"><span class="step-progress-end"></span><span style={{ "backgroundColor": "#33cabb" }} class="step-number shadow-hover">4</span></div>
                        <div class="step-label">
                            <h3 class="h5 mb-2 pb-1 text-light">Access worldwide</h3>
                            <p class="mb-0">
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