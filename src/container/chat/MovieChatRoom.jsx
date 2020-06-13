import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import { CommentRoom } from '../../components/comment-room'
import useChatsFromFirebase from '../../storage/hooks/useChatsFromFirebase'
import classes from './movieChatRoom.module.css'


const MovieChatRoom = () => {
    const { movieTitle } = useParams()
    const history = useHistory()

    const movieHash = window.btoa(movieTitle)
    const [comments, commentActions, loaders] = useChatsFromFirebase({ movieTitle, movieHash })

    function handleCreateComment({ reply }) {
        const timeCreated = Date.now()

        const commentObject = {
            comment: reply,
            timeCreated,
            avatarSrc: `https://api.adorable.io/avatars/40/${timeCreated}.png`,
        }

        commentActions.createComment(commentObject)
    }

    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <div className={classes.header_previousPage} onClick={() => history.goBack()}>
                    <Icon name="left arrow" />
                    <span className={classes.header_previousPage__message}>Go Back</span>
                </div>

                <div className={classes.header_movieTitle}>
                    <h1>{movieTitle}</h1>
                </div>

                <div />
            </header>

            <div className={classes.commentRoom}>
                <CommentRoom
                    comments={comments}
                    classes={{
                        'reply-form': classes['commentRoom__reply-form'],
                        'comments-container': classes['commentRoom__comments-container'],
                    }}
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
