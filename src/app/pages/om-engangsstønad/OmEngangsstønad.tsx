import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import BEMHelper from '../../utils/bem';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Environment from 'app/Environment';
import getTranslation from 'app/utils/i18nUtils';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import HvaKanDuFå from './HvaKanDuFå';
import HvemKanFåEngangsstønad from './hvem-kan-få-engangsstønad/HvemKanFåEngangsstønad';
import MedInnholdsfortegnelse from '../infosider/MedInnholdsfortegnelse';
import NårBlirPengeneUtbetalt from './NårBlirPengeneUtbetalt';
import NårKanDuSøke from './når-kan-du-søke/NårKanDuSøke';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import TilFarEllerMedmor from './TilFarEllerMedmor';

import '../infosider/infosider.less';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';

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
    'far-eller-medmor',
];

const OmEngangsstonad: React.StatelessComponent<Props> = ({ location }) => {
    const intl = useIntl();

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
                link={{
                    label: getTranslation('innholdsfortegnelse.regelverk', intl),
                    url: 'https://lovdata.no/nav/folketrygdloven/kap14',
                }}
                button={{
                    label: getTranslation('innholdsfortegnelse.søk_nå', intl),
                    url: Environment.SOK_ENGANGSSTONAD_URL,
                }}
            >
                <article className={infosiderCls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <AlertStripeInfo className={infosiderCls.element('infobanner2021')}>
                        <div style={{ marginBottom: '1rem' }}>
                            <FormattedMessage
                                id="om_engangsstønad.infobanner2021"
                                values={{
                                    strong: (msg: any) => <strong>{msg}</strong>,
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <FormattedMessage id="om_engangsstønad.infobanner2021.sum" />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <FormattedMessage
                                id="om_engangsstønad.infobanner2021.virkning"
                                values={{
                                    strong: (msg: any) => <strong>{msg}</strong>,
                                }}
                            />
                        </div>
                        <div>
                            <FormattedMessage id="om_engangsstønad.infobanner2021.ekstra" />
                        </div>
                    </AlertStripeInfo>
                    <HvemKanFåEngangsstønad id={sections[0]} />
                    <HvaKanDuFå id={sections[1]} />
                    <NårKanDuSøke id={sections[2]} />
                    <NårBlirPengeneUtbetalt id={sections[3]} />
                    <TilFarEllerMedmor id={sections[4]} />
                </article>
            </MedInnholdsfortegnelse>
        </div>
    );
};

export default OmEngangsstonad;
