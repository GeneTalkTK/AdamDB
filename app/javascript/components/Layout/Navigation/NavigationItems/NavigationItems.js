import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem'

import styles from './NavigationItems.module.css'

const NavigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/EvaDB" exact>DB Queries</NavigationItem>
        <NavigationItem link="/filter" exact>Filter VCF</NavigationItem>
        {props.isAuthenticated 
        ?   <>
                <NavigationItem link="/orders">Orders</NavigationItem>
                <NavigationItem link="/logout">Log out</NavigationItem>
            </>
        :   <NavigationItem link="/auth">Authenticate</NavigationItem> 
        }
    </ul>
);

export default NavigationItems;