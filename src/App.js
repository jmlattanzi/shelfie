import React, { Component } from 'react'
import axios from 'axios'
import { HashRouter as Router } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import routes from './routes'
import './App.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            inventory: [],
            currentProduct: null,
        }

        this.getData = this.getData.bind(this)
        this.getCurrentProduct = this.getCurrentProduct.bind(this)
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

    getCurrentProduct(id) {
        this.setState({
            currentProduct: this.state.inventory.filter(
                (product) => product.id === id
            ),
        })

        console.log(this.state.currentProduct)
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <Header />
                    <Dashboard
                        inventory={this.state.inventory}
                        getData={this.getData}
                        getCurrentProduct={this.getCurrentProduct}
                    />
                    <Form
                        getData={this.getData}
                        currentProduct={this.state.currentProduct}
                    />
                </div>
            </Router>
        )
    }
}

export default App
