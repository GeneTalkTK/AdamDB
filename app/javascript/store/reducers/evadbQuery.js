import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: {},
    loading: false,
    submitted: false,
    error: false
}

const evadbQueryReducer = (state = initialState, action) => {
    switch( action.type ) {
        case actionTypes.EVADB_QUERY_INIT:
            return {
                ...state,
                submitted: false
            }
        case actionTypes.EVADB_QUERY_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.EVADB_QUERY_SUCCESS:
            return {
                ...state,
                loading: false,
                submitted: true,
                data: action.data
            }
        case actionTypes.EVADB_QUERY_FAIL:
            return {
                ...state,
                loading: false
            }
        default: {
            return state
        }

    }
}

export default evadbQueryReducer;
