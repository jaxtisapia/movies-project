import React from 'react'
import { Dimmer, Loader, Image, Segment, Input } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

import { Table } from '../../components/table'
import moviesDataLocal from './movies.json'
import useMoviesData from './hooks/useMoviesData'
import generateGenreFromMovieObject from './utils/generateGenreFromMovieObject'

const columns = [
    { Header: 'Title', accessor: 'title' },
    { Header: 'Year', accessor: 'year' },
    { Header: 'Runtime', accessor: 'runtime' },
    { Header: 'Rating', accessor: 'rating' },
    { Header: 'Genres', accessor: generateGenreFromMovieObject },
]

function debounce(func, ms) {
    let timeout
    return function() {
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this, arguments), ms)
    }
}

// todo useDebounce hook instead
const debouncedSearchQueryTrigger = debounce(searchTrigger => searchTrigger(), 2000)

const MovieTitleSearchInput = ({ onSearchChanged, loading }) => {
    const [query, setQuery] = React.useState('')
    const [isWaitingToSearchQuery, setWaitingToSearchQuery] = React.useState(false)

    function handleSearchTextChange(_, { value }) {
        setWaitingToSearchQuery(true)
        setQuery(value)

        debouncedSearchQueryTrigger(() => {
            setWaitingToSearchQuery(false)
            onSearchChanged(value)
        })
    }

    return (
        <Input
            onChange={handleSearchTextChange}
            icon="search"
            placeholder="Search movie by title ..."
            loading={loading || isWaitingToSearchQuery}
        />
    )
}

const MoviesList = () => {
    const history = useHistory()
    const [titleFilter, setTitleFilter] = React.useState('')
    const [movieData, loaders] = useMoviesData({ titleFilter })
    const { isMoviesLoading, isFilterLoading } = loaders || {}
    const { filteredMovies: movies } = movieData || {}

    function handleMovieClicked(movie) {
        const movieTitle = movie?.original?.title

        // todo handle when movieTitle is null
        history.push(`/movie/${movieTitle}`)
    }

    function handleSearchByTitle(updatedTitleFilter) {
        setTitleFilter(updatedTitleFilter)
    }

    return (
        <div>
            <Dimmer active={isMoviesLoading} inverted>
                <Loader>Loading Movies</Loader>
            </Dimmer>

            <div>
                <MovieTitleSearchInput onSearchChanged={handleSearchByTitle} loading={isFilterLoading} />
            </div>

            <Table columns={columns} data={movies} onRowClicked={handleMovieClicked} />
        </div>
    )
}

export default MoviesList
