import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import NavigationItems from '../components/UI/Navigation/NavigationItems/NavigationItems';
import NavButton from '../components/UI/Button/NavButton';

import Layout from '../components/Layout/Layout';
import FormContainer from '../components/FormGenerator/FormContainer';
import Variants from '../components/Views/Variants/Variants';
import Sandbox from '../components/Sandbox/Sandbox';
import Keepout from '../images/Keepout.png';


const Dummy = () => {
  return <>
    <div align='center'>
      <img src={Keepout} />
    </div>
    <div style={{marginTop: '50px'}}>
      <NavButton link = '/sandbox' label = 'Sandbox' />
    </div>
    </>
}

const Dommy = () => {
  return <>
  <h1>EVA DB Proof of concept</h1>
  Moin!
  </>
}

const App = () => {
    return <>
                <Layout>
                    <Switch>
                        <Route path = "/evadbquery" component = {FormContainer} />
                        <Route path = "/variants" component = {Variants} />
                        <Route path = "/sandbox" component = {Sandbox} />
                        <Route path = "/bar"  component = {Dommy} />
                        <Route path = "/" exact component = {Dummy} />
                    </Switch>
                </Layout>
           </>

}

export default App;
