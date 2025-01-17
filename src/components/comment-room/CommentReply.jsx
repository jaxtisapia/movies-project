import React from 'react'
import { Form } from 'semantic-ui-react'

const CommentReply = ({ onReplySubmitted, commentId, postId }) => {
    const [reply, setReply] = React.useState()

    function handleChange(e, { value }) {
        setReply(value)
    }

    // todo use a better chat architecture with event-driven structure
    function handleFormSubmit() {
        onReplySubmitted({ commentId, postId, reply })
        setReply('')
    }

    return (
        <Form reply onSubmit={handleFormSubmit}>
            <Form.TextArea value={reply} onChange={handleChange} />
            <Form.Button content="Reply" labelPosition="left" icon="edit" primary />
        </Form>
    )
}

export default React.memo(CommentReply)
