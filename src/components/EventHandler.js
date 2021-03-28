import React from 'react'

export default function EventHandler() {

    function handleClick(e) {
        e.preventDefault();
        console.log('The button has been clicked!')
    }

    return (
        <button onClick={handleClick}>Click Me !</button>
    )
}
