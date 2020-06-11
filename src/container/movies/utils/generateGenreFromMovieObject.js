const generateGenreFromMovieObject = movie => {
    const genres = movie?.genre || []
    return genres.join(', ')
}

export default generateGenreFromMovieObject
