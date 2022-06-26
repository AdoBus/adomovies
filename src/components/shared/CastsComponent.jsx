import Image from "next/image"

export default function Casts({movie}) {
    return (
        <>
            <div className="row g-4">
                <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                    <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                        <h2 className="h5 mb-0 me-md-4 text-light">Main Casts</h2>
                    </div>
                </div>
                {movie.credits.cast.slice(0, 6).map(c => (
                    <div key={c.name} className="col-md-2 col-6">
                        {/* <!-- Item --> */}
                        <a className="card card-light h-100 shadow-sm border-0">
                            <div className="card-img-top card-img-hover">
                                <Image width="178" height="205.5" src={c.profile_path ? `/api/getImage?q=${c.profile_path}` : '/img/errors/grey.jpg'} alt={c.name} />
                            </div>
                            <div className="card-body text-center">
                                <p className="mb-0 fs-sm"><strong>{c.name}</strong></p>
                                <p className="mb-0 fs-sm text-light opacity-70">{c.character}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}