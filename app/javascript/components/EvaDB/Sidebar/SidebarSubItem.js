import React from 'react';

import styles from './Sidebar.module.css';

const SidebarSubItem = (props) => (
    <li 
        className={styles.item}
        onClick={ () => props.onItemChange(props.item) }

    >{props.item.title}</li>
);

export default SidebarSubItem;