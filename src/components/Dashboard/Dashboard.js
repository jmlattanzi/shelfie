import React, { Component } from 'react'
import axios from 'axios'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(id) {
        // delete
        axios
            .delete(`/api/inventory/${id}`)
            .then(this.props.getData())
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                {this.props.inventory.map((product) => (
                    <Product
                        name={product.name}
                        price={product.price}
                        imgurl={product.imgurl}
                        id={product.id}
                        deleteProduct={this.deleteProduct}
                    />
                ))}
            </div>
        )
    }
}

export default Dashboard
