import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';
import './ProfileItem.css';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return (
        <> 
        <h4 className="title is-4">Community Directory</h4>
            { loading ? <Spinner /> : 
                <div className="columns">
                    {profiles.length > 0 ? (
                        profiles.map(profile => (
                            <ProfileItem key={profile._id} profile={profile}/>
                        ))
                    ) : <p className="subtitle is-4">No profiles found </p>}
                </div>
            }
    
       </>)
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect( mapStateToProps, { getProfiles })(Profiles);