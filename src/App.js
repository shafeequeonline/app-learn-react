import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, I am react App</h1>
                <p>This is really working!</p>
                <Person name="Shafeeque" age="31" />
                <Person name="Rajeev" age="30" />
                <Person name="Umer" age="29">
                    I love Tea!
                </Person>
            </div>
        );
    }
}

export default App;
