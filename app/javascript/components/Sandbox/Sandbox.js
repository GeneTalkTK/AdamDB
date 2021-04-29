import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';


import MainLayout from '../Layout/MainLayout';

import Dropzone from './Dropzone/Dropzone';
import PanelTest from './UI/PanelTest';

import NavButton from '../UI/Button/NavButton';

import Homer from './nukular.jpg';

//import styles from './Sandbox.module.css';

const Nukular = () => <>
    <Hero color="primary" >
        <Hero.Body>
            <Container>
                <Heading size={1}>Nuclear<sup>*</sup> Test Site</Heading>
                <Heading size={3}>Do Not Enter!</Heading>
            </Container>
        </Hero.Body>
    </Hero>
    <h1></h1>
    <p><small>(*): </small></p>
    <p><img src={Homer} style={{margin:"auto"}} /></p>
</>

const Nukkelar = () => <h1>Nukkelar Test Site</h1>

const Sandbox = () => <MainLayout>
    <Switch>
        <Route path = "/react_sandbox" component = {Nukular} exact />
        <Route path = "/react_sandbox/dropzone" component = {Dropzone} />
        <Route path = "/react_sandbox/panel" component = {PanelTest} />
    </Switch>
    <Section>
    <NavButton link = '/react_sandbox' label = 'Sandbox' style={{margin: "20px"}}/>
    <NavButton link = '/react_sandbox/dropzone' label = 'Dropzone' style={{margin: "20px"}}/>
    <NavButton link = '/react_sandbox/panel' label = 'Panel' style={{margin: "20px"}}/>
    </Section>
</MainLayout>


const Sandbox2 = (props) => <SandboxMenu />


export default withRouter(Sandbox);

