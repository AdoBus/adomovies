export default function SortBy({ discover }) {
    return (
        <>
            <div className="d-flex flex-sm-row flex-column align-items-sm-center mt-5 mb-5 align-items-stretch my-2">
                <div className="d-flex align-items-center flex-shrink-0">
                    <label className="fs-sm me-2 pe-1 text-nowrap" htmlFor="sortby">
                        <i className="fi-tv text-muted mt-n1 me-2"></i>Media Type:</label>
                    <select className="form-select form-select-sm" id="sortby">
                        <option>Movies</option>
                        <option>Tv Series</option>
                    </select>
                </div>
                <hr className="d-none d-sm-block w-100 mx-4" />
                <div className="d-none d-sm-flex align-items-center flex-shrink-0 text-muted">
                    <i className="fi-check-circle me-2"></i><span className="fs-sm mt-n1">{discover.total_results} results</span>
                </div>
            </div>
        </>
    )
}