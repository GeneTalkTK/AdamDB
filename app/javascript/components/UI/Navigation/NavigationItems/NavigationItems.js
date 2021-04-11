import React from 'react';

import NavigationItem from './NavigationItem/NavigationsItem'

import styles from './NavigationItems.module.css'

const NavigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact>EvaDB</NavigationItem>
        <NavigationItem link="/sandbox">Sandbox</NavigationItem>
        {props.isAuthenticated 
        ?   <>
                <NavigationItem link="/logout">Log out</NavigationItem>
            </>
        :   <NavigationItem link="/auth">Authenticate</NavigationItem> 
        }
    </ul>
);

export default NavigationItems;