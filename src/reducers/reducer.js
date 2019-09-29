import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL} from "../actions/actions";

const initialState = {
    jokes: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                jokes: action.payload,
                isFetching: false,
                error: "none"
            };
        case FETCH_DATA_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;