import types from './types';
import axios from 'axios';

export const signUp = (userInfo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://api.reactprototypes.com/signup', userInfo);
            
            console.log('Sign Up:', response);
        } catch(error) {
            console.log('Sign Up Error:', error.message);
        }
    }
}

export const signIn = userInfo => async dispatch => {
    try {
        const response = await axios.post('http://api.reactprototypes.com/signin', userInfo);

        console.log('Sign In Response:', response);
    } catch(error) {
        console.log('Sign In Error:', error.message);
    }
}