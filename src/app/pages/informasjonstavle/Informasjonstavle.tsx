import React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';

import translate from '../../intl/translate';
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
                <div role="main" className={cls.element('content')}>
                    <Bildelenker />
                    <MerInformasjon />
                    <AndreLenker />
                </div>
            </div>
        </div>
    );
};

const Bildelenker = () => {
    return (
        <div role="navigation" className={cls.element('bildepaneler')}>
            <PanelMedBilde
                svgName="jente-med-imac"
                title={translate('informasjonstavle.hva_har_du_rett_på')}
                urlIsExternal={false}
                url="/#">
                <Tekstomrade>{translate('informasjonstavle.hva_har_du_rett_på_body')}</Tekstomrade>
            </PanelMedBilde>
            <PanelMedBilde
                svgName="se-over-søknad"
                title={translate('informasjonstavle.hvor_lenge_kan_du_få_permisjon')}
                urlIsExternal={true}
                url={externalUrls.foreldrepengeplanlegger}>
                <Tekstomrade>
                    {translate('informasjonstavle.hvor_lenge_kan_du_få_permisjon_body')}
                </Tekstomrade>
            </PanelMedBilde>
            <PanelMedBilde
                svgName="fylle-ut-søknad"
                title={translate('informasjonstavle.gå_rett_til_søknaden')}
                urlIsExternal={false}
                url="/hva-soker-du">
                <Tekstomrade>
                    {translate('informasjonstavle.gå_rett_til_søknaden_body')}
                </Tekstomrade>
            </PanelMedBilde>
        </div>
    );
};

export default Informasjonstavle;
