import React from 'react'
import CommentReply from './CommentReply'
import Comment from './Comment'

const CommentRoom = ({ comments = [], postId, onCommentReply, onPostReply }) => {
    return (
        <div class="comment-room">
            <div className="comment-room__comments">
                {comments.map(comment => <Comment key={comment.id} {...comment} onReplySubmitted={onCommentReply} />)}
            </div>

            <div class={'comment-room__reply-form'}>
                <CommentReply postId={postId} onReplySubmitted={onPostReply} />
            </div>
        </div>
    )
}

export default CommentRoom
