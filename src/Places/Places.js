import React from 'react'

const places = (props) => {
    return (
    <div onClick={props.click}>{props.name}</div>
    )
}

export default places;