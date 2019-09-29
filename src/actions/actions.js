import axios from "axios";

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const getData = (dispatch) => {
    dispatch({type: FETCH_DATA_START});
    axios
        .get("https://official-joke-api.appspot.com/random_ten")
        .then(res => {
            console.log(res);
            dispatch({
                type: FETCH_DATA_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({type: FETCH_DATA_FAIL, payload: err})
        })
};