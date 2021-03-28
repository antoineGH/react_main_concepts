import React from 'react'

export default function Tick() {
    return (
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}
