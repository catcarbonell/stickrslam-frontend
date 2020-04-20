import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_ERROR,
    ACCOUNT_DELETED,
    CLEAR_PROFILE
} from './types';

// Get current user's profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
};

// Get all profiles
export const getProfiles = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/profile');
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
};

// Get profile by id
export const getProfileById = userId => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:5000/api/profile/user/${userId}`);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.data.msg, status: err.response.status }
        });
    }
};



// Create/Update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-type' : 'application/json'
            }
        }
        const res = await axios.post('http://localhost:5000/api/profile/', 
        formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert( edit ? 'Profile Updated!' : 'Profile Created!', 'success'));

        if(!edit) {
            history.push('/dashboard');
        }
        if(edit) {
            history.push('/profiles');
        }

    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'help')))
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
} 

// Delete account & profile
export const deleteAccount = ()  => async dispatch => {
    if(window.confirm('Are you sure? This can NOT be undone.')){
        try {
            // const res = await axios.delete(`http://localhost:5000/api/profile`)
            dispatch({type: CLEAR_PROFILE});
            dispatch({type: ACCOUNT_DELETED});
            dispatch(setAlert('Account deleted. :( ', 'help'));
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}

 