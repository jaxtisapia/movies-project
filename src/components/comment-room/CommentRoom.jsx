import React from 'react'
import CommentReply from './CommentReply'
import Comment from './Comment'

const CommentRoom = ({ comments = [], postId, onCommentReply, onPostReply }) => {
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} {...comment} onReplySubmitted={onCommentReply} />)}

            <CommentReply postId={postId} onReplySubmitted={onPostReply} />
        </div>
    )
}

export default CommentRoom
