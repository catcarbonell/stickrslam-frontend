import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {

    return(
        <div className="Nav is-fixed-top is-pulled-right">
            <Link className="navmenu-item" to="/stickers" >Sticker Pool</Link>
            <Link className="navmenu-item" to="/signup" >Sign Up</Link>
            <Link className="navmenu-item" to="/login" >Login</Link>
            <Link className="navmenu-item" to="/profile" >My Profile</Link>
            <Link className="navmenu-item" to="/" >Logout</Link>
            <Link className="navmenu-item" to="/">Close menu</Link>

        </div>
    )
}

export default Nav;