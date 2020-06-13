import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MoviesList from './container/movies/MoviesList'
import MovieChatRoom from './container/chat/MovieChatRoom'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={MoviesList} />
                <Route path="/movies" component={MoviesList} />
                <Route path="/movie/:movieTitle" component={MovieChatRoom} />
            </Switch>
        </Router>
    )
}

export default App
