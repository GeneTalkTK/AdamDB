import React, { useState } from 'react';
//import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import FormField from './FormField/FormField';
import Button from '../UI/Button/Button';

import checkValidity from '../../helpers/form/checkValidity';

import * as actions from '../../store/actions/index';

import styles from './FormGenerator.module.css';

const initFormState =  (fields, current) => {

    let init = {};
    current.fields.forEach( key => {
                                        let initValue = '';
                                        if ( fields[key].tag === 'select' ) {
                                            initValue = fields[key].config.options[0].value ?? fields[key].config.options[0]
                                        }
                                        init[key] = {};
                                        init[key]['value'] = fields[key]['value'] ?? initValue;
                                        init[key]['touched'] = false;
                                        init[key]['valid'] = !fields[key]['validation'];
                                   });

    return init;

} // initFormState


const FormGenerator = (props) => {

    const [formState, updateFormState] = useState( initFormState( props.forms.fields, props.current ) );
    const [isValid, updateIsValid] = useState( false );

    const submitHandler = ( event ) => {
        event.preventDefault();
        
        const formData = {};
        for (let formElementIdentifier in formState) {
            formData[formElementIdentifier] = formState[formElementIdentifier].value;
        }
        const formValues = {
                    form: props.current,
                    values: formData
        }
        
        props.onSubmit( formValues )
    }
        
        
        // <Input type="text" name="name" placeholder="Your Name" />
        
    const inputChangedHandler = (event, key) => {

        const updatedFormState = {
            ...formState
        };
        const updatedFormElement = { 
            ...updatedFormState[key]
        };
        updatedFormElement.value = event.target.value;
//        updatedFormElement.valid = checkValidity(updatedFormElement.value, props.current[key].validation);
        updatedFormElement.touched = true;
        updatedFormState[key] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedFormState) {
            formIsValid = (formIsValid && updatedFormState[inputIdentifier].valid) || !props.current[inputIdentifier].validation
        }
        updateFormState( updatedFormState );
        updateIsValid( formIsValid );
        
    }
    let currentForm = props.current.fields;
    if ( typeof( props.current.fields[0] ) === 'string' ) {
        console.log("converting..")
        currentForm = props.current.fields.map( x => ({type: x}))
    }

    let form = (
        <form onSubmit={submitHandler}>
            <div className={styles.formcontainer}>
                {currentForm.map( field => (
                    <FormField                 
                        key = {field.type}
                        name = {field.type}
                        elementType = {props.forms.fields[field.type].tag}
                        label = {props.forms.fields[field.type].label}
                        elementConfig = {props.forms.fields[field.type].config}
                        shouldValidate = {props.forms.fields[field.type].validation}
                        errorMessage = {props.forms.fields[field.type].errorMessage}
                        invalid = {!formState[field.type].valid}
                        value = {formState[field.type].value}
                        touched = {formState[field.type].touched}
                        changed = {(event) => inputChangedHandler(event, field.type)} />
                ))}
                <Button btnType="Success" disabled={!isValid}>Query</Button>
            </div>
        </form>
    )

//        <div className={classes.ContactData}>
    return (
            <div>
                <h4>{props.current.title}</h4>
                {form}
            </div>
    )
}

const mapStateToProps = state => {
    return {
        forms: state.evadbForms.forms,
        current: state.evadbForms.current,
        error: state.evadbForms.error
    }
}
const mapDispatchToPros = dispatch => {
    return {
        onItemChange: (form) => dispatch(actions.setCurrentForm(form)),
        initForms: () => dispatch(actions.fetchFormData()),
        onSubmit: (formValues) => dispatch( actions.evadbQuery( formValues ) )
    }
}

//export default connect( mapStateToProps, mapDispatchToPros )(withAxiosErrorHandler( FormGenerator, orderAccess ));

export default connect( mapStateToProps, mapDispatchToPros )( FormGenerator );
