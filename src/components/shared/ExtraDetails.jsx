import Image from 'next/image'


export default function ExtraDetails({movie}) {
    return (
        <div className='col-lg-2 col-xl-3 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5"'>
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h6 className="mb-0 me-md-4">Status</h6>
                </div>
            </div>
            <div className="mb-3">
                <p>{movie.status}</p>
            </div>
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h6 className="mb-0 me-md-4">Original Language</h6>
                </div>
            </div>
            <div className="mb-3">
                <p>{movie.spoken_languages[0].english_name}</p>
            </div>
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h6 className="mb-0 me-md-4">Budget</h6>
                </div>
            </div>
            <div className="mb-3">
                <p>${movie.budget}</p>
            </div>
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h6 className="mb-0 me-md-4">Revenue</h6>
                </div>
            </div>
            <div className="mb-3">
                <p>${movie.revenue}</p>
            </div>
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h6 className="mb-0 me-md-4">Production Countries</h6>
                </div>
            </div>
            {movie.production_countries.map(company => (
                <div key={company.name}>
                    <div className="mb-3">
                        <p>{company.name}</p>
                    </div>
                </div>
            ))}
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h6 className="mb-0 me-md-4">Production Companies</h6>
                </div>
            </div>
            {movie.production_companies.map(company => (
                <div key={company.name} className="mb-3">
                    <a className="d-flex align-items-center text-decoration-none" href="#">
                        <Image className="rounded-circle" src={`https://www.themoviedb.org/t/p/w440_and_h660_face${company.logo_path}`} alt={company.name} height="44" width="44" />
                        <div className="ps-2">
                            <h6 className="fs-sm text-nav lh-base mb-1">{company.name}</h6>
                            <div className="d-flex text-body fs-xs"><strong>Origin Country:</strong>{company.origin_country}</div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}