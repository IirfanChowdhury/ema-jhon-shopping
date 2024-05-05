import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />
            <ul>
                <li><a href="/order">Order</a></li>
                <li><a href="/orderreview">Order Review</a></li>
                <li><a href="/inventory">Inventory</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Header;