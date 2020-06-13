import React from 'react'
import CommentReply from './CommentReply'
import Comment from './Comment'
import { Dimmer, Loader } from 'semantic-ui-react'
import useScrollToLastComment from './hooks/useScrollToLastComment'

const CommentRoom = ({ comments = [], postId, onCommentReply, onPostReply, isCommentsLoading, classes = {} }) => {
    const [, ScrollReferenceToHere] = useScrollToLastComment(comments)

    const replyFormClass = classes['reply-form']
    const commentsContainerClass = classes['comments-container']

    return (
        <div className="comment-room">
            <Dimmer active={isCommentsLoading} inverted>
                <Loader>Loading Comments</Loader>
            </Dimmer>

            <div className={`comment-room__comments ${commentsContainerClass}`}>
                {comments.map(comment => <Comment key={comment.id} {...comment} onReplySubmitted={onCommentReply} />)}
            </div>

            <ScrollReferenceToHere />

            <div className={`comment-room__reply-form ${replyFormClass}`}>
                <CommentReply postId={postId} onReplySubmitted={onPostReply} />
            </div>
        </div>
    )
}

export default CommentRoom
