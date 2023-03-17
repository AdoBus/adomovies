import React from "react";
import Faqs from "./Faqs";
import Image from "next/image";

const WelcomeSectionSix = () => {
    return (
        <section class="container mb-5 pb-2 pb-lg-5">
            <div class="row">
                <div class="col-lg-5 col-md-6">
                    <div class="d-flex flex-column text-md-start text-center">
                        <div class="order-md-1 order-2 mx-md-0 mx-auto mb-md-5 mb-4" style={{ "maxWidth": "416px" }}>
                            <h2 class="mb-md-3 mb-5 text-light">FAQs</h2>
                            <p class="mb-4 pb-md-2 text-light opacity-70">
                                Everything You Need to Know About Our Free Movie and TV Streaming Service.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-5 offset-lg-1">
                    <div class="accordion accordion-light" id="accordionFAQ">
                        <Faqs
                            title="Is the streaming service completely free?"
                            content="Yes, our streaming service is 100% free. There are no hidden fees, charges or subscriptions."
                            headingId="heading-1"
                            collapseId="collapse-1"
                        />
                        <Faqs
                            title="Do I need to create an account to access the free content?"
                            content="Yes, you will need to create an account to access our free movie and TV series streaming service."
                            headingId="heading-2"
                            collapseId="collapse-2"
                        />
                        <Faqs
                            title="What devices are compatible with the streaming service?"
                            content="Our streaming service is compatible with a variety of devices including smartphones, tablets, laptops, Smart TVs, and streaming devices such as Roku and Amazon Fire TV Stick."
                            headingId="heading-3"
                            collapseId="collapse-3"
                        />
                        <Faqs
                            title="Can I download movies or TV shows to watch offline?"
                            content="Yes, our streaming service does currently offer the ability to download content for offline viewing in Movies but not Tv series. However, you can stream our entire library of movies and TV series on-demand for free."
                            headingId="heading-4"
                            collapseId="collapse-4"
                        />
                        <Faqs
                            title="What kind of content is available on the streaming service?"
                            content="Our streaming service offers a wide variety of content, including new releases, popular movies, TV series, documentaries, and more. Our library is regularly updated with new titles, so you'll always have something new to watch."
                            headingId="heading-5"
                            collapseId="collapse-5"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WelcomeSectionSix;