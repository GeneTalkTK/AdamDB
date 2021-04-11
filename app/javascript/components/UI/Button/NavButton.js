import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.css';

const NavButton = (props) => (
    <button 
        className={[styles.Button, styles[props.btnType]].join(' ')}
        disabled={props.disabled} >
        <NavLink activeClassName={styles.active} to={props.link} exact={props.exact} >
            {props.label}
        </NavLink>
    </button>
)

export default NavButton;