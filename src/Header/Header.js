import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='nav'>
            <div className='img'>
            <img src={logo} alt="" />
            </div>
            <div className='anchor'>
                <Link to="/">Shop</Link>
                <Link to="/orders">orders</Link>
                <Link to="/inventory">inventory</Link>
              
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;