import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import './Login.css';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    }

    // Redirect if logged in
    if(isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return(
        <div className="Login">
            <h2 className="title is-2">Welcome back!</h2>
            <form className="form" onSubmit={ e => onSubmit(e)}>
                {/* EMAIL FIELD */}
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input 
                            className="input" 
                            name="email" 
                            type="email" 
                            placeholder="ex: you@you.com"
                            value={email}
                            onChange={e => onChange(e)}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input 
                            className="input" 
                            name="password" 
                            type="password"
                            value={password}
                            onChange={e => onChange(e)}
                        />
                    </div>
                </div>
                <div className="container cta-container">
                    <button className="button" type="submit">Login!</button>
                    <p>Don't have an account? <Link to="/signup">Sign up!</Link></p>
                </div>     
            </form>
            
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);