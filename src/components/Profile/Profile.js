import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import ProfilePage from './ProfilePage';
import { getProfileById } from '../../actions/profile';

const Profile = ({ getProfileById, profile: { profile, loading }, auth,  match }) =>{
    useEffect(()=> {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id])
    return (
        <>
            {profile === null || loading ? <Spinner /> : 
            <div className="content"> 
                <div>
                    <ProfilePage profile={profile}/>
                </div>
                <div>
                    <Link to='/profiles'><button className="button btn-link">Go Back to Community Directory</button></Link> 
                </div>
            </div>
            }
        </>
    );
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
