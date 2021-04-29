import React from 'react';

import SidebarSubItem from './SidebarSubItem';

import styles from './Sidebar.module.css';

const SidebarItem = (props) => (
    <div>
        <div className={styles.section}>{props.item.section}</div>
        <ul className={styles.items}>
            {props.item.forms.map( el => <SidebarSubItem 
                                            key={el.title.replace(/\s+/g, '')} 
                                            item={el} 
                                            onItemChange={ props.onItemChange }
                                        />)
            }
        </ul>
    </div>
);

export default SidebarItem;