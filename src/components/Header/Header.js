import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div className='header'>
            <h1>Header</h1>
            <Link to='/'>Dashboard</Link>
            <Link to='/add'>Add Inventory</Link>
        </div>
    )
}

export default Header
