import React from 'react'

const useScrollToLastComment = dependants => {
    const lastChatRef = React.useRef(null)
    const ScrollReferenceToHere = () => (
        <div style={{ float: 'left', clear: 'both' }} ref={lastChatRef} />
    )

    const scrollToBottom = () => {
        lastChatRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    React.useEffect(scrollToBottom, [dependants])

    return [scrollToBottom, ScrollReferenceToHere]
}

export default useScrollToLastComment
