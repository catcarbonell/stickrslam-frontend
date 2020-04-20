import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'
import './Nav.css';

const Nav = ({ auth: { isAuthenticated, loading }, logout}) => {
    const authLinks = (
        <div className="Nav is-fixed-top is-pulled-right"  onClick={() => toggleMenu(!displayMenu)}>
            <Link className="navmenu-item" to="/dashboard">Dashboard</Link>
            <Link className="navmenu-item" to="/profiles">Community</Link>
            <Link className="navmenu-item" to="/edit">Edit Profile</Link>
            <a onClick ={logout} href="/" className="navmenu-item" >Logout</a>
            <button className="close-btn" onClick={() => toggleMenu(!displayMenu)}>
                <i className="fas fa-times"></i>
            </button>
        </div>
    );

    const guestLinks = (
       <div className="Nav is-fixed-top is-pulled-right"  onClick={() => toggleMenu(!displayMenu)}>
            <Link className="navmenu-item" to="/">Home</Link>
            <Link className="navmenu-item" to="/signup" >Sign Up</Link>
            <Link className="navmenu-item" to="/login" >Login</Link>
            <Link className="navmenu-item" to="/profiles">Community</Link>
            <button className="close-btn" onClick={() => toggleMenu(!displayMenu)}>
            <i className="fas fa-times"></i>
            </button>
        </div>
    );
    
    const [ displayMenu, toggleMenu ] = useState(false);

    return(
        <>
            <div>
                <button className="menu-btn is-pulled-right" onClick={() => toggleMenu(!displayMenu)}>
                    <i className="fas fa-ellipsis-h"></i>
                </button>
            </div>
            {displayMenu && 
                <div>
                    { !loading && (<>{ isAuthenticated ? authLinks : guestLinks} </>) }
                </div>
            }
        </>
    )
}

Nav.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Nav);