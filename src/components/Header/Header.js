import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {
    return (
        <div className='header'>
            <h1>Header</h1>
            <Link className='header-link' to='/'>
                Dashboard
            </Link>
            <Link className='header-link' to='/add'>
                Add Inventory
            </Link>
        </div>
    )
}

export default Header
