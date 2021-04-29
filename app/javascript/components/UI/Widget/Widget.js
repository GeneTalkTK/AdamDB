import React from 'react';

import styles from './Widget.module.css';

const Widget = (props) => {
    return (<>
        <div className = {styles.Panel}>
            <div className = {styles.PanelHdr}>
                <h2>PanelHDR</h2>
                <div className={styles.PanelToolbar}>
                    <button className="Btn BtnPanel WavesEffect waves-themed" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                    <button className="Btn BtnPanel WavesEffect waves-themed" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                    <button className="Btn BtnPanel WavesEffect waves-themed" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                </div>
            </div>
            <div className = {styles.PanelContent}>
                {props.children}
            </div>
        </div>
        </>
    )
};

export default Widget;