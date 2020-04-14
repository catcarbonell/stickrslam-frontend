import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return(
        <nav className="Nav navbar">
            <div className="navbar-end">
                <Link to="/stickers" className="navbar-item">Sticker Pool</Link>
                <Link to="/signup" className="navbar-item">Sign Up</Link>
                <Link to="/login" className="navbar-item">Login</Link>
                <Link to="/profile" className="navbar-item">My Profile</Link>
                <Link to="/" className="navbar-item">Logout</Link>
            </div>
        </nav>
    )
}

export default Nav;