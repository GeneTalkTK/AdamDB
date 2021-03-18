import * as actionTypes from '../actions/actionTypes'

const initialState = {
    forms: null,
    current: null,
    error: false
}

const evadbFormsReducer = (state = initialState, action) => {
    switch( action.type ) {
        case actionTypes.SET_CURRENT_FORM:
            return {
                ...state,
                current: action.current
            }
        case actionTypes.SET_FORMS:
            return {
                ...state,
                forms: {...action.forms},
                error: false
            }
        case actionTypes.FETCH_FORMS_FAILED:
            return {
                ...state,
                error: true
            }
        default: {
            return state
        }

    }
}

export default evadbFormsReducer;
