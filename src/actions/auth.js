import axios from 'axios';
import { setAlert } from './alert';
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE
} from './types';
import setAuthToken from '../utils/setAuthToken';

// LOAD USER
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('http://localhost:5000/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// SIGNUP USER
export const register = ({ username, email, password }) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({ username, email, password });
    try {
        const res = await axios.post('http://localhost:5000/api/users', body, config)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });

    } catch(err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'help')))
        }
        dispatch({
            type: SIGNUP_FAIL
        })
    }
}

// LOGIN USER
export const login = ( email, password ) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post('http://localhost:5000/api/auth', body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch(err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'help')))
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

// LOGOUT USER
export const logout = () => dispatch => {
    dispatch({
        type: CLEAR_PROFILE
    })
    dispatch({
        type: LOGOUT
    })
}