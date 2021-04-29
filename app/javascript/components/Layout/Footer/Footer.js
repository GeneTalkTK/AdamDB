import React from 'react';

import LaB from '../../../images/logos/LaB.png'
import UKB from '../../../images/logos/UKB.png'
import IGSB from '../../../images/logos/igsb.png'
import GeneTalk from '../../../images/logos/GeneTalk.png'
import styles from './Footer.module.css'

const Footer = (props) => <footer className={styles.footer}>
  <div className={styles.container}>
    <button className={styles.button}><a href="https://www.gene-talk.de"><img src={GeneTalk} height="60px"/></a></button>
    <button className={styles.button}><a href="https://www.igsb.uni-bonn.de/en"><img src={IGSB} height="55px"/></a></button>
    <button className={styles.button}><a href="https://www.lifeandbrain.com/"><img src={LaB} height="50px"/></a></button>
    {/* <button className={styles.button}><a href="http://tnamse.de/"></a></button>
    <button className={styles.button}><a href="https://www.agdev.de"></a></button> */}
  </div>
</footer>

export default Footer;