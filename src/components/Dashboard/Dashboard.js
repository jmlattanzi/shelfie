import React, { Component } from 'react'
import axios from 'axios'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            inventory: [],
            currentProduct: null,
        }

        this.getData = this.getData.bind(this)
        // this.getCurrentProduct = this.getCurrentProduct.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    componentDidMount() {
        this.getData()
    }

    getCurrentProduct(id) {
        this.setState({
            currentProduct: this.state.inventory.filter(
                (product) => product.id === id
            ),
        })

        console.log(this.state.currentProduct)
    }

    getData() {
        axios
            .get('/api/inventory')
            .then((res) => this.setState({ inventory: res.data }))
            .catch((err) => console.log(err))
    }

    deleteProduct(id) {
        axios
            .delete(`/api/inventory/${id}`)
            .then(this.getData())
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.inventory.map((product) => (
                    <Product
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        imgurl={product.imgurl}
                        id={product.id}
                        deleteProduct={this.deleteProduct}
                        getCurrentProduct={this.props.getCurrentProduct}
                    />
                ))}
            </div>
        )
    }
}

export default Dashboard
