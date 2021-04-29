import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
//import NavigationItems from '../components/UI/Navigation/NavigationItems/NavigationItems';
import NavButton from '../components/UI/Button/NavButton';

import Layout from '../components/Layout/Layout';
import MainLayout from '../components/Layout/MainLayout'
import EvaDB from '../components/EvaDB/EvaDB';
import Filter from '../components/Filter/Filter';
import Variants from '../components/Views/Variants/Variants';
import Sandbox from '../components/Sandbox/Sandbox';
import Keepout from '../images/Keepout.png';
import Widget from '../components/UI/Widget/Widget'

import styles from './App.module.scss';

const Dummy = () => {
  return <MainLayout>
    <div align='center' style={{padding: "50px"}}>
        <NavLink to="/react_sandbox">
            <img src={Keepout} />
        </NavLink>
    </div>
  </MainLayout>
}

const DummyS = () => <Redirect to='/react_sandbox' />

const App = () => {
    return <div className={styles.App}>
                <Layout>
                    <Switch>
                        <Route path = "/evadb" component = {EvaDB} />
                        <Route path = "/variants" component = {Variants} />
                        <Route path = "/react_sandbox" component = {Sandbox} />
                        <Route path = "/filter" component = {Filter} />
                        <Route path = "/bar"  component = {Dummy} />
                        <Route path = "/" exact component = {Dummy} />
                    </Switch>
                </Layout>
           </div>

}

export default App;
