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
export const postListReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case POST_LIST_REQUEST:
            return { loading: true, posts: [] };
        case POST_LIST_SUCCESS:
            return { loading: false, success: true, posts: action.payload };
        case POST_LIST_ERROR:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// List a single post in detail @ PostPage
export const postDetailReducer = (state = { post: [] }, action) => {
    switch (action.type) {
        case POST_DETAIL_REQUEST:
            return { loading: true, post: [] };
        case POST_DETAIL_SUCCESS:
            return { loading: false, success: true, post: action.payload };
        case POST_DETAIL_ERROR:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// Delete a post
export const postDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_DELETE_REQUEST:
            return { loading: true };
        case POST_DELETE_SUCCESS:
            return { loading: false, success: true };
        case POST_DELETE_ERROR:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
