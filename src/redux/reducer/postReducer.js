import { POST_FETCHING, POST_FETCHING_SUCCESS, POST_FETCHING_ERROR } from "../actions/actionTypes";


let initialState = {
    loading: false,
    data: [],
    error: null,
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_FETCHING:
            return (
                {...state, loading: true}
            )
        
        case POST_FETCHING_SUCCESS: 
            return (
                {...state, loading: false, data: action.payload, error: null}
            )

        case POST_FETCHING_ERROR:
            return (
                {...state, loading: false, data: [], error: action.payload}
            )
    }
}