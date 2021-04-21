import React, { Component } from 'react';
import Validation from './../Validation/Validation';
import Charecter from './../Charecter/Charecter';

class charecterComponent extends Component {
    state = {
        inputData : ''
    }

    inputChangeHandler = (e) => {
        this.setState({inputData: e.target.value})
    }

    deleteCharecterHandler = (index) => {
        const text = this.state.inputData.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({inputData: updatedText})
    }

    render() {
        const charList = this.state.inputData.split('').map((char, index) => {
            return <Charecter charecter={char} key={index} clicked={() => this.deleteCharecterHandler(index)}/>
        });

        return (
            <div>
                <input type="text" value={this.state.inputData} onChange={this.inputChangeHandler} /> 
                <br/>
                <Validation length={this.state.inputData.length}/>
                {charList}
            </div>
        )
    }
}

export default charecterComponent;