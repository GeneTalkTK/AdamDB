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
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( prevState => {return { showSideDrawer: !prevState.showSideDrawer }});
    }

    /*             <Toolbar toggleMenu = {this.sideDrawerToggleHandler} drawerToggleClicked={this.sideDrawerToggleHandler} />
    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
    */

    render () {
        return (
        <>
            <Header />
            <div className={styles.clearfix}></div>
            <section>
                <div className={[styles.contentfl, styles.flex].join(' ')} >
                    <div className={styles.contentbox}>
                        <div className={[styles.contentside, styles.flexleft].join(' ')}>
                            <Sidebar />
                        </div>
                        <div className={[styles.contentmain, styles.flexmain].join(' ')} >
                            <section className={styles.section}>
                                <div className={styles.container} >
                                    <h1>content</h1>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>               
            </section>
        </>)
    }
}

export default Layout;


/*
    <div>
        {%- include navigation.html -%}
    </div>
    <div class="clearfix"></div>
    
    <div class="head flex">
    <div class="headleft flexleft">
        <img src="/assets/images/logo.png" />
    </div>
    <div class="headmiddle flexmiddle">
        <div class="pagetitle">Arbeitsgemeinschaft für Gen-Diagnostik e.V.</div>
    </div>
</div>

<section>
    {{ content }}
</section>

content: 
<div class="contentfl flex">
    <div class="contentbox">
        <div class="contentside flexleft">
            {%- include tagungen_sidebar.html -%}
        </div>
        <div class="contentmain flexmiddle ">
            <section class="section">
                <div class="container tagung">
                    {%- for item in site.data.tagungen -%}
                       <div class="abschnitt"> 
                         <h2 style="color: black !important;">{{item.datum}}</h2>
                         <a href="{%- if item.file -%}/assets/files/{{item.file}}{%- else -%} /tagung{{item.jahr}}.html{%- endif -%}">
                           <h1>Jahrestagung {{item.jahr}} {%- if item.ort %} in {{item.ort}} {%- endif -%}</h1>
                         </a>
                         <h2 style="color: black !important;">Thema: {{item.thema}}</h2>
                       </div>
                    {%- endfor -%}

                    <div class="abschnitt">
                        <a href="tagungen_fruehere.html"><h1>Frühere Veranstaltungen</h1></a>
                </div>
            </section>
        </div>
    </div>
</div>
*/