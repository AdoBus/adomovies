import React from "react";
import Image from "next/image";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const WelcomeSectionFive = ({tv}) => {
    return (
        <div className="container p-0 mb-5 pb-5">
            <h4 class="display-6 text-white text-center mb-3">"Don't Leave Your Couch</h4>
            <p className="fs-lg text-light opacity-70 text-center mb-5">
                Your love for lazy days at home will be satisfied with our 24/7 availability of
                over 300 Live TV series.
            </p>
            <Carousel
                responsive={responsive}
                swipeable={true}
                ssr={true}
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {tv.results.map((tv, index) => (
                    <div class="row align-items-center">
                        <div class="col-xl-4 d-none d-xl-block">
                            <Image width="416" height="400" class="rounded-3" src={tv.backdrop_path ? `https://image.tmdb.org/t/p/original${tv.backdrop_path}` : '/img/errors/grey.jpg'} alt="Agent picture" />
                        </div>
                        <div class="col-xl-4 col-md-5 col-sm-4">
                            <img class="rounded-3" src={tv.poster_path ? `https://image.tmdb.org/t/p/original${tv.poster_path}` : '/img/errors/grey.jpg'} alt="Agent picture" />
                        </div>
                        <div class="col-xl-4 col-md-7 col-sm-8 px-4 px-sm-3 px-md-0 ms-md-n4 mt-n5 mt-sm-0 py-3">
                            <div class="card card-light border-0 shadow-sm ms-sm-n5">
                                <blockquote class="blockquote card-body">
                                    <h4 className="text-light" style={{ "maxWidth": "22rem" }}>
                                        {tv.name}
                                    </h4>
                                    <p class="d-sm-none d-lg-block text-light opacity-70">
                                        <ReactReadMoreReadLess
                                            charLimit={206}
                                            readMoreText={"Read more"}
                                            readLessText={"Read less"}
                                            readMoreStyle={{ color: "#33cabb" }}
                                            readLessStyle={{ color: "#33cabb" }}>
                                            {tv.overview}
                                        </ReactReadMoreReadLess>
                                    </p>
                                    <footer class="d-flex justify-content-between">
                                        <div class="pe-3">
                                            <a class="text-decoration-none" href="real-estate-vendor-properties.html">
                                                <h6 class="mb-0">{tv.status}</h6>
                                            </a>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
export default WelcomeSectionFive;