import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import './Signup.css';

const Signup = ({ setAlert, register, isAuthenticated}) => {
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
            // WELCOME COMPONENT WITH SIMPSONS GIF
            register({ username, email, password });
        }
    };
    if(isAuthenticated){
        return <Redirect to='/welcome' />
    }

    return(
        <div className="content Signup">
            <h2 className="title is-2">Join us!</h2>
            <br />
            <p className="subtitle is-5">You'll love it here!</p>
            <form className="form" onSubmit={ e => onSubmit(e)}>
                {/* USERNAME FIELD */}
                <div className="field">
                    <label className="label" name="username">Preferred name?</label>
                    <div className="control">
                        <input 
                            className="input" 
                            name="username" 
                            type="text" 
                            placeholder="Your name? Alias? s/n?" 
                            value={username} 
                            onChange={e => onChange(e)}
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
                            placeholder="You will login with this! (ex: you@you.com)" 
                            value={email}
                            onChange={e => onChange(e)}
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
    register : PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Signup);