import React from 'react'

function ListItem(props){
    const element = props.value
    return (
        <li>
            {element}
        </li>
    )
}

export default function DisplayArray(props) {
    const array = props.array
    return (
        <>
            <h1>Display Array</h1>
            <ul>
                {array.map((element, count) => {
                    count ++
                    return <ListItem key={count} value={element} />
                }
                )}
            </ul>
        </>
    );
}
