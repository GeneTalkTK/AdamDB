import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import styles from './SideDrawer.module.css'

const SideDrawer = (props) => {
    let classes = [styles.SideDrawer, styles.Close];
    if (props.open) {
        classes = [styles.SideDrawer, styles.Open]
    }

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={classes.join(' ')} onClick={props.closed} >
                <div className={styles.Logo}><Logo /></div>
                <nav>
                    <NavigationItems isAuthenticated = {props.isAuthenticated} />
                </nav>
            </div>
        </>
    );
};

export default SideDrawer;