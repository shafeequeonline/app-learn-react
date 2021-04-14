import React from 'react';
import './Person.css';

const person = (props) => {
    // Add singlue curly braces to use JS expressions
    // return <p>I am  and I am {Math.floor(Math.random() * 30)} years old.</p>
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name}, {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;