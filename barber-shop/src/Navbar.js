import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/home" className='navbarElement'>Home</Link>
            <Link to="/services" className='navbarElement'>Services</Link>
            <Link to="/book" className='navbarElement'>Book</Link>
            <Link to="/contact" className='navbarElement'>Contact</Link>
        </nav>
    );
};

export default Navbar;