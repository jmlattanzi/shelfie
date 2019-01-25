import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            imgurl: '',
            currentProduct: {},
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentProduct !== prevProps.currentProduct) {
            this.setState({
                currentProduct: {
                    id: this.props.currentProduct[0].id,
                    name: this.props.currentProduct[0].name,
                    price: this.props.currentProduct[0].price,
                    imgurl: this.props.currentProduct[0].imgurl,
                },
            })
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value,
            currentProduct: {
                ...this.state.currentProduct,
                [e.target.name]: e.target.value,
            },
        })
    }

    handleCancel = () => {
        this.setState({
            name: '',
            price: 0,
            imgurl: '',
            currentProduct: null,
        })
    }

    submitNewData = () => {
        if (this.state.currentProduct !== {}) {
            axios
                .put(
                    `/api/inventory/${this.state.currentProduct.id}`,
                    this.state.currentProduct
                )
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err))
        }
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={
                        this.state.currentProduct !== null
                            ? this.state.currentProduct.imgurl
                            : this.state.imgurl
                    }
                    name='imgurl'
                    onChange={(e) => this.handleChange(e)}
                />
                <input
                    type='text'
                    value={
                        this.state.currentProduct !== null
                            ? this.state.currentProduct.name
                            : this.state.name
                    }
                    name='name'
                    onChange={(e) => this.handleChange(e)}
                />
                <input
                    type='text'
                    value={
                        this.state.currentProduct !== null
                            ? this.state.currentProduct.price
                            : this.state.price
                    }
                    name='price'
                    onChange={(e) => this.handleChange(e)}
                />
                <button onClick={this.handleCancel}>Cancel</button>
                <button onClick={this.submitNewData}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form
