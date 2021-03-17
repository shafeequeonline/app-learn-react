import React, { useState } from 'react'

const bindingExample = () => {
    const [labelText, setLabelText] = useState("MY NEW STRING");

    return (
        <div>
            <lable>{labelText}</lable> <br/>
            <input type="text" name="labelTextField" value={this.labelText} onChange={(e) => {setLabelText(e.target.value)}}></input>
            <br/><br/>
        </div>
    )
}

export default bindingExample