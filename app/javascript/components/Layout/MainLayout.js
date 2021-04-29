import React from 'react'

import styles from './Layout.module.css'

class MainLayout extends React.Component {
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

    render2() {
        return (
            <>
                <div className={styles.content}>
                    {this.props.sidebar 
                        ?
                            <div className={styles.contentside} >
                                {this.props.sidebar}
                            </div>
                        : null 
                    }
                    <div className={styles.contentmain} >
                        <section className={styles.section}>
                            {this.props.children}
                        </section>
                    </div>
                </div>
            </>)
    }
    render() {
        let sideClasses = [styles.content];
        let mainClasses = [styles.container];
        let SideBar = null;
        if (this.props.sidebar) {
            sideClasses.push(styles.wide);
            mainClasses.push(styles.main);
            SideBar = <div className={styles.contentside} >{this.props.sidebar}</div>
        }
        return (
            <>
                <main className = {sideClasses.join(' ')}>
                    {SideBar} 
                    <section className={styles.section}>
                        <div className={mainClasses.join(' ')}>
                            {this.props.children}
                        </div>
                    </section>
                </main>
            </>
        )}

}

export default MainLayout;