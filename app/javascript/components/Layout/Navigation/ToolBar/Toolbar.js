import React from 'react';

//import Logo from '../../Logo/Logo';
import Logo1 from '../../../../images/logo1.png'
import Logo2 from '../../../../images/logo2.png'
import NavigationItems from '../NavigationItems/NavigationItems';
//import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import styles from './Toolbar.module.css';

const Toolbar = (props) => (
    <header className={styles.Toolbar}>
        {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
       <div className={styles.Logo}>        
          <img src={Logo1} height="48px"/>
          <img src={Logo2} height="18px"/>
        </div>
        <nav className={styles.DesktopOnly}> 
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;