import {
    AUTH_SUCCESS,
    AUTH_FAILURE, 
    CLEAR_AUTH,
    LOAD_USER
} from './types';

export const register = (userData) => dispatch => {
    try {
        // make API call, hardcoded for now 
        const data = {
            name: 'John Doe',
            role: ['Admin', 'Manager', 'Customer'],
            balance: 100, 
            location: {
                building: 'Building One',
                station: 'Station One'
            }
        }; 

        localStorage.user = JSON.stringify(data);

        dispatch({
            type: AUTH_SUCCESS,
            payload: data
        }); 
    } catch (error) {
        dispatch({
            type: AUTH_FAILURE
        }); 
    }
}

export const login = (userData) => dispatch => {
    try {
        // make API call
        const data = {
            name: "John Doe",
            role: ["Admin", "Manager", "Customer"],
            balance: 100,
            location: {
                building: "Building One",
                station: "Station One",
            },
        }; 

        localStorage.user = JSON.stringify(data); 

        dispatch({
            type: AUTH_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: AUTH_FAILURE
        }); 
    }
}

export const loadUser = () => dispatch => {
    try {
        if (localStorage.user) {
            dispatch({
                type: LOAD_USER, 
                payload: JSON.parse(localStorage.user)
            }); 
        }
    } catch (error) {
        dispatch({
            type: AUTH_FAILURE
        }); 
    }
}

export const logout = () => dispatch => {
    try {
        localStorage.removeItem('user'); 
        
        dispatch({
          type: CLEAR_AUTH
        });
    } catch (error) {
        dispatch({
          type: AUTH_FAILURE
        });
    }
}