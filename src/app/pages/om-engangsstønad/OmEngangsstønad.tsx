import * as React from 'react';
import { getTranslation, withIntl, IntlProps } from '../../intl/intl';
import BEMHelper from '../../utils/bem';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import Hjelp from '../../components/hjelpe-seksjon/HjelpeSeksjon';
import NårKanDuSøke from './når-kan-du-søke/NårKanDuSøke';
import HvaKanDuFå from './HvaKanDuFå';
import HvemKanFåEngangsstønad from './HvemKanFåEngangsstønad';
import NårBlirPengeneUtbetalt from './NårBlirPengeneUtbetalt';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import TilFarEllerMedmor from './TilFarEllerMedmor';
import '../infosider.less';
import './omEngangsstønad.less';
import classnames from 'classnames';
import MediaQuery from 'react-responsive';
import Innholdsfortegnelse from '../om-foreldrepenger/innholdsfortegnelse/Innholdsfortegnelse';
import Mobilmeny from '../om-foreldrepenger/mobilmeny/Mobilmeny';
import Environment from 'app/Environment';

const infosiderCls = BEMHelper('infosider');

interface Props {
    location: any;
}

export type EngangsstonadSection =
    | 'hvem-kan-fa-engangsstonad'
    | 'hva-kan-du-fa'
    | 'nar-blir-pengene-utbetalt'
    | 'engangsstonad-til-far-eller-medmor';

const sections: EngangsstonadSection[] = [
    'hvem-kan-fa-engangsstonad',
    'hva-kan-du-fa',
    'nar-blir-pengene-utbetalt',
    'engangsstonad-til-far-eller-medmor'
];

const OmEngangsstonad: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div className={infosiderCls.className}>
            <HeaderInformasjon
                title="Om engangsstønad"
                description="Hvis du venter barn og ikke hatt inntekt det siste året, kan du få en engangssum fra NAV."
                siteUrl="https://familie.nav.no/om-engangsstonad"
            />
            <Sidebanner text={getTranslation('om_engangsstønad.tittel', lang)} />
            <div
                className={classnames(
                    infosiderCls.element('container'),
                    infosiderCls.modifier('withSidebar')
                )}>
                <MediaQuery minWidth={1072}>
                    <aside className={infosiderCls.element('sidebar')}>
                        <Innholdsfortegnelse
                            sections={sections}
                            søkeUrl={Environment.SOK_ENGANGSSTONAD_URL}
                        />
                    </aside>
                </MediaQuery>
                <MediaQuery maxWidth={1071}>
                    <Mobilmeny sections={sections} />
                </MediaQuery>
                <article className={infosiderCls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <HvemKanFåEngangsstønad />
                    <HvaKanDuFå />
                    <NårKanDuSøke />
                    <NårBlirPengeneUtbetalt />
                    <TilFarEllerMedmor id="engangsstonad-til-far-eller-medmor" />
                    <Hjelp />
                </article>
            </div>
        </div>
    );
};

export default withIntl(OmEngangsstonad);
