import React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import { withIntl, IntlProps, getTranslation } from '../../intl/intl';
import BEMHelper from '../../utils/bem';
import externalUrls from '../../utils/externalUrls';

import PanelMedBilde from '../../components/panel-med-bilde/PanelMedBilde';
import Header from './header/Header';
import MerInformasjon from './mer-informasjon/MerInformasjon';
import AndreLenker from './andre-lenker/AndreLenker';
import './informasjonstavle.less';
import { StatelessComponent } from 'enzyme';
import UnderProduksjon from './UnderProduksjon';
import { Helmet } from 'react-helmet';

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

const BildelenkerWithoutIntl: StatelessComponent<IntlProps> = ({ lang }) => {
    return (
        <div>
            <Helmet>
                <title>Foreldrepengesidene - www.nav.no</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Foreldrepengesidene til nav.no" />
                <meta property="og:title" content="Foreldrepengesidene til nav.no" />
                <meta
                    property="og:description"
                    content="Forsiden for foreldrepenger, engangsstønad og svangerskapspenger"
                />
                <meta property="og:image" content="/dist/assets/tmp_forsiden.png" />
                <meta property="og:url" content="https://familie.nav.no" />
                <meta name="twitter:card" content="/dist/assets/tmp_forsiden-large.png" />
            </Helmet>
            <nav className={cls.element('bildepaneler')}>
                <PanelMedBilde
                    svgName="jente-med-imac"
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
                    svgName="se-over-søknad"
                    title={getTranslation('informasjonstavle.hvor_lenge_kan_du_få_permisjon', lang)}
                    urlIsExternal={true}
                    url={externalUrls.foreldrepengeplanlegger}
                    underArbeid={<UnderProduksjon group={'_mainTable'} />}
                    disabled={true}
                    stopSign={true}>
                    <Tekstomrade>
                        {getTranslation(
                            'informasjonstavle.hvor_lenge_kan_du_få_permisjon_body',
                            lang
                        )}
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
        </div>
    );
};

const Bildelenker = withIntl(BildelenkerWithoutIntl);

export default Informasjonstavle;
