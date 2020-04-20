import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from  '../../actions/profile';
import Spinner from '../Spinner';
import Posts from '../Posts';
import PostForm from '../Posts/PostForm';
import './Dashboard.css';

const Dashboard = ({ 
    getCurrentProfile, 
    deleteAccount, auth: { user }, profile: { profile, loading } }) =>{
        useEffect(() =>{
            getCurrentProfile();
        }, [getCurrentProfile])
        
        const [displayPostForm, togglePostForm] = useState(false);

        return loading && profile === null ? ( <Spinner /> ) : ( 
        <> <br />
            <h3 className="title is-3">Hello, { user && profile.username}! </h3>
            <br />

            <button className="button"><Link className="btn-link" to="/profiles">Community Directory</Link></button>
            <button onClick={() => togglePostForm(!displayPostForm)} className="button">Add A Post</button>
            {displayPostForm && <div className="secton"><br /> <PostForm /></div>}
            <div className="section posts-section">
                <Posts />
            </div>
            <button className="button is-pulled-right" onClick={() => deleteAccount()}>Delete My Account</button>
        </> 
        );
    };

    Dashboard.propTypes = {
        getCurrentProfile: PropTypes.func.isRequired,
        deleteAccount: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
        profile: PropTypes.object.isRequired,
    };

    const mapStateToProps = state => ({
        auth: state.auth,
        profile: state.profile
    }
);

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);