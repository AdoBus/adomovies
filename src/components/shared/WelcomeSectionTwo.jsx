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

const WelcomeSectionTwo = ({movies}) => {
    return (
        <div className="container p-0 mb-5 pb-5">
            <div className="row g-0 mt-n3">
                <div id="xyzz" name="2" className="col-lg-12 col-xl-12 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                    <h4 class="display-6 text-white text-center mb-3">What are we watching now?</h4>
                    <p className="fs-lg text-light opacity-70 text-center mb-5">
                        We have more than 10000+ movies and Tv Series in our platform waiting for you.
                    </p>
                    <div className="gallery mt-3">
                        <Carousel
                            responsive={responsive}
                            swipeable={true}
                            ssr={true}
                            infinite={true}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                        >
                            {movies.results.map((movie, index) => (
                                <Image className="rounded-1" width="274" height="411" alt={movie.name}
                                    src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : '/img/errors/grey.jpg'} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WelcomeSectionTwo;