import React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import { withIntl, IntlProps, getTranslation } from '../../intl/intl';
import BEMHelper from '../../utils/bem';
import externalUrls from '../../utils/externalUrls';
import PanelMedBilde from '../../components/panel-med-bilde/PanelMedBilde';
import Header from './header/Header';
import MerInformasjon from './mer-informasjon/MerInformasjon';
import AndreLenker from './andre-lenker/AndreLenker';
import { StatelessComponent } from 'enzyme';
import UnderProduksjon from './UnderProduksjon';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import './informasjonstavle.less';

const cls = BEMHelper('informasjonstavle');

const Informasjonstavle = () => {
    return (
        <div className={cls.className}>
            <InformasjonstavleHeader />
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

const BildelenkerWithoutIntl: StatelessComponent<IntlProps> = ({ lang }) => {
    return (
        <nav className={cls.element('bildepaneler')}>
            <PanelMedBilde
                svgName="hender-sjekkliste"
                title={getTranslation('informasjonstavle.hva_har_du_rett_på', lang)}
                urlIsExternal={false}
                url="/under-arbeid"
                underArbeid={<UnderProduksjon group={'_mainTable'} />}
                disabled={true}
                stopSign={true}>
                <Tekstomrade>
                    {getTranslation('informasjonstavle.hva_har_du_rett_på_body', lang)}
                </Tekstomrade>
            </PanelMedBilde>

            <PanelMedBilde
                svgName="illustration"
                title={getTranslation('informasjonstavle.hvor_lenge_kan_du_få_permisjon', lang)}
                urlIsExternal={true}
                bypassNavlab={true}
                url={externalUrls.foreldrepengeplanlegger}>
                <Tekstomrade>
                    {getTranslation('informasjonstavle.hvor_lenge_kan_du_få_permisjon_body', lang)}
                </Tekstomrade>
            </PanelMedBilde>

            <PanelMedBilde
                svgName="fylle-ut-søknad"
                title={getTranslation('informasjonstavle.gå_rett_til_søknaden', lang)}
                urlIsExternal={false}
                url="/hva-soker-du"
                disabled={false}
                stopSign={false}>
                <Tekstomrade>
                    {getTranslation('informasjonstavle.gå_rett_til_søknaden_body', lang)}
                </Tekstomrade>
            </PanelMedBilde>
        </nav>
    );
};

const InformasjonstavleHeader = () => {
    return (
        <HeaderInformasjon
            title={'Foreldrepengesidene - www.nav.no'}
            siteDescription={'Foreldrepengesidene til nav.no'}
            propTitle={'Foreldrepengesidene til nav.no'}
            propDescription={'Forsiden for foreldrepenger, engangsstønad og svangerskapspenger'}
            imageUrl={'/dist/assets/tmp_forsiden.png'}
            siteUrl={'https://familie.nav.no'}
            imageLargeUrl={'/dist/assets/tmp_forsiden-large.png'}
        />
    );
};

const Bildelenker = withIntl(BildelenkerWithoutIntl);

export default Informasjonstavle;
