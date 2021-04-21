import React from 'react';

const charecter = (props) => {
    const style = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'        
    }

    return (
        <div style={style} onClick={props.clicked}>{props.charecter}</div>
    )
}

export default charecter;