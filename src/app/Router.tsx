import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Dokumentasjon from './pages/dokumentasjon/Dokumentasjon';
import HvaSøkerDu from './pages/hva-søker-du/HvaSøkerDu';
import Informasjonstavle from './pages/informasjonstavle/Informasjonstavle';
import Regelendringer from './pages/regelendringer/Regelendringer';
import OmSvangerskapspenger from './pages/svangerskapspenger/OmSvangerskapspenger';
import SøkForeldrepenger from './pages/søk-foreldrepenger/SøkForeldrepenger';
import Veiviser from './pages/veiviser/Veiviser';
import { Page } from './types/Page';

const RedirectUrl: React.FunctionComponent<{ url: string }> = ({ url }) => {
    React.useEffect(() => {
        window.location.href = url;
    }, [url]);

    return <h5>Redirecting...</h5>;
};

const Router = () => (
    <Routes>
        <Route path={Page.Root} element={<Informasjonstavle />} />
        <Route path={Page.Dokumentasjon} element={<Dokumentasjon />} />
        <Route path={Page.HvaSøkerDu} element={<HvaSøkerDu />} />
        <Route
            path={Page.HvorMye}
            element={<RedirectUrl url="https://www.nav.no/foreldrepenger/veivisere/hvor-mye" />}
        />
        <Route path={Page.SøkeOmForeldrepenger} element={<SøkForeldrepenger />} />
        <Route path={Page.Regelendringer} element={<Regelendringer />} />
        <Route path={Page.OmSvangerskapspenger} element={<OmSvangerskapspenger />} />
        <Route path={Page.Veiviser} element={<Veiviser />} />
        <Route path="/*" element={<Navigate to={Page.Root} key="redirect" />} />
    </Routes>
);

export default Router;
