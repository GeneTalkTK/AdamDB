import apiAccess from '../../helpers/axios/apiAccess'

import * as actionTypes from './actionTypes'

export const setCurrentForm = (current) => {
    return {
        type: actionTypes.SET_CURRENT_FORM,
        current: current
    }
}

export const setForms = (forms) => {
    return {
        type: actionTypes.SET_FORMS,
        forms: forms
    }
}

export const fetchFormsFailed = () => {
    return {
        type: actionTypes.FETCH_FORMS_FAILED
    }
}

export const fetchFormData = () => {
    return dispatch => {
        apiAccess.get('evadb/forms.json')
            .then( response => { 
                // console.log( '[DISPATCH] ', response.data)
                dispatch( setForms( response.data ))
            })
            .catch( error => { 
                dispatch( fetchFormsFailed())
            })
    }
}