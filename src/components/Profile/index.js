import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createProfile, getCurrentProfile } from '../../actions/profile';
// import Alert from '../../layout/Alert';
import './Profile.css';

const Profile = () => {
    return(
        <>
            <h3 className="title is-3">My Profile</h3> <br />
            <button className="button"><Link className="btn-link" to="/profile/edit">Edit Profile</Link></button>
        </>
    )
}

export default Profile;