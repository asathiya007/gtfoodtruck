import {
    AUTH_SUCCESS, 
    AUTH_FAILURE, 
    CLEAR_AUTH,
    LOAD_USER
} from '../actions/types';

const initialState = {
    user: null, 
}

export default function(state = initialState, action) {
    const {type, payload} = action; 

    switch(type) {
        case AUTH_SUCCESS: 
        case LOAD_USER: 
            return {
                ...state,
                user: payload 
            }
        case AUTH_FAILURE: 
        case CLEAR_AUTH: 
            return {
                ...state, 
                user: null
            }
        default: 
            return state
    }
}