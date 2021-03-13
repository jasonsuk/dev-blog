import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Load reducers
import {
    postListReducer,
    postDetailReducer,
    postDeleteReducer,
    postCreateReducer,
    postUpdateReducer,
} from './reducers/postReducers.js';

import { userLogInReducer } from './reducers/userReducers.js';

// Combine reducers
// name: individualReducerImported
const reducer = combineReducers({
    postList: postListReducer,
    postDetail: postDetailReducer,
    userLogIn: userLogInReducer,
    postDelete: postDeleteReducer,
    postCreate: postCreateReducer,
    postUpdate: postUpdateReducer,
});

// Get data from local storage
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : [];

// Set initial state from local storage
const initialState = { userLogIn: { userInfo: userInfoFromLocalStorage } };

// Middlewares in array
const middlewares = [thunk];

// Create & export store
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
