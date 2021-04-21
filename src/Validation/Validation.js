import React from 'react';

const validation = (props) => {
    let validationText = "Text too short";
    if(props.length > 5) {
        validationText = "Text long enough!"
    }
    return (
        <div>
            {validationText} <span>{props.length}</span>
        </div>
    )
}

export default validation;