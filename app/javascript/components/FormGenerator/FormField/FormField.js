import React from 'react';

import styles from './FormField.module.css';

const FormField = ( props ) => {
    let inputElement = null;
    const inputClasses = [styles.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(styles.Invalid);
    }

    switch ( props.elementType || 'input' ) {
/*
        case ( 'input' ):
            inputElement = <input className={styles.InputElement} {...props} />;
            break;
*/
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value ?? option} value={option.value ?? option}>
                            {option.displayValue ?? option}
                        </option>
                    ))}
                </select>
            );
            break;
        case ( 'boxes' ):
            let buttons = props.elementConfig.options.map( option => (
                <div key={option}>
                    <input 
                            id = {props.name+option}
                            type = {props.elementConfig.type} 
                            name = {props.name+'[]'} 
                            value = {option}
                            defaultChecked = {props.elementConfig.defaults.includes(option)}
                    />
                    <label htmlFor={props.name+'[]'}>{option}</label><br />
                </div>
            ))
            inputElement = (
                <div>
                  {buttons}
                </div>
            )
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p className={styles.ValidationError}>{props.errorMessage || 'Please enter a valid value'}</p>;
    }

    return (
        <>
        <div className={styles.Label}>
        <label>{props.label}</label>
        </div>
        <div className={styles.Input}>
        {inputElement}
        {validationError}
        </div>
        </>
    );

};

export default FormField;