import React from 'react';

import BackDrop from '../Backdrop/Backdrop'
import styles from './Modal.module.css'

const Modal = (props) => (
    <>
        <BackDrop show={props.show} clicked={props.modalClosed} />
        <div
            className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </>
)

const shouldNotUpdate = (prevProps, nextProps) => ( prevProps.show === nextProps.show && prevProps.children === nextProps.children )

export default React.memo( Modal, shouldNotUpdate );
