import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from  '../../actions/profile';
import Spinner from '../Spinner'
import './Dashboard.css';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) =>{
        useEffect(() =>{
            getCurrentProfile();
        }, [])

        return loading && profile === null ? ( <Spinner /> ) : ( 
        <>
            <h3 className="title is-3">Hello, { user && user.username}! </h3>
        </> 
        );
    };

    Dashboard.propTypes = {
        getCurrentProfile: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
        profile: PropTypes.object.isRequired,
    };

    const mapStateToProps = state => ({
        auth: state.auth,
        profile: state.profile
    }
);

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);