import React, { useState } from 'react'

const bindingExample = () => {
    const [labelText, setLabelText] = useState("MY NEW STRING");
    const [place, setPlace] = useState('Malappuram')

    return (
        <div>
            <label>{labelText}</label> <br/>
            <input type="text" name="labelTextField" value={labelText} onChange={(e) => {setLabelText(e.target.value)}}></input>
            <br/><br/>


            <label>{place}</label><br/>
            <input type="text" value={place} onChange={(e) => {setPlace(e.target.value)}} />
        </div>
    )
}


export default bindingExample