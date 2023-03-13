import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { useState, Fragment, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router'
import $ from 'jquery'


export default function Search() {
    const SEARCH_URI = '/api/search';

    const [options, setOptions] = useState([]);

    const handleSearch = (query) => {

        fetch(`${SEARCH_URI}?q=${query}`)
            .then((resp) => resp.json())
            .then(({ results }) => {
                const options = results.map((i) => (
                    {
                        poster_path: i.poster_path,
                        id: i.id,
                        title: i.title ? i.title : i.original_name,
                        profile_path: i.profile_path
                    }
                ));

                setOptions(options);
            });
    };
    const filterBy = () => true;

    const router = useRouter()

    function getFormData() {
        return $('.rbt-input').val()
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        if (getFormData() === "") {
            return false;
        }

        router.push({
            pathname: '/search',
            query: `q=${getFormData()}`,
            shallow: false
        })
    }, [router])

    useEffect(() => {
        router.prefetch('/search')
    }, [router])

    return (
        <>
            <div className="order-lg-3 me-3">
                <form id='searchForm' className="form-group form-group-light"
                    style={{ 'paddingTop': '5px !important', 'paddingBottom': '5px !important' }} onSubmit={handleSubmit}>
                    <div className="input-group input-group-sm">
                        <span className="input-group-text text-muted">
                            <i className="fi-search"></i>
                        </span>
                        <AsyncTypeahead
                            filterBy={filterBy}
                            id="async-example"
                            labelKey='title'
                            minLength={3}
                            onSearch={handleSearch}
                            options={options}
                            placeholder="Enter Keywords..."
                            name='small'
                            renderMenuItemChildren={(option, props) => (
                                <>
                                    <Fragment>
                                        <img
                                            alt={option.title}
                                            src={option.poster_path ? `https://image.tmdb.org/t/p/original${option.poster_path}`
                                                : option.profile_path ? `https://image.tmdb.org/t/p/original${option.profile_path}` : '/img/errors/grey.jpg'}
                                            style={{
                                                height: '65px',
                                                marginRight: '10px',
                                                width: '50px',
                                                borderRadius: '10px'
                                            }}
                                        />
                                        <span>{option.title}</span>
                                    </Fragment>
                                </>
                            )}
                        />
                    </div>
                    <button type="submit" className="btn btn-translucent-primary btn-sm">Search</button>
                </form>
            </div>
        </>
    )
}