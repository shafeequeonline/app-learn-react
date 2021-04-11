import React, { useState } from 'react'



const bindingExample = () => {
    const [labelText, setLabelText] = useState("MY NEW STRING");
    const [place, setPlace] = useState('Malappuram');
    const [name, setName] = useState('Shaz');

    const button = {
        border: '2px solid red',
        color: 'black',
        padding: '5px',
        marginBottom: '5px',
        borderRadius: '5px'
    }

    return (
        <div>
            <label>{labelText}</label> <br/>
            <input type="text" name="labelTextField" value={labelText} onChange={(e) => {setLabelText(e.target.value)}}></input>
            <br/><br/>


            <label>{place}</label><br/>
            <input type="text" value={place} onChange={(e) => {setPlace(e.target.value)}} />
            
            <br/>
            <br/>
            <br/>

            <label>{name}</label><br/>
            <input 
                type="text" 
                value={name} onChange={(event) => setName(event.target.value)}
                style={button}
            />
        </div>
    )
}

export default bindingExample