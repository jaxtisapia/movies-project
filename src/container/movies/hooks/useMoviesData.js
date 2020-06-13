import React from 'react'
import moviesDataLocal from '../movies.json'
import settings from '../../../config/settings'

function doesQueryMatchFirstName(movie, titleFilter) {
    // todo improve search algorithm
    let movieTitle = movie?.title || ''
    movieTitle = movieTitle.toLowerCase()

    const queryFilter = titleFilter.toLowerCase()

    return movieTitle.search(queryFilter) >= 0
}

function fetchMoviesWithCacheStrategy() {
    // todo implement a localStorage cache to prevent re-fetch from server (instead of fetching from moviesDataLocal)
    return fetchMoviesFromServer().catch(() => moviesDataLocal)
}

function fetchMoviesFromServer() {
    return fetch(settings.moviesApi.url, { mode: 'no-cors' }).then(response =>
        response.json()
    )
}

const useMoviesData = ({ titleFilter }) => {
    const [movies, setMovies] = React.useState([])
    const [filteredMovies, setFilteredMovies] = React.useState([])
    const [isMoviesLoading, setMoviesLoading] = React.useState(false)
    const [isFilterLoading, setFilterLoading] = React.useState(false)

    React.useEffect(() => {
        setMoviesLoading(true)

        fetchMoviesWithCacheStrategy()
            .then(response => setMovies(response))
            .finally(() => setMoviesLoading(false))
    }, [])

    React.useEffect(
        () => {
            setFilterLoading(true)
            const isTitleSearchQueryProvided = !!titleFilter

            const updatedFilteredMovies = !isTitleSearchQueryProvided
                ? movies
                : movies.filter(movie =>
                      doesQueryMatchFirstName(movie, titleFilter)
                  )

            setFilteredMovies(updatedFilteredMovies)
            setFilterLoading(false)
        },
        [titleFilter, movies]
    )

    return [{ movies, filteredMovies }, { isMoviesLoading, isFilterLoading }]
}

export default useMoviesData
