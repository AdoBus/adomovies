export default function Aside() {
    return (
        <>
            <aside className="col-lg-4 col-xl-3 border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2">
                <div className="offcanvas offcanvas-start offcanvas-collapse" id="filters-sidebar">
                    <div className="offcanvas-header d-flex d-lg-none align-items-center">
                        <h2 className="h5 mb-0">Filters</h2>
                        <button className="btn-close" type="button" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body py-lg-4">
                        <div className="pb-4 mb-2">
                            <h3 className="h6">Drama Movies</h3>
                            <select className="form-select mb-2">
                                <option value="Chicago">Movies</option>
                                <option value="Chicago">Tv Series</option>
                            </select>
                        </div>
                        <div className="border-top py-4">
                            <button className="btn btn-outline-primary" type="button"><i className="fi-search me-2">
                            </i>Search</button>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}