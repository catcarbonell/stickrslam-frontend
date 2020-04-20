import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import './Profile.css';

const EditProfile = ({ 
    profile: { profile, loading },
     createProfile, getCurrentProfile,  
     history,  }) => {
        
        const [formData, setFormData] = useState({
            username: '',
            avatar: '',
            website: '',
            twitter: '',
            facebook: '',
            instagram: '',
            bio: ''
        });
        
        useEffect(() => {
            getCurrentProfile();
            setFormData({
                username: loading || (!profile && !profile.username) ? username : profile.username,
                avatar: loading || !profile.avatar ? '' : profile.avatar,
                website: loading || !profile.website ? '' : profile.website,
                twitter: loading || !profile.twitter ? '' : profile.twitter,
                facebook: loading || !profile.facebook ? '' : profile.facebook,
                instagram: loading || !profile.instagram ? '' : profile.instagram,
                bio: loading || !profile.bio ? '' : profile.bio
            });
        }, [ loading, getCurrentProfile ])

        const {
            username,
            avatar,
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
        createProfile(formData, history, true);
    };

    return(
        <div>
        <h3 className="title is-3">Edit Profile</h3>

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
                {/* PROFILE PIC FIELD */}
                <div className="field">
                    <label className="label" name="website">Profile Pic URL</label>
                    <div className="control">
                        <input 
                            className="profile-input" 
                            name="avatar" 
                            type="text" 
                            value={avatar}
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
                    <button className="button"><Link to="/dashboard" className="btn-link">Cancel Edit</Link></button>
                </div>
            </div>
        </form>
        </div>
    );
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));