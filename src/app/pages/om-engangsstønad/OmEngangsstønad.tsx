import * as React from 'react';

import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../utils/bem';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Environment from 'app/Environment';
import getTranslation from 'app/utils/i18nUtils';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import Hjelp from '../../components/hjelpe-seksjon/HjelpeSeksjon';
import HvaKanDuFå from './HvaKanDuFå';
import HvemKanFåEngangsstønad from './hvem-kan-få-engangsstønad/HvemKanFåEngangsstønad';
import MedInnholdsfortegnelse from '../infosider/MedInnholdsfortegnelse';
import NårBlirPengeneUtbetalt from './NårBlirPengeneUtbetalt';
import NårKanDuSøke from './når-kan-du-søke/NårKanDuSøke';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import TilFarEllerMedmor from './TilFarEllerMedmor';
import '../infosider/infosider.less';

const infosiderCls = BEMHelper('infosider');

interface Props {
    location: any;
}

export type EngangsstonadSection =
    | 'hvem-kan-fa-engangsstonad'
    | 'hva-kan-du-fa'
    | 'nar-kan-du-soke'
    | 'nar-blir-pengene-utbetalt'
    | 'far-eller-medmor';

export interface EngangsstonadSectionProps {
    id: EngangsstonadSection;
}

const sections: EngangsstonadSection[] = [
    'hvem-kan-fa-engangsstonad',
    'hva-kan-du-fa',
    'nar-kan-du-soke',
    'nar-blir-pengene-utbetalt',
    'far-eller-medmor'
];

const OmEngangsstonad: React.StatelessComponent<Props & InjectedIntlProps> = ({
    location,
    intl
}) => {
    return (
        <div className={infosiderCls.block}>
            <HeaderInformasjon
                title="Om engangsstønad"
                description="Hvis du venter barn og ikke hatt inntekt det siste året, kan du få en engangssum fra NAV."
                siteUrl="https://familie.nav.no/om-engangsstonad"
            />
            <Sidebanner text={getTranslation('om_engangsstønad.tittel', intl)} />
            <MedInnholdsfortegnelse
                sections={sections}
                button={{
                    label: getTranslation('innholdsfortegnelse.søk_nå', intl),
                    url: Environment.SOK_ENGANGSSTONAD_URL
                }}>
                <article className={infosiderCls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <HvemKanFåEngangsstønad id={sections[0]} />
                    <HvaKanDuFå id={sections[1]} />
                    <NårKanDuSøke id={sections[2]} />
                    <NårBlirPengeneUtbetalt id={sections[3]} />
                    <TilFarEllerMedmor id={sections[4]} />
                    <Hjelp />
                </article>
            </MedInnholdsfortegnelse>
        </div>
    );
};

export default injectIntl(OmEngangsstonad);
