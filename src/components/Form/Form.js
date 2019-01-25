import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            imgurl: '',
        }

        this.handleCancel = this.handleCancel.bind(this)
        this.handleImageURLChange = this.handleImageURLChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // why isnt all of this handled by a form? gross
    handleImageURLChange(e) {
        this.setState({ imgurl: e.target.value })
    }

    handleNameChange(e) {
        //handle name changes
        this.setState({ name: e.target.value })
    }

    handlePriceChange(e) {
        // handle price change
        this.setState({ price: e.target.value })
    }

    handleCancel() {
        this.setState({
            name: '',
            price: 0,
            imgurl: '',
        })
    }

    handleSubmit() {
        const { getData } = this.props
        axios
            .post('/api/inventory', this.state)
            .then(() => {
                getData()
                this.handleCancel()
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <div className='inputContainer'>
                    <input
                        type='text'
                        placeholder='image URL'
                        value={this.state.imgurl}
                        onChange={(e) => this.handleImageURLChange(e)}
                    />
                    <input
                        type='text'
                        placeholder='name'
                        value={this.state.name}
                        onChange={(e) => this.handleNameChange(e)}
                    />
                    <input
                        type='text'
                        placeholder='price'
                        value={this.state.price}
                        onChange={(e) => this.handlePriceChange(e)}
                    />
                </div>
                <div className='buttonContainer'>
                    <button onClick={this.handleCancel}>Cancel</button>
                    <button onClick={this.handleSubmit}>
                        Add to Inventory
                    </button>
                </div>
            </div>
        )
    }
}

export default Form
