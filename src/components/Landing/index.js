import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
    return(
        <div className="Landing">
            <h1 className="title is-1">Addicted to <span className="highlight title is-1">Stickers?</span></h1>
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

export default Landing;