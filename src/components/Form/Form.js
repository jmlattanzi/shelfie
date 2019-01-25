import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentProduct: {},
            edit: false,
        }
    }

    componentDidMount() {
        axios
            .get(`/api/inventory/${this.props.match.params.id}`)
            .then((res) => {
                this.setState({ currentProduct: res.data })
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.currentProduct !== prevProps.currentProduct) {
    //         this.setState({
    //             currentProduct: {
    //                 id: this.props.currentProduct[0].id,
    //                 name: this.props.currentProduct[0].name,
    //                 price: this.props.currentProduct[0].price,
    //                 imgurl: this.props.currentProduct[0].imgurl,
    //             },
    //         })
    //     }
    // }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            currentProduct: {
                ...this.state.currentProduct,
                [e.target.name]: e.target.value,
            },
        })
    }

    handleCancel = () => {
        this.setState({
            currentProduct: {
                name: '',
                price: 0,
                imgurl: '',
            },
        })
    }

    addItem = () => {
        console.log(this.state.currentProduct.imgurl)
        axios
            .post(`/api/inventory`, {
                imgurl: this.state.currentProduct.imgurl,
                name: this.state.currentProduct.name,
                price: this.state.currentProduct.price,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    submitNewData = () => {
        axios
            .put(`/api/inventory/${this.props.match.params.id}`, {
                imgurl: this.state.currentProduct.imgurl,
                name: this.state.currentProduct.name,
                price: this.state.currentProduct.price,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    render() {
        console.log(this.state.currentProduct.imgurl)
        return (
            <div className='input'>
                <img src={this.state.currentProduct.imgurl} alt='broken' />
                <input
                    type='text'
                    value={this.state.currentProduct.imgurl}
                    name='imgurl'
                    placeholder='image url'
                    onChange={(e) => this.handleChange(e)}
                />
                <input
                    type='text'
                    value={this.state.currentProduct.name}
                    name='name'
                    placeholder='product name'
                    onChange={(e) => this.handleChange(e)}
                />
                <input
                    type='text'
                    value={this.state.currentProduct.price}
                    name='price'
                    placeholder='product price'
                    onChange={(e) => this.handleChange(e)}
                />
                <div className='buttonContainer'>
                    <button
                        className='cancelButton'
                        onClick={this.handleCancel}>
                        Cancel
                    </button>
                    {!this.props.match.params.id ? (
                        <button className='submitButton' onClick={this.addItem}>
                            Add to Inventory
                        </button>
                    ) : (
                        <button
                            className='submitButton'
                            onClick={this.submitNewData}>
                            Save Changes
                        </button>
                    )}
                </div>
            </div>
        )
    }
}

export default Form
