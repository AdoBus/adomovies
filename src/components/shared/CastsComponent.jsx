import Image from "next/image"
import Link from "next/link"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

export default function Casts({ movie }) {
    return (
        <>
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h2 className="h5 mb-0 me-md-4 text-light">Main Casts</h2>
                </div>
            </div>
            <Carousel
                responsive={responsive}
                swipeable={true}
                ssr={true}
                infinite={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {movie.credits.cast.map(c => (
                    <div key={c.name} className="mt-3 me-3">
                        <Link href={`/person/${c.id}-${String(c.name).replaceAll(' ', '-')}`}>
                            <a>
                                <figure className="figure">
                                    <Image className="rounded-1 figure-img" width="178" height="287.5"
                                        src={c.profile_path ? `https://image.tmdb.org/t/p/original${c.profile_path}` : '/img/errors/grey.jpg'} alt={c.name} />
                                    <figcaption className="figure-caption text-light"><strong>{c.name}</strong></figcaption>
                                    <figcaption className="figure-caption">{c.character}</figcaption>
                                </figure>
                            </a>
                        </Link>
                    </div>
                ))}
            </Carousel>
        </>
    )
}