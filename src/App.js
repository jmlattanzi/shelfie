import React, { Component } from 'react'
import axios from 'axios'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import './App.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            inventory: [],
        }

        this.getData = this.getData.bind(this)
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        axios
            .get('/api/inventory')
            .then((res) => this.setState({ inventory: res.data }))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <Dashboard
                    inventory={this.state.inventory}
                    getData={this.getData}
                />
                <Form getData={this.getData} />
            </div>
        )
    }
}

export default App
