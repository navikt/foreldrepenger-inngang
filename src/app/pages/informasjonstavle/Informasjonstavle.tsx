import React from 'react';
import { useIntl } from 'react-intl';
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
import { getSøknadsurl } from '../../utils/externalUrls';
import NyttLovverk from './nytt-lovverk/NyttLovverk';
import IkkeEnighetLovverk from './ikke-enighet-lovverk/IkkeEnighetLovverk';

const cls = BEMHelper('informasjonstavle');
const velgSkjemaIcon = require('../../assets/icons/brev.svg').default;

const Informasjonstavle: React.StatelessComponent = () => {
    const intl = useIntl();
    return (
        <div className={cls.block}>
            <InformasjonstavleHeader />
            <Header />
            <div className={cls.element('body')}>
                <div role="main" className={cls.element('content')}>
                    <NyttLovverk />
                    <IkkeEnighetLovverk />
                    <Bildelenker />
                    <LangtPanelMedBilde
                        svg={velgSkjemaIcon}
                        title={getTranslation('informasjonstavle.velg_søknadsskjema.tittel', intl)}
                        body={getTranslation('informasjonstavle.velg_søknadsskjema.ingress', intl)}
                        url={Page.HvaSøkerDu}
                    />
                    <Subheader text={getTranslation('informasjonstavle.mer_informasjon.tittel', intl)} />
                    <MerInformasjon />
                    <Subheader text={getTranslation('informasjonstavle.andre_lenker.tittel', intl)} />
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

const Bildelenker = () => {
    const intl = useIntl();

    return (
        <nav className={cls.element('bildepaneler')}>
            <PanelMedBilde
                svgName="hva-skjer-når"
                title={getTranslation('informasjonstavle.hva_kan_du_få', intl)}
                urlIsExternal={false}
                url={Page.SøkeOmForeldrepenger}
            >
                <Tekstomrade>{getTranslation('informasjonstavle.hva_kan_du_få_ingress', intl)}</Tekstomrade>
            </PanelMedBilde>

            <PanelMedBilde
                svgName="hvor-lenge"
                title={getTranslation('informasjonstavle.hvor_lenge', intl)}
                urlIsExternal={true}
                url={getSøknadsurl('planleggeren')}
            >
                <Tekstomrade>{getTranslation('informasjonstavle.hvor_lenge_ingress', intl)}</Tekstomrade>
            </PanelMedBilde>

            <PanelMedBilde
                svgName="hvor-mye"
                title={getTranslation('informasjonstavle.hvor_mye', intl)}
                urlIsExternal={false}
                url={Page.HvorMye}
            >
                <Tekstomrade>{getTranslation('informasjonstavle.hvor_mye_ingress', intl)}</Tekstomrade>
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

export default Informasjonstavle;
