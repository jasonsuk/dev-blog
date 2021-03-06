// Load constants
import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_ERROR,
} from '../constants/postConstants.js';

// List all posts
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
