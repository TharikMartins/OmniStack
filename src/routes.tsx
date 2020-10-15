import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/landing';
import OrphanagesMap from './pages/orphanagesMap';

function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/app" component={OrphanagesMap}></Route>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;