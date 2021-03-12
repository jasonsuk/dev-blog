import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT,
} from '../constants/userConstants.js';

// Sign in an existing user
export const userLogInReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_ERROR:
            return { loading: true, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};
