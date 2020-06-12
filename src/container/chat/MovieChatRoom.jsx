import React from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom'
import { Button, Icon, Card } from 'semantic-ui-react'

import { CommentRoom } from '../../components/comment-room'
import useChatsFromFirebase from './hooks/useChatsFromFirebase'
import classes from './movieChatRoom.module.css'

const MovieChatRoom = props => {
    const { movieTitle } = useParams()
    const history = useHistory()

    const movieHash = window.btoa(movieTitle)
    const comments = useChatsFromFirebase({ movieTitle, movieHash })

    return (
        <div>
            <header className={classes.header}>
                <div className={classes.header_previousPage} onClick={() => history.goBack()}>
                    <Icon name="left arrow" />
                    Go Back
                </div>

                <div className={classes.header_movieTitle}>
                    <h1>{movieTitle}</h1>
                </div>

                <div />
            </header>

            <div className={classes.commentRoom}>
                <CommentRoom
                    comments={comments}
                    onCommentReply={console.log}
                    onPostReply={console.log}
                    postId={movieHash}
                />
            </div>
        </div>
    )
}

MovieChatRoom.propTypes = {}

export default MovieChatRoom
