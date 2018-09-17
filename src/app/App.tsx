import * as React from 'react';
import Informasjonstavle from './pages/informasjonstavle/Informasjonstavle';
import HvaSøkerDu from './pages/hva-søker-du/HvaSøkerDu';
import SøkForeldrepenger from './pages/søk-foreldrepenger/SøkForeldrepenger';
import AllInformasjon from './pages/all-informasjon/AllInformasjon';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

const App = () => {
    return (
        <Switch>
            <Route
                exact={true}
                path="/"
                component={Informasjonstavle}
                key="informasjonstavle"
            />
            <Route
                exact={true}
                path="/hva-soker-du"
                component={HvaSøkerDu}
                key="hva-soker-du"
            />
            <Route
                exact={true}
                path="/hva-soker-du/foreldrepenger"
                component={SøkForeldrepenger}
                key="foreldrepenger"
            />
            <Route
                exact={true}
                path="/all-informasjon"
                component={AllInformasjon}
                key="all-informasjon"
            />
            <Redirect to="/hva-soker-du" />
        </Switch>
    );
};

export default withRouter(App);
