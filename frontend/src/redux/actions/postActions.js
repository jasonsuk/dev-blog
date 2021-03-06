import axios from 'axios';

// Load constants
import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_ERROR,
} from '../constants/postConstants.js';

export const listPosts = () => async (dispatch) => {
    try {
        // request for data
        dispatch({ type: POST_LIST_REQUEST });

        // get data from backend
        const { data } = await axios.get('/api/post');
        dispatch({ type: POST_LIST_SUCCESS, payload: data });
        //
    } catch (error) {
        // dispatch error message
        dispatch({
            type: POST_LIST_ERROR,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
