import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Load reducers
import { postListReducer } from './reducers/postReducers.js';

// Combine reducers
// name: individualReducerImported
const reducer = combineReducers({ postList: postListReducer });

// Set initial state from local storage
const initialState = {};

// Middlewares in array
const middlewares = [thunk];

// Create & export store
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
