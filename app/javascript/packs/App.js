import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import FormContainer from '../components/FormGenerator/FormContainer';
import Variants from '../components/Views/Variants/Variants';

const Dummy = () => {
    return <h1>EVA DB Proof of concept</h1>
}

const App = () => {
/*    
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path = "/checkout" component={Checkout} />
          <Route path = "/orders" component={Orders} />
          <Route path = "/" exact component = {BurgerBuilder} /> 
        </Switch>
      </Layout>
    </div>
  );
*/

    return <>
                <Layout>
                    <Switch>
                        <Route path = "/evadbquery" component = {FormContainer} />
                        <Route path = "/variants" component = {Variants} />
                        <Route path = "/" exact component = {Dummy} />
                    </Switch>
                </Layout>
           </>

}

export default App;
