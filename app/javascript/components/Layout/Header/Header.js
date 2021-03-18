import React from 'react';

import Logo1 from '../../../images/logo1.png'
import Logo2 from '../../../images/logo2.png'
import styles from './Header.module.css'

const Header = (props) => (
    <div className={styles.header}>
        <img src={Logo1} height="100px"/>
        <img src={Logo2} height="50px"/>
    </div>
);

export default Header;