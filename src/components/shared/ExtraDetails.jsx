import Image from 'next/image'

const formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

export default function ExtraDetails({movie}) {
    return (
        <div className='col-lg-2 col-xl-3 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5'>
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h6 className="mb-0 me-md-4 text-light">Status</h6>
                </div>
            </div>
            <div className="mb-3 text-light opacity-70">
                <p>{movie.status}</p>
            </div>
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h6 className="mb-0 me-md-4 text-light">Original Language</h6>
                </div>
            </div>
            <div className="mb-3 text-light opacity-70">
                <p>{movie.spoken_languages.slice(0, 1).map(language =>(language.english_name))}</p>
            </div>
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h6 className="mb-0 me-md-4 text-light">Budget</h6>
                </div>
            </div>
            <div className="mb-3 text-light opacity-70">
                <p>{movie.budget ? `$${formatCash(movie.budget)}` : 'No Data'}</p>
            </div>
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h6 className="mb-0 me-md-4 text-light">Revenue</h6>
                </div>
            </div>
            <div className="mb-3 text-light opacity-70">
                <p>{movie.budget ? `$${formatCash(movie.revenue)}` : 'No Data'}</p>
            </div>
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h6 className="mb-0 me-md-4 text-light">Production Countries</h6>
                </div>
            </div>
            {movie.production_countries.map(company => (
                <div key={company.name}>
                    <div className="mb-3 text-light opacity-70">
                        <p>{company.name}</p>
                    </div>
                </div>
            ))}
            <div className="d-flex align-items-end align-items-lg-center justify-content-between pb-md-2">
                <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                    <h6 className="mb-0 me-md-4 text-light">Production Companies</h6>
                </div>
            </div>
            {movie.production_companies.map(company => (
                <div key={company.name} className="mb-3 text-light opacity-70">
                    <a className="d-flex align-items-center text-decoration-none" href="#">
                        <Image className="rounded-circle" src={company.logo_path ? `https://image.tmdb.org/t/p/original${company.logo_path}` : '/img/errors/grey.jpg'} alt={company.name} height="44" width="44" />
                        <div className="ps-2">
                            <h6 className="fs-sm lh-base mb-1 text-light opacity-70">{company.name}</h6>
                            <div className="d-flex fs-xs text-light opacity-70">
                                <strong>Origin Country:</strong>{company.origin_country}</div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}