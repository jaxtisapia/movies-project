import React from 'react'

const updatedComments = movieHash => [
    {
        author: 'Shatta',
        comment: 'I never gave up',
        timeCreated: 'Yesterday at 5am',
        commentId: movieHash,
    },
    {
        author: 'Turtle',
        comment:
            'After reading the article, please ensure you follow the steps about creating subtasks, setting estimates, setting due dates, and tracking time.',
        timeCreated: 'Today at 3.30am',
        commentId: movieHash,
    },
]

const useChatsFromFirebase = ({ movieTitle, movieHash }) => {
    const [comments, setComments] = React.useState([])
    React.useEffect(() => setComments(updatedComments(movieHash)), [movieTitle])
    return comments
}

export default useChatsFromFirebase
