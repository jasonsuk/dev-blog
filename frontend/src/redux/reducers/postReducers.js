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
    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    POST_CREATE_ERROR,
    POST_CREATE_RESET,
    POST_UPDATE_REQUEST,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_ERROR,
    POST_UPDATE_RESET,
} from '../constants/postConstants.js';

// List all posts @ HomePage
export const postListReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case POST_LIST_REQUEST:
            return { loading: true, posts: [] };
        case POST_LIST_SUCCESS:
            return {
                loading: false,
                success: true,
                posts: action.payload.posts,
                pageNumber: action.payload.pageNumber,
                pageSize: action.payload.pageSize,
                pageCount: action.payload.pageCount,
            };
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
            return { loading: true, ...state };
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

// Create a sample post (to be updated immediately)
export const postCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_CREATE_REQUEST:
            return { loading: true };
        case POST_CREATE_SUCCESS:
            return { loading: false, success: true, post: action.payload };
        case POST_CREATE_ERROR:
            return { loading: false, error: action.payload };
        case POST_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

// Update a post
export const postUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_UPDATE_REQUEST:
            return { loading: true };
        case POST_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case POST_UPDATE_ERROR:
            return { loading: false, error: action.payload };
        case POST_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};
