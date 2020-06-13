import React from 'react'
import { database } from '../firebase'

function processCommentsFromFirebase(comments) {
    const commentIds = Object.keys(comments || [])
    return commentIds.map(commentId => {
        const comment = comments[commentId] || {}
        return { ...comment, id: commentId }
    })
}

const useChatsFromFirebase = ({ movieTitle, movieHash }) => {
    const [comments, setComments] = React.useState([])
    const [isCommentsLoading, setCommentsLoading] = React.useState(false)

    const commentsCollection = database.child(`comments/${movieHash}`)

    function createComment(comment) {
        commentsCollection.push(comment)
    }

    React.useEffect(() => {
        setCommentsLoading(true)

        commentsCollection.on('value', snapshot => {
            const commentsFromFirebase = snapshot.val()
            const updatedComments = processCommentsFromFirebase(
                commentsFromFirebase
            )

            setCommentsLoading(false)
            setComments(updatedComments)
        })

        return () => commentsCollection.off()
    }, [])

    return [comments, { createComment }, { isCommentsLoading }]
}

export default useChatsFromFirebase
