import React, { useState } from 'react';
import axios from 'axios';


const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const { username, email, password, password2 } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    return(
        <div className="content Signup">
            <h1>Join us!</h1>
            <p>You'll love it here!</p>
            <form className="form">
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
                    <p className="is-danger">validation errors go here</p>
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
                    <p className="is-danger">validation errors go here</p>
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
                    <p className="is-danger">validation errors go here</p>
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
                    <p className="is-danger">validation errors go here</p>
                </div>

                

                <button className="button" type="submit">Sign Up!</button>

            </form>
        </div>
        
    )
};

export default Signup;