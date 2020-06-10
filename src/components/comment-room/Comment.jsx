import React from 'react'
import { Comment as SemanticComment } from 'semantic-ui-react'

import CommentReply from './CommentReply'
import genericAvatar from '../../assets/images/genericAvatar.jpg'

const Comment = ({
    id: commentId,
    avatarSrc,
    author,
    timeCreated,
    comment,
    replies = [],
    onReplySubmitted,
    shouldDisplayReply,
}) => {
    const [isReplying, setReplying] = React.useState(false)

    function handleToggleReplyingStatus() {
        setReplying(!isReplying)
    }

    return (
        <SemanticComment.Group>
            <SemanticComment>
                <SemanticComment.Avatar src={avatarSrc || genericAvatar} />

                <SemanticComment.Content>
                    <SemanticComment.Author as="a">{author}</SemanticComment.Author>
                    <SemanticComment.Metadata>
                        <div>{timeCreated}</div>
                    </SemanticComment.Metadata>

                    <SemanticComment.Text>{comment}</SemanticComment.Text>

                    {shouldDisplayReply && (
                        <SemanticComment.Actions>
                            <SemanticComment.Action onClick={handleToggleReplyingStatus}>
                                {isReplying ? 'Dismiss' : 'Reply'}
                            </SemanticComment.Action>

                            {isReplying && <CommentReply onReplySubmitted={onReplySubmitted} commentId={commentId} />}
                        </SemanticComment.Actions>
                    )}
                </SemanticComment.Content>

                <SemanticComment.Group threaded>
                    {replies.map(reply => <Comment key={reply.id} {...reply} onReplySubmitted={onReplySubmitted} />)}
                </SemanticComment.Group>
            </SemanticComment>
        </SemanticComment.Group>
    )
}

export default React.memo(Comment)
