import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import MoviesList from './container/movies/MoviesList'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={MoviesList} />
                <Route path="/movies" component={MoviesList} />
            </Switch>
        </Router>
    )
}

export default App
