import React from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom'
import { Button, Icon, Card } from 'semantic-ui-react'

import { CommentRoom } from '../../components/comment-room'
import useChatsFromFirebase from '../../storage/hooks/useChatsFromFirebase'
import classes from './movieChatRoom.module.css'

const MovieChatRoom = props => {
    const { movieTitle } = useParams()
    const history = useHistory()

    const movieHash = window.btoa(movieTitle)
    const [comments, commentActions, loaders] = useChatsFromFirebase({ movieTitle, movieHash })

    function handleCreateComment({ reply }) {
        const commentObject = {
            comment: reply,
            timeCreated: Date.now(),
        }

        commentActions.createComment(commentObject)
    }

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
                    onPostReply={handleCreateComment}
                    postId={movieHash}
                    isCommentsLoading={loaders?.isCommentsLoading}
                />
            </div>
        </div>
    )
}

MovieChatRoom.propTypes = {}

export default MovieChatRoom
