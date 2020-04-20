import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';


const CreateProfile = ({ createProfile, history  }) => {
    const [formData, setFormData] = useState({
        username: '',
        website: '',
        twitter: '',
        facebook: '',
        instagram: '',
        bio: ''
    });

    const {
        username,
        website,
        twitter,
        facebook,
        instagram,
        bio
    } = formData;

    const onChange = e => setFormData(
        { ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
        console.log('this is on submit')
    };

    return(
        <>
        <h3 className="title is-3">Create My Profile</h3>

        <form className="form" onSubmit={e => onSubmit(e)}>

        <div className="form-modal-body">
             {/* USERNAME FIELD */}
             <div className="field">
                <label className="label" name="website">Username</label>
                <div className="control">
                    <input 
                        className="profile-input" 
                        name="username" 
                        type="text" 
                        value={username}
                        onChange={ e => onChange(e) }
                    />
                </div>
            </div>
            {/* WEBSITE FIELD */}
            <div className="field">
                <label className="label" name="website">Website URL</label>
                <div className="control">
                    <input 
                        className="profile-input" 
                        name="website" 
                        type="text" 
                        value={website}
                        onChange={ e => onChange(e) }
                    />
                </div>
            </div>
            {/* TWITTER FIELD */}
            <div className="field">
                <label className="label" name="twitter">Twitter URL</label>
                <div className="control">
                    <input 
                        className="profile-input" 
                        name="twitter"
                        value={twitter} 
                        type="text" 
                        onChange={ e => onChange(e)}
                    />
                </div>
            </div>
            {/* FACEBOOK FIELD */}
            <div className="field">
                <label className="label" name="facebook">Facebook URL</label>
                <div className="control">
                    <input 
                        type="text"
                        className="profile-input" 
                        name="facebook" 
                        value={facebook}
                        onChange={ e => onChange(e)}
                    />
                </div>
            </div>
            {/* INSTAGRAM FIELD */}
            <div className="field">
                <label className="label" name="instagram">Instagram URL</label>
                <div className="control">
                    <input 
                        className="profile-input" 
                        name="instagram" 
                        type="text"
                        value={instagram} 
                        onChange={ e => onChange(e)}
                    />
                </div> 
            </div>
            {/* BIO FIELD */}
            <div className="field">
                <label className="label" name="bio">About Me:</label>
                <div className="control">
                    <textarea
                        className="Profile-bio" 
                        rows="3"
                        name="bio"
                        onChange={ e => onChange(e)}
                        value={bio}
                    ></textarea>
                </div>
            </div>

            <div className="container form-cta-container">
                <input className="button btn-link" type="submit" value="Save Profile!" />
            </div>
            </div>
        </form>
        </>
    );
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));