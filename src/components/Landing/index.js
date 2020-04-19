import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Landing.css';

const Landing = ({ isAuthenticated }) => {
    if(isAuthenticated) {
        return <Redirect to='/dashboard' />
    }
    return(
        <div className="Landing">
            <h1 className="title is-1">Addicted to Stickers?</h1>
            <br />
            <p className="subtitle is-4">So are we.</p>
            <div className="hero-container">
                <h2 className="title is-2">Join us.</h2>
                <br />
                <p className="subtitle is-5">We <strike>might</strike> have cookies.</p>
                <div className="container Landing-CTA">
                    <button className="button btn has-text-center"><Link className="btn-link" to="/signup">Sign up!</Link></button>
                    <p>Have an account already? <Link to="/login">Login</Link>!</p>
                </div>
            </div>
        </div>
    )
}
Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(Landing);