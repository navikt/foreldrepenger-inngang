import React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import { withIntl, IntlProps, getTranslation } from '../../intl/intl';
import BEMHelper from '../../utils/bem';
import PanelMedBilde from '../../components/panel-med-bilde/PanelMedBilde';
import Header from './header/Header';
import MerInformasjon from './mer-informasjon/MerInformasjon';
import AndreLenker from './andre-lenker/AndreLenker';
import { StatelessComponent } from 'enzyme';
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
                svgName="hvor-mye"
                title={getTranslation('informasjonstavle.hvor_mye', lang)}
                urlIsExternal={false}
                url="/hvor-mye">
                <Tekstomrade>
                    {getTranslation('informasjonstavle.hvor_mye_ingress', lang)}
                </Tekstomrade>
            </PanelMedBilde>

            <PanelMedBilde
                svgName="hvor-lenge"
                title={getTranslation('informasjonstavle.hvor_lenge', lang)}
                urlIsExternal={true}
                url="https://tjenester.nav.no/foreldrepengeplanlegger">
                <Tekstomrade>
                    {getTranslation('informasjonstavle.hvor_lenge_ingress', lang)}
                </Tekstomrade>
            </PanelMedBilde>

            <PanelMedBilde
                svgName="gå-rett-til-søknaden"
                title={getTranslation('informasjonstavle.velg_søknad', lang)}
                urlIsExternal={false}
                url="/hva-soker-du"
                disabled={false}
                stopSign={false}>
                <Tekstomrade>
                    {getTranslation('informasjonstavle.velg_søknad_ingress', lang)}
                </Tekstomrade>
            </PanelMedBilde>
        </nav>
    );
};

const InformasjonstavleHeader = () => {
    return (
        <HeaderInformasjon
            siteDescription={'Foreldrepenger til nav.no'}
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
