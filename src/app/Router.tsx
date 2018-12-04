import * as React from 'react';
import { Route, Redirect, Switch, withRouter, RouteProps } from 'react-router-dom';
import Informasjonstavle from './pages/informasjonstavle/Informasjonstavle';
import HvaSøkerDu from './pages/hva-søker-du/HvaSøkerDu';
import SøkSvangerskapspenger from './pages/søk-svangerskapspenger/SøkSvangerskapspenger';
import OmForeldrepenger from './pages/om-foreldrepenger/OmForeldrepenger';
import OmEngangsstønad from './pages/om-engangsstønad/OmEngangsstønad';
import ViktigeFrister from './pages/viktige-frister/ViktigeFrister';
import NyeBeregningsregler from './pages/nye-beregningsregler/NyeBeregningsregler';
import Kalkulator from './pages/kalkulator/Kalkulator';
import Veiviser from './pages/veiviser/Veiviser';
import { ValidPath } from './utils/validPath';

interface ValidRouteProps extends RouteProps {
    path?: ValidPath;
}

const ValidRoute = (props: ValidRouteProps) => <Route {...props} />;

const Router = () => (
    <Switch>
        <ValidRoute exact={true} path="/" component={Informasjonstavle} key="informasjonstavle" />
        <ValidRoute exact={true} path="/hvor-mye" component={Kalkulator} key="kalkulator" />
        <ValidRoute exact={true} path="/hva-soker-du" component={HvaSøkerDu} key="hva-soker-du" />
        <ValidRoute
            exact={true}
            path="/hva-soker-du/svangerskapspenger"
            component={SøkSvangerskapspenger}
            key="svangerskapspenger"
        />
        <ValidRoute
            exact={true}
            path="/om-foreldrepenger"
            component={OmForeldrepenger}
            key="om-foreldrepenger"
        />
        <ValidRoute
            exact={true}
            path="/om-foreldrepenger/nye-beregningsregler"
            component={NyeBeregningsregler}
            key="nye-beregningsregler"
        />
        <ValidRoute
            exact={true}
            path="/om-engangsstonad"
            component={OmEngangsstønad}
            key="om-engangsstonad"
        />
        <ValidRoute
            exact={true}
            path="/viktige-frister"
            component={ViktigeFrister}
            key="viktige-frister"
        />

        <ValidRoute exact={true} path="/veiviser" component={Veiviser} key="veiviser" />

        <Redirect to="/" />
    </Switch>
);

export default withRouter(Router);
