import React from 'react'
import { useHistory } from 'react-router-dom'
import { Table } from '../../components/table'
import moviesDataLocal from './movies.json'

const useMoviesData = () => {
    const [movies, setMovies] = React.useState([])

    React.useEffect(() => {
        setImmediate(() => setMovies(moviesDataLocal))
    }, [])
    return movies
}

const generateGenreFromMovie = movie => {
    const genres = movie?.genre || []
    return genres.join(', ')
}

const columns = [
    { Header: 'Title', accessor: 'title' },
    { Header: 'Year', accessor: 'year' },
    { Header: 'Runtime', accessor: 'runtime' },
    { Header: 'Rating', accessor: 'rating' },
    { Header: 'Genres', accessor: generateGenreFromMovie },
]

const MoviesList = () => {
    const history = useHistory()
    const movies = useMoviesData()

    function handleMovieClicked(movie) {
        const movieTitle = movie?.original?.title

        // todo handle when movieTitle is null
        history.push(`/movie/${movieTitle}`)
    }

    return <Table columns={columns} data={movies} onRowClicked={handleMovieClicked} />
}

export default MoviesList
