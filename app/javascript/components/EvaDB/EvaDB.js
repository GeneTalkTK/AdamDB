import React from 'react';
import { withRouter } from "react-router";
import { Switch, Route } from 'react-router-dom';

import MainLayout from '../Layout/MainLayout';
import Sidebar from './Sidebar/Sidebar';
import FormContainer from '../FormGenerator/FormContainer';
import Variants from '../Views/Variants/Variants';

const FooBar = () => <h1>FOOBAR</h1>

const EvaDB = (props) => {
    return <>
                <MainLayout sidebar={<Sidebar/>}>
                    <Switch>
                        <Route path = "/evadb/evadbquery" component = {FormContainer} />
                        <Route path = "/evadb/variants" component = {Variants} />
                    </Switch>
                </MainLayout>
           </>
}

export default withRouter(EvaDB);
