import axios from 'axois';
import {
    COURSE_LIST_REQUEST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,
    COURSE_DETAIL_REQUEST,
    COURSE_DETAIL_SUCCESS,
    COURSE_DETAIL_FAIL,
    COURSE_CREATE_REQUEST,
    COURSE_CREATE_SUCCESS,
    COURSE_CREATE_FAIL,
    COURSE_UPDATE_REQUEST,
    COURSE_UPDATE_SUCCESS,
    COURSE_UPDATE_FAIL,
    COURSE_DELETE_REQUEST,
    COURSE_DELETE_SUCCESS,
    COURSE_DELETE_FAIL,
} from '../constants/courseConstants.js';

export const listCourses = () => async (dispatch) => {
    try {
        // Request for the data
        dispatch({ type: COURSE_LIST_REQUEST });
        // Fetch the data from the server
        const { data } = await axios.get('/api/courses');
        // Load the data onto payload if succeeds
        dispatch({ type: COURSE_LIST_SUCCESS, payload: data });
        //
    } catch (error) {
        // Send error message if fails
        dispatch({
            type: COURSE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listCourseDetail = (courseId) => async (dispatch) => {
    try {
        // Request for the data
        dispatch({ type: COURSE_DETAIL_REQUEST });
        // Fetch the data from the server
        const { data } = await axios.get(`/api/courses/${courseId}`);
        // Load the data onto payload if succeeds
        dispatch({ type: COURSE_DETAIL_SUCCESS, payload: data });
        //
    } catch (error) {
        // Send error message if fails
        dispatch({
            type: COURSE_DETAIL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createCourse = () => async (dispatch, getState) => {
    try {
        // Request for the data
        dispatch({ type: COURSE_CREATE_REQUEST });

        // Get user token from the state to verify the access
        const {
            userLogIn: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authentication: `Bearer ${userInfo.token}`,
            },
        };

        // Create a placholder course
        await axios.post(`/api/courses`, {}, config);
        // Load the data onto payload if succeeds
        dispatch({ type: COURSE_CREATE_SUCCESS });
        //
    } catch (error) {
        // Send error message if fails
        dispatch({
            type: COURSE_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateCourse = (course) => async (dispatch, getState) => {
    try {
        // Request for the data
        dispatch({ type: COURSE_UPDATE_REQUEST });

        // Get user token from the state to verify the access
        const {
            userLogIn: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authentication: `Bearer ${userInfo.token}`,
            },
        };

        // Update the data
        const { data } = await axios.put(
            `/api/courses/${course._id}`,
            course,
            config
        );
        // Load the data onto payload if succeeds
        dispatch({ type: COURSE_UPDATE_SUCCESS, payload: data });
        //
    } catch (error) {
        // Send error message if fails
        dispatch({
            type: COURSE_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteCourse = () => async (dispatch, getState) => {
    try {
        // Request for the data
        dispatch({ type: COURSE_DELETE_REQUEST });

        // Get user token from the state to verify the access
        const {
            userLogIn: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authentication: `Bearer ${userInfo.token}`,
            },
        };

        // Update the data
        await axios.delete(`/api/courses/${course._id}`, config);
        // Load the data onto payload if succeeds
        dispatch({ type: COURSE_DELETE_SUCCESS });
        //
    } catch (error) {
        // Send error message if fails
        dispatch({
            type: COURSE_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
