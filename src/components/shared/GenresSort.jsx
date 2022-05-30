export default function SortBy({ discover }) {
    return (
        <>
            <div class="d-flex flex-sm-row flex-column align-items-sm-center mt-5 mb-5 align-items-stretch my-2">
                <div class="d-flex align-items-center flex-shrink-0">
                    <label class="fs-sm me-2 pe-1 text-nowrap" htmlFor="sortby">
                        <i class="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                    <select class="form-select form-select-sm" id="sortby">
                        <option>Popularity</option>
                        <option>Newest</option>
                    </select>
                </div>
                <hr class="d-none d-sm-block w-100 mx-4" />
                <div class="d-none d-sm-flex align-items-center flex-shrink-0 text-muted">
                    <i class="fi-check-circle me-2"></i><span class="fs-sm mt-n1">{discover.total_results} results</span>
                </div>
            </div>
        </>
    )
}