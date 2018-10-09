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