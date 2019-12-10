import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Certificate from './pages/certificate';
import Assinar from './pages/assinar';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/certificate/:id" component={Certificate}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;