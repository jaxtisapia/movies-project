import React from 'react'
import CommentReply from './CommentReply'
import Comment from './Comment'
import { Dimmer, Loader } from 'semantic-ui-react'

const CommentRoom = ({ comments = [], postId, onCommentReply, onPostReply, isCommentsLoading }) => {
    return (
        <div className="comment-room">
            <Dimmer active={isCommentsLoading} inverted>
                <Loader>Loading Comments</Loader>
            </Dimmer>

            <div className="comment-room__comments">
                {comments.map(comment => <Comment key={comment.id} {...comment} onReplySubmitted={onCommentReply} />)}
            </div>

            <div className={'comment-room__reply-form'}>
                <CommentReply postId={postId} onReplySubmitted={onPostReply} />
            </div>
        </div>
    )
}

export default CommentRoom
