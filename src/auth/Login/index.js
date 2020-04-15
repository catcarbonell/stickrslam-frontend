import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault();
        console.log('Success!');
    }
    return(
        <div className="content Login">
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
                            required
                        />
                    </div>
                    <p className="is-danger">validation errors go here</p>
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
                            required
                        />
                    </div>
                    <p className="is-danger">validation errors go here</p>
                </div>
                <div className="container cta-container">
                    <button className="button" type="submit">Login!</button>
                    <p>Don't have  an account? <Link to="/signup">Sign up!</Link></p>
                </div>     
            </form>
            
        </div>
    );
};

export default Login;