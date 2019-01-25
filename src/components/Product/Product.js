import React from 'react'

function Product(props) {
    return (
        <div className='product'>
            <div className='productInfo'>
                <h3>{props.imgurl}</h3>
                <h3>{props.name}</h3>
                <h3>{props.price}</h3>
            </div>
            <div className='buttonContainer'>
                <button onClick={(id) => props.deleteProduct(props.id)}>
                    delete
                </button>
                <button onClick={(id) => props.getCurrentProduct(props.id)}>
                    edit
                </button>
            </div>
        </div>
    )
}

export default Product
