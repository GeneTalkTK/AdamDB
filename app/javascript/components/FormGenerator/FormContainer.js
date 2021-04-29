import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import FormGenerator from './FormGenerator'
import Spinner from '../UI/Spinner/Spinner';

const FormContainer = (props) => (
    props.submitted 
        ? <Redirect to="/evadb/variants" /> 
        : ( props.current 
            ? <FormGenerator /> 
            : null 
          )
)


const mapStateToProps = state => {
    return {
        current: state.evadbForms.current,
        submitted: state.evadbQuery.submitted
    }
}

export default connect( mapStateToProps )( FormContainer );
