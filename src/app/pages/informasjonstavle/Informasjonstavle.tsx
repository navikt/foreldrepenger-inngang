import React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import MediaQuery from 'react-responsive';

import translate from '../../utils/translate';
import BEMHelper from '../../utils/bem';
import externalUrls from '../../utils/externalUrls';

import PanelMedBilde from '../../components/panel-med-bilde/PanelMedBilde';
import Header from './header/Header';
import MerInformasjon from './mer-informasjon/MerInformasjon';
import './informasjonstavle.less';
import Veilederpanel from 'nav-frontend-veilederpanel';
import CustomSVG from '../../utils/CustomSVG';
import KnappBase from 'nav-frontend-knapper';

const cls = BEMHelper('informasjonstavle');

const Informasjonstavle = () => {
    return (
        <div className={cls.className}>
            <Header />
            <div className={cls.element('body')}>
                <MediaQuery minWidth={800}>
                    <VeilederMedInnlogging />
                </MediaQuery>
                <div className={cls.element('content')}>
                    <Bildelenker />
                    <MerInformasjon />
                </div>
            </div>
        </div>
    );
};

const VeilederMedInnlogging = () => {
    const saraSvg = require(`../../assets/sara.svg`).default;
    const sara = <CustomSVG iconRef={saraSvg} size={64} />;

    return (
        <Veilederpanel kompakt={true} svg={sara} fargetema="normal">
            <div className={cls.element('veilederinnhold')}>
                <div>{translate('informasjonstavle_veileder')}</div>
                <KnappBase
                    className={cls.element('veilederknapp')}
                    type="standard">
                    {translate('logg_inn')}
                </KnappBase>
            </div>
        </Veilederpanel>
    );
};

const Bildelenker = () => {
    return (
        <div className={cls.element('bildepaneler')}>
            <PanelMedBilde
                svgName="jente-med-imac"
                title={translate('hva_har_du_rett_på')}
                urlIsExternal={false}
                url="/all-informasjon">
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
        </div>
    );
};

export default Informasjonstavle;
