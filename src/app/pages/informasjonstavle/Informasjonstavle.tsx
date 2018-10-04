import React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';

import translate from '../../utils/translate';
import BEMHelper from '../../utils/bem';
import externalUrls from '../../utils/externalUrls';

import PanelMedBilde from '../../components/panel-med-bilde/PanelMedBilde';
import Header from './header/Header';
import MerInformasjon from './mer-informasjon/MerInformasjon';
import AndreLenker from './andre-lenker/AndreLenker';
import './informasjonstavle.less';

const cls = BEMHelper('informasjonstavle');

const Informasjonstavle = () => {
    return (
        <div className={cls.className}>
            <Header />
            <div className={cls.element('body')}>
                <main className={cls.element('content')}>
                    <Bildelenker />
                    <MerInformasjon />
                    <AndreLenker />
                </main>
            </div>
        </div>
    );
};

const Bildelenker = () => {
    return (
        <nav className={cls.element('bildepaneler')}>
            <PanelMedBilde
                svgName="jente-med-imac"
                title={translate('hva_har_du_rett_på')}
                urlIsExternal={false}
                url="/#">
                <Tekstomrade>
                    {translate('Hva_har_du_rett_på_body')}
                </Tekstomrade>
            </PanelMedBilde>
            <PanelMedBilde
                svgName="se-over-søknad"
                title={translate('hvor_lenge_kan_du_få_permisjon')}
                urlIsExternal={true}
                url={externalUrls.foreldrepengeplanlegger}>
                <Tekstomrade>
                    {translate('hvor_lenge_kan_du_få_permisjon_body')}
                </Tekstomrade>
            </PanelMedBilde>
            <PanelMedBilde
                svgName="fylle-ut-søknad"
                title={translate('gå_rett_til_søknaden')}
                urlIsExternal={false}
                url="/hva-soker-du">
                <Tekstomrade>
                    {translate('gå_rett_til_søknaden_body')}
                </Tekstomrade>
            </PanelMedBilde>
        </nav>
    );
};

export default Informasjonstavle;
