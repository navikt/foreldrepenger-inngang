import React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import { withIntl, IntlProps, getTranslation, Language } from '../../intl/intl';
import BEMHelper from '../../utils/bem';
import PanelMedBilde from '../../components/panel-med-bilde/PanelMedBilde';
import LangtPanelMedBilde from '../../components/langt-panel-med-bilde/LangtPanelMedBilde';
import Header from './header/Header';
import MerInformasjon from './mer-informasjon/MerInformasjon';
import AndreLenker from './andre-lenker/AndreLenker';
import { StatelessComponent } from 'enzyme';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import './informasjonstavle.less';
import { Undertittel } from 'nav-frontend-typografi';

const cls = BEMHelper('informasjonstavle');
const velgSkjemaIcon = require('../../assets/icons/brev.svg').default;

const Informasjonstavle: StatelessComponent<IntlProps> = ({ lang }) => {
    return (
        <div className={cls.className}>
            <InformasjonstavleHeader />
            <Header />
            <div className={cls.element('body')}>
                <div role="main" className={cls.element('content')}>
                    <Bildelenker lang={lang} />
                    <LangtPanelMedBilde
                        svg={velgSkjemaIcon}
                        title={getTranslation('informasjonstavle.velg_søknadsskjema.tittel', lang)}
                        body={getTranslation('informasjonstavle.velg_søknadsskjema.ingress', lang)}
                        url="/hva-soker-du"
                    />
                    <Subheader
                        text={getTranslation('informasjonstavle.mer_informasjon.tittel', lang)}
                    />
                    <MerInformasjon />
                    <Subheader
                        text={getTranslation('informasjonstavle.andre_lenker.tittel', lang)}
                    />
                    <AndreLenker />
                </div>
            </div>
        </div>
    );
};

const Subheader = ({ text }: { text: string }) => (
    <div className={cls.element('subheader')}>
        <Undertittel>{text}</Undertittel>
    </div>
);

const Bildelenker = ({ lang }: { lang: Language }) => {
    return (
        <nav className={cls.element('bildepaneler')}>
            <PanelMedBilde
                svgName="veiviser"
                title={getTranslation('informasjonstavle.hva_kan_jeg_få', lang)}
                urlIsExternal={false}
                url="/veiviser">
                <Tekstomrade>
                    {getTranslation('informasjonstavle.hva_kan_jeg_få_ingress', lang)}
                </Tekstomrade>
            </PanelMedBilde>

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
        </nav>
    );
};

const InformasjonstavleHeader = () => {
    return (
        <HeaderInformasjon
            title={'Foreldrepenger - www.nav.no'}
            siteDescription={
                'Foreldrepenger skal sikre deg inntekt når du ha foreldrepermisjon. Hvis du ikke hatt inntekt, kan du få en engangssum isteden.'
            }
            propTitle={'Foreldrepengesidene til nav.no'}
            propDescription={
                'Foreldrepenger skal sikre deg inntekt når du ha foreldrepermisjon. Hvis du ikke hatt inntekt, kan du få en engangssum isteden.'
            }
            siteUrl={'https://familie.nav.no'}
        />
    );
};

export default withIntl(Informasjonstavle);
