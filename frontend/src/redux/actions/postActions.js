import axios from 'axios';

// Load constants
import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_ERROR,
    POST_DETAIL_REQUEST,
    POST_DETAIL_SUCCESS,
    POST_DETAIL_ERROR,
    POST_DELETE_REQUEST,
    POST_DELETE_SUCCESS,
    POST_DELETE_ERROR,
} from '../constants/postConstants.js';

// List all posts @ HomePage
export const listPosts = () => async (dispatch) => {
    try {
        // request for data
        dispatch({ type: POST_LIST_REQUEST });

        // get data from backend
        const { data } = await axios.get('/api/posts');
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

// List a single post in detail @ PostPage
export const listPostDetail = (postId) => async (dispatch) => {
    try {
        // request for data
        dispatch({ type: POST_DETAIL_REQUEST });
        // get data from backend
        const { data } = await axios.get(`/api/posts/${postId}`);
        dispatch({ type: POST_DETAIL_SUCCESS, payload: data });
        //
    } catch (error) {
        // dispatch error message
        dispatch({
            type: POST_DETAIL_ERROR,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// Delete a post
export const deletePost = (postId) => async (dispatch) => {
    try {
        // request for data
        dispatch({ type: POST_DELETE_REQUEST });
        // authenticate the access

        // delete a post
        await axios.delete(`/api/posts/${postId}`);
        dispatch({ type: POST_DELETE_SUCCESS });
        //
    } catch (error) {
        // dispatch error message
        dispatch({
            type: POST_DELETE_ERROR,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
