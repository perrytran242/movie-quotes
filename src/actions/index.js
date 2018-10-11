import types from './types';
import axios from 'axios';

export const signUp = (userInfo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://api.reactprototypes.com/signup', userInfo);
            
            console.log('Sign Up:', response);
            dispatch({
                type: types.SIGN_UP,
            });
        } catch(error) {
            console.log('Sign Up Error:', error.message);
            dispatch({
                type: types.SIGN_UP_ERROR,
                error: 'Error creating account',
            })
        }
    }
}

export const signIn = userInfo => async dispatch => {
    try {
        const response = await axios.post('http://api.reactprototypes.com/signin', userInfo);

        console.log('Sign In Response:', response);

        localStorage.setItem('token',response.data.token);

        dispatch({
            type: types.SIGN_IN,
        });
    } catch(error) {
        console.log('Sign In Error:', error.message);
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: 'Invalid Email and/or Password',
        })
    }
}

export const signOut = () => {
    localStorage.removeItem('token');
    return {
        type: types.SIGN_OUT
    }
}