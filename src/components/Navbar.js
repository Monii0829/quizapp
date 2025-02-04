import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        <nav className='nav'>
            <ul>
                <li><NavLink end to="/" >Home</NavLink></li>
                <li><NavLink to="/signin">Signin</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>    
        </nav>
    );
}

export default Navbar;
