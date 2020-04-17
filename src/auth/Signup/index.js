import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

import axios from 'axios';
import './Signup.css';

const Signup = ({ setAlert }) => {
    const [formData, setFormData] = 
        useState({
            username: '',
            email: '',
            password: '',
            password2: ''
        }
    );
    const { username, email, password, password2 } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2){
            setAlert('Passwords do not match', 'danger')
        } else {
            const newUser = {
                username,
                email,
                password
            }
            try {
                const config = {
                    headers: {
                        "Content-Type" : "application/json"
                    }
                }   
                const body = JSON.stringify(newUser);
                const res = await axios.post('http://localhost:5000/api/users', body, config)
                console.log(res.data);
            } catch(err) {
                console.error(err.response.data);
            }
        }
    }

    return(
        <div className="content Signup">
            <h2 className="title is-2">Join us!</h2>
            <br />
            <p className="subtitle is-5">You'll love it here!</p>
            <form className="form" onSubmit={ e => onSubmit(e)}>
                {/* USERNAME FIELD */}
                <div className="field">
                    <label className="label" name="username"> Username/Alias</label>
                    <div className="control">
                        <input 
                            className="input" 
                            name="username" 
                            type="text" 
                            placeholder="How would you like to be addressed?" 
                            value={username} 
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                   {/* validation errors go here  */}
                </div>

                {/* EMAIL FIELD */}
                <div className="field">
                    <label className="label" name="email">Email</label>
                    <div className="control">
                        <input 
                            className="input" 
                            name="email" 
                            type="email" 
                            placeholder="ex: you@you.com" 
                            value={email}
                            onChange={e => onChange(e)}
                            required 
                        />
                    </div>
                </div>

                {/* PASSWORD FIELD */}
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                </div>

                {/* PASSWORD CONFIRM  */}
                <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="password" 
                            name="password2"
                            value={password2}
                            onChange={e => onChange(e)}
                        />
                    </div>
                </div>
                <div className="container cta-container">
                    <button className="button" type="submit">Sign Up!</button>
                    <p>
                        Already have an account? <Link to="/login">Login!</Link>
                    </p>
                </div>
            </form>
            
        </div>
        
    )
};

Signup.propTypes = {
    setAlert : PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(Signup);