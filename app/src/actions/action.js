import axios from "axios"
export const FETCH_SRC_LOADING = "FETCH_SRC_LOADING"
export const FETCH_SRC_SUCCESS = "FETCH_SRC_SUCCESS"
export const FETCH_SRC_FAILURE = "FETCH_SRC_FAILURE"

export const getSrc = () => {
    return dispatch => {
        // dispatch:({ type: FETCH_SRC_LOADING });

        // axios
        // do the proper axiso call!
    }
}

export const fetchSrcLoading = () => {
    return({ type:fetchSrcLoading})
}

export const fetchSrcSuccess = (url) => {
    return({type:FETCH_SRC_SUCCESS, payload:url})
}

export const fetchSrcFailure = (error) => {
    return({type:FETCH_SRC_FAILURE, payload:error})
}