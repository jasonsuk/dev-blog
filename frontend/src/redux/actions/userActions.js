import axios from 'axios';
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT,
} from '../constants/userConstants.js';

// Sign in an existing user
export const logInUser = (email, password) => async (dispatch) => {
    try {
        // request for data
        dispatch({ type: USER_LOGIN_REQUEST });

        // get & dispatch log in user data
        const config = {
            'Content-Type': 'application/json',
        };

        const { data } = await axios.post(
            '/api/users/login',
            { email, password },
            config
        );

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        // save log in user data in local storage
        localStorage.setItem('userInfo', JSON.stringify(data));
        //
    } catch (error) {
        // dispatch error message
        dispatch({
            type: USER_LOGIN_ERROR,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// Log out user
export const logout = () => (dispatch) => {
    // Empty local storage
    localStorage.removeItem('userInfo');
    // Empty state
    dispatch({ type: USER_LOGOUT });
};
