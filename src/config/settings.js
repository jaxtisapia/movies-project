require('dotenv').config()

export default {
    moviesApi: {
        url: 'https://tender-mclean-00a2bd.netlify.app/web/movies.json',
    },
    firebase: {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    },
}
