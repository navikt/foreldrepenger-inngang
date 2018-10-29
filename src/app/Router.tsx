import * as React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Informasjonstavle from './pages/informasjonstavle/Informasjonstavle';
import HvaSøkerDu from './pages/hva-søker-du/HvaSøkerDu';
import SøkForeldrepenger from './pages/søk-foreldrepenger/SøkForeldrepenger';
import SøkSvangerskapspenger from './pages/søk-svangerskapspenger/SøkSvangerskapspenger';
import OmForeldrepenger from './pages/om-foreldrepenger/OmForeldrepenger';
import OmEngangsstønad from './pages/om-engangsstønad/OmEngangsstønad';
import Blindside from './pages/blindside/Blindside';
import ViktigeFrister from './pages/viktige-frister/ViktigeFrister';
import Veiviser from './pages/veiviser/Veiviser';

const Router = () => (
    <Switch>
        <Route exact={true} path="/" component={Informasjonstavle} key="informasjonstavle" />
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
            path="/om-engangsstonad"
            component={OmEngangsstønad}
            key="om-engangsstonad"
        />
        <Route exact={true} path="/under-arbeid" component={Blindside} key="under-arbeid" />
        <Route
            exact={true}
            path="/viktige-frister"
            component={ViktigeFrister}
            key="viktige-frister"
        />
        <Route exact={true} path="/veiviser" component={Veiviser} key="veiviser" />

        <Redirect to="/" />
    </Switch>
);

export default withRouter(Router);
