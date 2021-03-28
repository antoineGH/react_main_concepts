import React from 'react'

export default function HelloUser() {

    function formatName(user) {
        return user.firstName + ' ' + user.lastName
    }

    const user = {
        firstName: 'Antoine', 
        lastName: 'Ratat'
    }

    return (
        <h1>
            Hello, {formatName(user)}!
        </h1>
    )   
}
