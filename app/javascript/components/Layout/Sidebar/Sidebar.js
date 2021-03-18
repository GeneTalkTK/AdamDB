import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import SidebarItem from './SidebarItem';
import Spinner from '../../UI/Spinner/Spinner';

import * as actions from '../../../store/actions/index';

import styles from './Sidebar.module.css';

const Sidebar = (props) => {

    useEffect( () => { 
            props.initForms() 
    }, [] )

//   const Items = props.forms.map(el => el.sectionid.replace(/\s+/g, ''));

    const itemChangeHandler = (form) => {
        props.initQuery();
        props.onItemChange(form);
        props.history.push('/evadbquery');
    }

    let Items = props.error ? <p>Error: Forms cannot be loaded!</p> : <Spinner />
    if ( props.forms ) {
      Items = props.forms.forms.map( el => <SidebarItem 
                                                key={el.section.replace(/\s+/g, '')} 
                                                item={el} 
                                                onItemChange={itemChangeHandler}
                                            />)
    }

    return (<aside id="sidebar" className={styles.sidebar} >
                <section className={styles.sections}>
                    {Items}
                </section>
            </aside>
    );
}

const mapStateToProps = state => {
    return {
        forms: state.evadbForms.forms,
        error: state.evadbForms.error
    }
}
const mapDispatchToPros = dispatch => {
    return {
        onItemChange: (form) => dispatch(actions.setCurrentForm(form)),
        initForms: () => dispatch(actions.fetchFormData()),
        initQuery: () => dispatch(actions.evadbQueryInit())
    }
}

//export default connect( mapStateToProps, mapDispatchToPros )(withAxiosErrorHandler( BurgerBuilder, orderAccess ));

export default connect( mapStateToProps, mapDispatchToPros )( withRouter(Sidebar) );