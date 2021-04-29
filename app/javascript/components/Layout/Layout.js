import React from 'react'


import Toolbar from './Navigation/ToolBar/Toolbar'
//import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Footer from './Footer/Footer';
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
                <Toolbar />
                    {this.props.children}
                <Footer />
            </>)
    }

}

export default Layout;