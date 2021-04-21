import React, { Component } from 'react';
// import React, { useState } from 'react';
import Person from './Person/Person';
import Places from './Places/Places';
import BindingExample from './BindingDemo'
import person from './Person/Person';
import CharecterComponent from './CharecterComponent/CharecterComponent';

class App extends Component {
    state = {
        persons : [
            { id: 'user01', name: 'Shafeeque', age: 31 },
            { id: 'user02', name: 'Rajeev', age: 30 },
            { id: 'user03', name: 'Umer', age: 29 },
            { id: 'user04', name: 'Nijo', age: 28 },
        ],
        places: [ 'Malappuram', 'Kochi', 'Calicut'],
        showPersons: false
    }

    

    changeNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person



        this.setState( {persons : persons})
    }

    deletePersonsHandler = (personIndex) => {
        const persons = [...this.state.persons]; // user spred operator then re assigned it to the state
        persons.splice(personIndex, 1);
        // you can use array destructuring here like this.setState({persons})
        this.setState({persons: persons})
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
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            click={() => this.deletePersonsHandler(index)}
                            name={person.name} 
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.changeNameHandler(event, person.id)} />
                    })}
                </div>
            );
        }

        return (
            <div className="App" style={style}>
                <h1>Hi, I am react App</h1>
                <p>This is really working!</p>
                
                
                <button onClick={this.togglePersonsHandler} style={buttonStyle}>Show Persons</button>
                
                {persons}
                    
                

                <BindingExample />

                <Places name={this.state.places[0]} click={this.swithchPlacesHandler} />
                <Places name={this.state.places[1]} click={this.swithPlaceArgsHandler.bind(this, 'Idukki')} />
                <Places name={this.state.places[2]} />
                <button onClick={() => this.swithPlaceArgsHandler('Palakkad')}>Append Places</button>

                <hr />
                <CharecterComponent />
                
            </div>
        );
    }
}

export default App;