import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'
import './Nav.css';

const Nav = ({ auth: { isAuthenticated, loading }, logout}) => {
    const authLinks = (
        <div className="Nav is-fixed-top is-pulled-right">
            <Link className="navmenu-item" to="/dashboard">Dashboard</Link>
            <Link className="navmenu-item" to="/profile">My Profile</Link>
            <a onClick ={logout} href="/" className="navmenu-item" >Logout</a>
            <Link className="navmenu-item" to="/">Close menu</Link>
        </div>
    );

    const guestLinks = (
       <div className="Nav is-fixed-top is-pulled-right">
            <Link className="navmenu-item" to="/signup" >Sign Up</Link>
            <Link className="navmenu-item" to="/login" >Login</Link>
            <Link className="navmenu-item" to="/">Close menu</Link>
        </div>
    );

    return(
      
        <div>
            { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks} </Fragment>) }
        </div>

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