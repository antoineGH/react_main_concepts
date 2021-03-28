import React from 'react'

export default function HelloProps(props) {

    function Welcome(props) {
        return (
            <h1>
                Hello, {props.name}
            </h1>
        )
    }

    return (
        <Welcome name='Antoine' />
    )
}
