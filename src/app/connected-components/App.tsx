import * as React from 'react';
import Frontpage from './frontpage/Frontpage';
import ForeldrepengerEntrance from './foreldrepenger-entrance/ForeldrepengerEntrance';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

const App = () => {
    return (
        <Switch>
            <Route
                exact={true}
                path="/hva-vil-du-soke-om"
                component={Frontpage}
                key="hva-vil-du-soke-om"
            />
            <Route
                exact={true}
                path="/hva-vil-du-soke-om/foreldrepenger"
                component={ForeldrepengerEntrance}
                key="foreldrepenger"
            />
            <Redirect to="/hva-vil-du-soke-om" />
        </Switch>
    );
};

export default withRouter(App);
