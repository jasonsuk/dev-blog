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
    POST_CREATE_ERROR,
    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    POST_UPDATE_REQUEST,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_ERROR,
} from '../constants/postConstants.js';

// List all posts @ HomePage
export const listPosts = (keyword = '') => async (dispatch) => {
    try {
        // request for data
        dispatch({ type: POST_LIST_REQUEST });

        // get data from backend
        const { data } = await axios.get(`/api/posts?keyword=${keyword}`);
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
export const deletePost = (postId) => async (dispatch, getState) => {
    try {
        // request for data
        dispatch({ type: POST_DELETE_REQUEST });
        // authenticate the access

        const {
            userLogIn: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        // delete a post
        await axios.delete(`/api/posts/${postId}`, config);
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

// Create a sample post
export const createPost = () => async (dispatch, getState) => {
    try {
        // request for data
        dispatch({ type: POST_CREATE_REQUEST });
        // authenticate the access
        const {
            userLogIn: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        // create a post
        const { data } = await axios.post('/api/posts', {}, config);
        dispatch({ type: POST_CREATE_SUCCESS, payload: data });
        //
    } catch (error) {
        // dispatch error message
        dispatch({
            type: POST_CREATE_ERROR,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// Update a post
export const updatePost = (post) => async (dispatch, getState) => {
    try {
        // request for data
        dispatch({ type: POST_UPDATE_REQUEST });
        // authenticate the access
        const {
            userLogIn: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        // update a post
        await axios.put(`/api/posts/${post._id}`, post, config);
        dispatch({ type: POST_UPDATE_SUCCESS });
        //
    } catch (error) {
        // dispatch error message
        dispatch({
            type: POST_UPDATE_ERROR,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
