import React from 'react'

function Message(props) {
    const message = props.message;

    return (
        <li>{message}</li>
        
    );
}

export default function MailBox(props) {
    const unreadMessages = props.unreadMessages
    return (
        <div>
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            {unreadMessages.map((message, count) => {
                count++
                return <Message key={count} message={message} />
            })}
        </div>
    )
}
