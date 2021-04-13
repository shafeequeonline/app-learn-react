import React, { Component } from 'react';
// import React, { useState } from 'react';
import Person from './Person/Person';
import Places from './Places/Places';
import BindingExample from './BindingDemo'

class App extends Component {
    state = {
        persons : [
            { name: 'Shafeeque', age: 31 },
            { name: 'Rajeev', age: 30 },
            { name: 'Umer', age: 29 },
            { name: 'Nijo', age: 28 },
        ],
        places: [ 'Malappuram', 'Kochi', 'Calicut'],
        showPersons: false
    }

    switchNameHandler = (newName) => {
        this.setState( {
            persons : [
                { name: newName, age: 31 },
                { name: 'Rajeev K Ravi', age: 30 },
                { name: 'Umer Farook', age: 29 },
                { name: 'Nijo John', age: 28 }
            ]
        })
    }

    changeNameHandler = (event) => {
        this.setState( {
            persons : [
                { name: 'MS Naripatta', age: 31 },
                { name: event.target.value, age: 30 },
                { name: 'Umer Farook', age: 29 },
                { name: 'Nijo John', age: 28 }
            ]
        })
    }

    swithchPlacesHandler = () => {
        this.setState({
            places:['Calicut', 'Malappuram', 'Kochi']
        })
    }

    swithPlaceArgsHandler = (place) => {
        this.setState({
            places: [place, 'Kannur', 'Wayanad']
        })
    }

    togglePersonsHandler = () => {
        const currentState = this.state.showPersons;
        this.setState({showPersons : !currentState})
    }
    
    
    render() {

        const style = {
            textAlign : 'center'
        }

        const buttonStyle = {
            backgroundColor: '#09d1f1',
            color: 'white',
            padding: '5px',
            border: '2px solid #0d6977',
            cursor: 'pointer'
        }

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    <Person click={this.switchNameHandler.bind(this, 'MS Naripatta')} name={this.state.persons[0].name} age={this.state.persons[0].age} />
                    <Person click={this.changeNameHandler} name={this.state.persons[1].name} age={this.state.persons[1].age} />
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
                        I love Tea and Movies!
                    </Person>
                    <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
                </div>
            );
        }

        return (
            <div className="App" style={style}>
                <h1>Hi, I am react App</h1>
                <p>This is really working!</p>
                
                { this.state.showPersons ? 
                    <button onClick={() => this.switchNameHandler('M.Shafeeque!')} style={buttonStyle}>Switch Names</button> : null
                }
                <button onClick={this.togglePersonsHandler} style={buttonStyle}>Show Persons</button>
                
                {persons}
                    
                

                <BindingExample />

                <Places name={this.state.places[0]} click={this.swithchPlacesHandler} />
                <Places name={this.state.places[1]} click={this.swithPlaceArgsHandler.bind(this, 'Idukki')} />
                <Places name={this.state.places[2]} />
                <button onClick={() => this.swithPlaceArgsHandler('Palakkad')}>Append Places</button>
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
