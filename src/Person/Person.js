import React from 'react';
import './Person.css';
import Radium from 'radium';

const style = {
    '@media (min-width: 600px)' : {
        width: '500px'
    }
}

const person = (props) => {
    // Add singlue curly braces to use JS expressions
    // return <p>I am  and I am {Math.floor(Math.random() * 30)} years old.</p>
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I am {props.name}, {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Radium(person);