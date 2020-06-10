import React from 'react'
import { action } from '@storybook/addon-actions'
import Comment from './Comment'
import CommentReply from './CommentReply'
import CommentRoom from './CommentRoom'

export default {
    title: 'Comment Room',
}

export const commentRoom = () => {
    return (
        <CommentRoom
            postId='postId'
            comments={[comment]}
            onCommentReply={action('commentRoom-onCommentReply')}
            onPostReply={action('commentRoom-onPostReply')}
        />
    )
}

export const basicCommentComponent = () => {
    return (
        <Comment
            {...comment}
            onReplySubmitted={action('basicCommentReply-onReplySubmitted')}
        />
    )
}

export const basicCommentReply = () => {
    return (
        <CommentReply
            commentId="commentId"
            postId="postId"
            onReplySubmitted={action('basicCommentReply-onReplySubmitted')}
        />
    )
}

const comment = {
    id: 3,
    comment: 'Is very nice, Buh the pictures are not de same',
    timeCreated: 'Today at 5:00PM',
    author: 'Apollo Way',
    shouldDisplayReply: true,
}
const replies = [
    {
        id: 4,
        comment: 'This boy no be professional one bit!!!',
        timeCreated: 'Yesterday at 12:30AM',
        author: 'Apollo Way',
        shouldDisplayReply: true,
        replies: [
            {
                id: 7,
                comment: 'Try and change your perspective',
                timeCreated: 'Yesterday at 12:30AM',
                author: 'Apollo Way',
            },
        ],
    },
    {
        id: 5,
        comment: 'Thanks everyone',
        timeCreated: 'Yesterday at 12:30AM',
        author: 'Apollo Way',
        shouldDisplayReply: true,
    },
]
comment.replies = replies
