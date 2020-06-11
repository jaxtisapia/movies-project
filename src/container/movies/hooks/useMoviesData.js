import React from 'react'
import moviesDataLocal from '../movies.json'

const useMoviesData = ({ titleFilter }) => {
    const [movies, setMovies] = React.useState([])
    const [filteredMovies, setFilteredMovies] = React.useState([])
    const [isLoading, setLoading] = React.useState(false)
    const [isFilterLoading, setFilterLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true)

        setImmediate(() => {
            setMovies(moviesDataLocal)
            setLoading(false)
        })
    }, [])

    React.useEffect(
        () => {
            setFilterLoading(true)
            const isTitleSearchQueryProvided = !!titleFilter

            setImmediate(() => {
                const updatedFilteredMovies = !isTitleSearchQueryProvided
                    ? movies
                    : // todo improve search algorithm
                      movies.filter(movie => {
                          const movieTitle = movie?.title || ''

                          return (
                              movieTitle
                                  .toLowerCase()
                                  .search(titleFilter.toLowerCase()) >= 0
                          )
                      })

                setFilteredMovies(updatedFilteredMovies)
                setFilterLoading(false)
            })
        },
        [titleFilter, movies]
    )

    return [movies, filteredMovies, isLoading, isFilterLoading]
}

export default useMoviesData
