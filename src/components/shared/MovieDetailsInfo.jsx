import React from "react";
import moment from "moment";


const formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

const MovieDetailsInfo = ({ movie }) => {
    return (
        <div className="row mb-3 text-light opacity-70">
            <div className="fs-sm col-md-4 pt-2 mb-1">
                <strong>Release date</strong>: {moment(movie.last_air_date ? movie.last_air_date : movie.release_date).format('LL')}
            </div>
            <div className="fs-sm col-md-4 pt-2 mb-1">
                <strong>IMDb Rating</strong>: {movie.vote_average}
            </div>
            <div className="fs-sm col-md-4 pt-2 mb-1">
                <strong>Duration</strong>: {movie.runtime ? movie.runtime : movie.episode_run_time} min
            </div>
            <div className="row">
                <div className="fs-sm col-md-4 pt-2 mb-1">
                    <strong>Country</strong>: {movie.production_countries.slice(0, 1).map(p_country => (p_country.name))}
                </div>
                <div className="fs-sm col-md-4 pt-2 mb-1">
                    <strong>Production</strong>: {movie.production_companies.map(company => (
                        company.name
                    )).join(', ')}
                </div>
                <div className="fs-sm col-md-4 pt-2 mb-1">
                    <strong>Revenue</strong>: {movie.budget ? `$${formatCash(movie.revenue)}` : 'No Data'}
                </div>
            </div>
        </div>
    )
}
export default MovieDetailsInfo