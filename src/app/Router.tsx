import * as React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Page } from './types/Page';
import Dokumentasjon from './pages/dokumentasjon/Dokumentasjon';
import HvaSøkerDu from './pages/hva-søker-du/HvaSøkerDu';
import Informasjonstavle from './pages/informasjonstavle/Informasjonstavle';
import Kalkulator from './pages/kalkulator/Kalkulator';
import OmSvangerskapspenger from './pages/svangerskapspenger/OmSvangerskapspenger';
import Regelendringer from './pages/regelendringer/Regelendringer';
import SøkForeldrepenger from './pages/søk-foreldrepenger/SøkForeldrepenger';
import Veiviser from './pages/veiviser/Veiviser';

const Router = () => (
    <Routes>
        <Route path={Page.Root} element={<Informasjonstavle />} />
        <Route path={Page.Dokumentasjon} element={<Dokumentasjon />} />
        <Route path={Page.HvaSøkerDu} element={<HvaSøkerDu />} />
        <Route path={Page.HvorMye} element={<Kalkulator />} />
        <Route path={Page.SøkeOmForeldrepenger} element={<SøkForeldrepenger />} />
        <Route path={Page.Regelendringer} element={<Regelendringer />} />
        <Route path={Page.OmSvangerskapspenger} element={<OmSvangerskapspenger />} />
        <Route path={Page.Veiviser} element={<Veiviser />} />
        <Route path="/" element={<Navigate to={Page.Root} key="redirect" />} />
    </Routes>
);

export default Router;
