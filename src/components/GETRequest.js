import React from 'react'
import axios from 'axios'

export default class GETRequest extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;
            this.setState({ persons })
        })
    }

    render() {
        return (
            <ul>
            <h1>GET Request</h1>
                { this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}
