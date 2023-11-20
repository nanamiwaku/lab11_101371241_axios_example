import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import './style.css';



class PersonList extends Component {
    // Define state default values
    state = {
        persons: []
    }

    // Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            })
    }

    // Render the component
    render() {
        return (
            <div>
                {this.state.persons.map(person =>
                    <User key={person.id.value} user={person} />
                )}
            </div>
        );
    }

}

export default PersonList;