import React from 'react';
import { injectIntl, InjectedIntlProps, InjectedIntl } from 'react-intl';
import { StatelessComponent } from 'enzyme';
import { Undertittel } from 'nav-frontend-typografi';
import AndreLenker from './andre-lenker/AndreLenker';
import BEMHelper from '../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import Header from './header/Header';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import LangtPanelMedBilde from '../../components/langt-panel-med-bilde/LangtPanelMedBilde';
import MerInformasjon from './mer-informasjon/MerInformasjon';
import PanelMedBilde from '../../components/panel-med-bilde/PanelMedBilde';
import Tekstomrade from 'nav-frontend-tekstomrade';
import './informasjonstavle.less';
import { Page } from 'app/types/Page';

const cls = BEMHelper('informasjonstavle');
const velgSkjemaIcon = require('../../assets/icons/brev.svg').default;

const Informasjonstavle: StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <div className={cls.block}>
            <InformasjonstavleHeader />
            <Header />
            <div className={cls.element('body')}>
                <div role="main" className={cls.element('content')}>
                    <Bildelenker intl={intl} />
                    <LangtPanelMedBilde
                        svg={velgSkjemaIcon}
                        title={getTranslation('informasjonstavle.velg_søknadsskjema.tittel', intl)}
                        body={getTranslation('informasjonstavle.velg_søknadsskjema.ingress', intl)}
                        url={Page.HvaSøkerDu}
                    />
                    <Subheader
                        text={getTranslation('informasjonstavle.mer_informasjon.tittel', intl)}
                    />
                    <MerInformasjon />
                    <Subheader
                        text={getTranslation('informasjonstavle.andre_lenker.tittel', intl)}
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

const Bildelenker = ({ intl }: { intl: InjectedIntl }) => {
    return (
        <nav className={cls.element('bildepaneler')}>
            <PanelMedBilde
                svgName="veiviser"
                title={getTranslation('informasjonstavle.hva_kan_du_få', intl)}
                urlIsExternal={false}
                url={Page.Veiviser}>
                <Tekstomrade>
                    {getTranslation('informasjonstavle.hva_kan_du_få_ingress', intl)}
                </Tekstomrade>
            </PanelMedBilde>

            <PanelMedBilde
                svgName="hvor-lenge"
                title={getTranslation('informasjonstavle.hvor_lenge', intl)}
                urlIsExternal={true}
                url="https://tjenester.nav.no/foreldrepengeplanlegger">
                <Tekstomrade>
                    {getTranslation('informasjonstavle.hvor_lenge_ingress', intl)}
                </Tekstomrade>
            </PanelMedBilde>

            <PanelMedBilde
                svgName="hvor-mye"
                title={getTranslation('informasjonstavle.hvor_mye', intl)}
                urlIsExternal={false}
                url={Page.HvorMye}>
                <Tekstomrade>
                    {getTranslation('informasjonstavle.hvor_mye_ingress', intl)}
                </Tekstomrade>
            </PanelMedBilde>
        </nav>
    );
};

const InformasjonstavleHeader = () => {
    return (
        <HeaderInformasjon
            title="Foreldrepenger"
            description="Foreldrepenger skal sikre deg inntekt når du ha foreldrepermisjon. Hvis du ikke hatt inntekt, kan du få en engangssum isteden."
            siteUrl="https://familie.nav.no"
        />
    );
};

export default injectIntl(Informasjonstavle);
