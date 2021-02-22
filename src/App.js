import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
state = {
    persons : [
        { name: 'Shafeeque', age: 31 },
        { name: 'Rajeev', age: 30 },
        { name: 'Umer', age: 29 }
    ]
}
    
    render() {
        return (
            <div className="App">
                <h1>Hi, I am react App</h1>
                <p>This is really working!</p>
                <button>Switch Names</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
                    I love Tea!
                </Person>
            </div>
        );
    }
}

export default App;
