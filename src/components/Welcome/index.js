import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import join from '../../assets/join.gif';

const Welcome = () =>{
    return(
        <div className="Welcome">
            <div className="Welcome-container">
                <h3 className="Welcome-title is-3">Welcome!</h3>
                <p className="Welcome-p">We're so glad you're here!</p>
                <div className="image">
                    <img src={join} alt="Join usssss..." />
                </div>
                <p className="Welcome-p">Take a seat and 
                    <Link className="Welcome-link" to="/create">setup your profile!</Link>
                </p>
            </div>
        </div>
    );
};

export default Welcome;