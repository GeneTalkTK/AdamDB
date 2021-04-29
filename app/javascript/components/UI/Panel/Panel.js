import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Panel.module.css';

const Panel= (props) => {
    const [ isOpen, setOpen ] = useState( true );
    
    return(
        <div className={styles.panel}>
            <div className={styles.panelHeader}>
                <div className={styles.panelHeaderTitle}>
                    {props.title}
                </div>
                <button 
                    className = {[styles.panelHeaderIcon, isOpen ? styles.panelIconOpen : styles.panelIconClosed].join(' ')}
                    onClick = { () => setOpen( !isOpen ) }
                >                
                    <FontAwesomeIcon icon={faChevronDown}  />
                </button>
            </div>
            <div className = {[styles.panelContent, isOpen ? styles.panelOpen : styles.panelClosed].join(' ')}>
                {props.children}
            </div>
        </div>
    )
}

export default Panel;