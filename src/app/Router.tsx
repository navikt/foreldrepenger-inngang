import * as React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Informasjonstavle from './pages/informasjonstavle/Informasjonstavle';
import HvaSøkerDu from './pages/hva-søker-du/HvaSøkerDu';
import SøkForeldrepenger from './pages/søk-foreldrepenger/SøkForeldrepenger';
import SøkSvangerskapspenger from './pages/søk-svangerskapspenger/SøkSvangerskapspenger';
import OmForeldrepenger from './pages/om-foreldrepenger/OmForeldrepenger';
import OmEngangsstønad from './pages/om-engangsstønad/OmEngangsstønad';
import Dokumentasjon from './pages/dokumentasjon/Dokumentasjon';
import NyeBeregningsregler from './pages/nye-beregningsregler/NyeBeregningsregler';
import Kalkulator from './pages/kalkulator/Kalkulator';
import Veiviser from './pages/veiviser/Veiviser';

const Router = () => (
    <Switch>
        <Route exact={true} path="/" component={Informasjonstavle} key="informasjonstavle" />
        {/*<Route exact={true} path="/tjenester" component={Tjenester} key="tjenester" />*/}
        <Route exact={true} path="/hvor-mye" component={Kalkulator} key="kalkulator" />
        <Route exact={true} path="/hva-soker-du" component={HvaSøkerDu} key="hva-soker-du" />
        <Route
            exact={true}
            path="/hva-soker-du/foreldrepenger"
            component={SøkForeldrepenger}
            key="foreldrepenger"
        />
        <Route
            exact={true}
            path="/hva-soker-du/svangerskapspenger"
            component={SøkSvangerskapspenger}
            key="svangerskapspenger"
        />
        <Route
            exact={true}
            path="/om-foreldrepenger"
            component={OmForeldrepenger}
            key="om-foreldrepenger"
        />
        <Route
            exact={true}
            path="/om-foreldrepenger/nye-beregningsregler"
            component={NyeBeregningsregler}
            key="nye-beregningsregler"
        />
        <Route
            exact={true}
            path="/om-engangsstonad"
            component={OmEngangsstønad}
            key="om-engangsstonad"
        />
        <Route exact={true} path="/dokumentasjon" component={Dokumentasjon} key="dokumentasjon" />
        <Route exact={true} path="/veiviser" component={Veiviser} key="veiviser" />

        <Redirect to="/" />
    </Switch>
);

export default withRouter(Router);
