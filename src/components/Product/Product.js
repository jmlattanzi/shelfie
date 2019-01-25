import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

function Product(props) {
    return (
        <div className='product'>
            <div className='productInfo'>
                <div className='productImage'>
                    <img src={props.imgurl} alt='broken' />
                </div>
                <div className='productDetails'>
                    <h3>{props.name}</h3>
                    <h3>{props.price}</h3>
                    <div className='buttonContainer'>
                        <button
                            className='deleteButton'
                            onClick={(id) => props.deleteProduct(props.id)}>
                            delete
                        </button>
                        {/* <button onClick={(id) => props.getCurrentProduct(props.id)}>
                    edit
                </button> */}
                        <Link className='editButton' to={`/edit/${props.id}`}>
                            Edit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
