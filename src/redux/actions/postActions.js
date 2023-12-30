import { POST_FETCHING, POST_FETCHING_SUCCESS, POST_FETCHING_ERROR } from "./actionTypes";


export const postFetching = () => {
    return {
        type: POST_FETCHING,
    }
}

export const postFetchingSuccess = (data) => {
    return {
        type: POST_FETCHING_SUCCESS,
        payload: data,
    }
}

export const postFetchingError = (error) => {
    return {
        type: POST_FETCHING_ERROR,
        payload: error,
    }
}