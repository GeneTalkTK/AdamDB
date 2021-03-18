import React from 'react'

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

//import Toolbar from '../Navigation/Toolbar/Toolbar'
//import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

import styles from './Layout.module.css'

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => { return { showSideDrawer: !prevState.showSideDrawer } });
    }

    /*             <Toolbar toggleMenu = {this.sideDrawerToggleHandler} drawerToggleClicked={this.sideDrawerToggleHandler} />
    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
    */

    render() {
        return (
            <>
                <Header />
                <div className={styles.clearfix}></div>
                <div className={styles.contentbox}>
                    <div className={styles.contentside} >
                        <Sidebar />
                    </div>
                    <div className={styles.contentmain} >
                        <section className={styles.section}>
                            {this.props.children}
                        </section>
                    </div>
                </div>
            </>)
    }
}

export default Layout;