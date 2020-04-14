import React from 'react';

const Signup = () => {
    return(
        <div className="content Signup">
            <h1>Join us!</h1>
            <p>You'll love it here!</p>
            <form className="form">
                {/* USERNAME FIELD */}
                <div className="field">
                    <label className="label">Username/Alias</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="ex: you@you.com"></input>
                    </div>
                    <p className="is-danger">validation errors go here</p>
                </div>
                {/* EMAIL FIELD */}
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="ex: you@you.com"></input>
                    </div>
                    <p className="is-danger">validation errors go here</p>
                </div>
                {/* PASSWORD FIELD */}
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password"></input>
                    </div>
                    <p className="is-danger">validation errors go here</p>
                </div>
                {/* PASSWORD CONFIRM  */}
                <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control">
                        <input className="input" type="password"></input>
                    </div>
                    <p className="is-danger">validation errors go here</p>
                </div>

                

                <button className="button" type="submit">Sign Up!</button>

            </form>
        </div>
        
    )
};

export default Signup;