import React from 'react';
import './Landing.css';

const Landing = () => {
    return(
        <div className="Landing">
            <h1 className="title is-1">Addicted to <span className="highlight title is-1">Stickers?</span></h1>
            <p className="subtitle is-3">So are we.</p>
            <div className="hero-container">
                <h2 className="title is-2">Join us.</h2>
                <p className="subtitle is-5">We <strike>might</strike> have cookies.</p>
                <div className="container Landing-CTA">
                    <button className="button btn has-text-center">Sign up!</button>
                    <p>Have an account already? <span>Login</span>!</p>
                </div>
            </div>
        </div>
    )
}

export default Landing;