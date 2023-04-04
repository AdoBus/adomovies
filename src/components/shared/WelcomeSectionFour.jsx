import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
        slidesToSlide: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1.3
    }
};

const WelcomeSectionFour = ({ people }) => {
    return (
        <div className="container p-0 mb-5 pb-5">
            <div className="row g-0 mt-n3">
                <div id="xyzz" name="2" className="col-lg-12 col-xl-12 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                    <h4 class="display-6 text-white text-center mb-3">From Your Favourite Actors and Actresses</h4>
                    <p className="fs-lg text-light opacity-70 text-center mb-5">
                        Get ready to stalk your favorite actors and actresses anytime, anywhere!
                    </p>
                    <div className="gallery mt-3">
                        <Carousel
                            responsive={responsive}
                            swipeable={true}
                            ssr={true}
                            infinite={true}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                        >
                            {people.results.filter(person => person.profile_path).map((person, index) => (
                                <Image key={index} className="rounded-1" width="274" height="411" alt={person.name}
                                    src={person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}` : '/img/errors/grey.jpg'} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WelcomeSectionFour;