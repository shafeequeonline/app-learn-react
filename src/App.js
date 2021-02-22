import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, I am react App</h1>
                <p>This is really working!</p>
                <Person />
            </div>
        );
    }
}

export default App;
