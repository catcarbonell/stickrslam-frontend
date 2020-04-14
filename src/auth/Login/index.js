import React from 'react';

const Login = () => {
    return(
        <div className="content Login">
            <h1>Login form</h1>
            <form className="form">
                {/* EMAIL FIELD */}
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="ex: you@you.com"></input>
                    </div>
                    <p className="is-danger">validation errors go here</p>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password"></input>
                    </div>
                    <p className="is-danger">validation errors go here</p>
                </div>

                <button className="button" type="submit">Login!</button>

            </form>
        </div>
    );
};

export default Login;