import React from 'react';

const person = (props) => {
    // Add singlue curly braces to use JS expressions
    // return <p>I am  and I am {Math.floor(Math.random() * 30)} years old.</p>
    return (
        <div>
            <p onClick={props.click}>I am {props.name}, {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.click} />
        </div>
    )
}

export default person;