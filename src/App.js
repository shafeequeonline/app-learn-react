import React, { Component } from 'react';
// import React, { useState } from 'react';

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

    switchNameHandler = () => {
        this.setState( {
            persons : [
                { name: 'Mohamed Shafeeque', age: 31 },
                { name: 'Rajeev K Ravi', age: 30 },
                { name: 'Umer Farook', age: 29 }
            ]
        })
    }
    
    render() {
        return (
            <div className="App">
                <h1>Hi, I am react App</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Names</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
                    I love Tea and Movies!
                </Person>
            </div>
        );
    }
}

export default App;


// const app = (props) => {
//     const [personState, setPersonState] = useState({
//         persons : [
//             { name: 'Shafeeque', age: 31 },
//             { name: 'Rajeev', age: 30 },
//             { name: 'Umer', age: 29 }
//         ]
//     })

//     const switchNameHandler = () => {
//         setPersonState( {
//             persons : [
//                 { name: 'Mohamed Shafeeque', age: 31 },
//                 { name: 'Rajeev K Ravi', age: 30 },
//                 { name: 'Umer Farook', age: 29 }
//             ]
//         })
//     }
    

//     return (
//         <div className="App">
//             <h1>Hi, I am react App</h1>
//             <p>This is really working!</p>
//             <button onClick={switchNameHandler}>Switch Names</button>
//             <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//             <Person name={personState.persons[1].name} age={personState.persons[1].age} />
//             <Person name={personState.persons[2].name} age={personState.persons[2].age}>
//                 I love Tea!
//             </Person>
//         </div>
//     );
// }

// export default app;
