export default function Aside() {
    return (
        <>
            <aside class="col-lg-4 col-xl-3 border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2">
                <div class="offcanvas offcanvas-start offcanvas-collapse" id="filters-sidebar">
                    <div class="offcanvas-header d-flex d-lg-none align-items-center">
                        <h2 class="h5 mb-0">Filters</h2>
                        <button class="btn-close" type="button" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div class="offcanvas-body py-lg-4">
                        <div class="pb-4 mb-2">
                            <h3 class="h6">Drama Movies</h3>
                            <select class="form-select mb-2">
                                <option value="Chicago">Movies</option>
                                <option value="Chicago">Tv Series</option>
                            </select>
                        </div>
                        <div class="border-top py-4">
                            <button class="btn btn-outline-primary" type="button"><i class="fi-search me-2">
                            </i>Search</button>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}