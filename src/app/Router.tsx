import * as React from 'react';
import { Route, Redirect, Switch, withRouter, RouteProps } from 'react-router-dom';

import { Page } from './types/Page';
import Dokumentasjon from './pages/dokumentasjon/Dokumentasjon';
import HvaSøkerDu from './pages/hva-søker-du/HvaSøkerDu';
import Informasjonstavle from './pages/informasjonstavle/Informasjonstavle';
import Kalkulator from './pages/kalkulator/Kalkulator';
import OmEngangsstønad from './pages/om-engangsstønad/OmEngangsstønad';
import OmForeldrepenger from './pages/om-foreldrepenger/OmForeldrepenger';
import OmSvangerskapspenger from './pages/svangerskapspenger/OmSvangerskapspenger';
import Regelendringer from './pages/regelendringer/Regelendringer';
import SøkSvangerskapspenger from './pages/søk-svangerskapspenger/SøkSvangerskapspenger';
// import Veiviser from './pages/veiviser/Veiviser';
import SøkForeldrepenger from './pages/søk-foreldrepenger/SøkForeldrepenger';

interface ValidRouteProps extends RouteProps {
    path?: Page;
}

const ValidRoute = (props: ValidRouteProps) => <Route {...props} />;

const Router = () => (
    <Switch>
        <ValidRoute
            exact={true}
            path={Page.Root}
            component={Informasjonstavle}
            key="informasjonstavle"
        />
        <ValidRoute
            exact={true}
            path={Page.Dokumentasjon}
            component={Dokumentasjon}
            key="dokumentasjon"
        />
        <ValidRoute exact={true} path={Page.HvaSøkerDu} component={HvaSøkerDu} key="hva-soker-du" />
        <ValidRoute
            exact={true}
            path={Page.SøkSvangerskapspenger}
            component={SøkSvangerskapspenger}
            key="svangerskapspenger"
        />
        <ValidRoute exact={true} path={Page.HvorMye} component={Kalkulator} key="kalkulator" />
        <ValidRoute
            exact={true}
            path={Page.OmEngangsstønad}
            component={OmEngangsstønad}
            key="om-engangsstonad"
        />
        <ValidRoute
            exact={true}
            path={Page.OmForeldrepenger}
            component={OmForeldrepenger}
            key="om-foreldrepenger"
        />
        <ValidRoute
            exact={true}
            path={Page.SøkeOmForelderpenger}
            component={SøkForeldrepenger}
            key="soke-om-foreldrepenger"
        />
        <ValidRoute
            exact={true}
            path={Page.Regelendringer}
            component={Regelendringer}
            key="regelendringer"
        />
        <ValidRoute
            exact={true}
            path={Page.OmSvangerskapspenger}
            component={OmSvangerskapspenger}
            key="om-svangerskapspenger"
        />
        <Redirect to="/" />
    </Switch>
);

export default withRouter(Router);
