import * as actionTypes from './actionTypes';

import apiAccess from '../../helpers/axios/apiAccess';

export const evadbQueryInit = () => {
    return {
        type: actionTypes.EVADB_QUERY_INIT
    }
}

export const evadbQueryStart = () => {
    return {
        type: actionTypes.EVADB_QUERY_START
    }
}

export const evadbQuerySuccess = ( data ) => {
    console.log( "REDUCER DATA ", data)
    return {
        type: actionTypes.EVADB_QUERY_SUCCESS,
        data: data
    }
}

export const evadbQueryFail = (error) => {
    return {
        type: actionTypes.EVADB_QUERY_FAIL,
        error: error
    }
}

export const evadbQuery = (formData) => {
    return dispatch => {
        console.log(formData)
        dispatch( evadbQueryStart() );
        apiAccess.post( '/evadb/search', formData )
            .then( response => {
                console.log( "[EVADB RESPONSE] ", response );
                dispatch( evadbQuerySuccess( response.data ));
            })
            .catch( error => {
                dispatch( evadbQueryFail( error ));
            })
    }
}