import * as React from 'react';
import { getTranslation, withIntl, IntlProps } from '../../intl/intl';
import BEMHelper from '../../utils/bem';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import Hjelp from '../../components/hjelpe-seksjon/HjelpeSeksjon';
import HvaKanDuFå from './HvaKanDuFå';
import HvemKanFåEngangsstønad from './HvemKanFåEngangsstønad';
import NårBlirPengeneUtbetalt from './NårBlirPengeneUtbetalt';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import TilFarEllerMedmor from './TilFarEllerMedmor';
import '../infosider.less';

const infosiderCls = BEMHelper('infosider');

interface Props {
    location: any;
}

const OmEngangsstonad: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div className={infosiderCls.className}>
            <HeaderInformasjon
                title="Om engangsstønad"
                description="Hvis du venter barn og ikke hatt inntekt det siste året, kan du få en engangssum fra NAV."
                siteUrl="https://familie.nav.no/om-engangsstonad"
            />
            <Sidebanner text={getTranslation('om_engangsstønad.tittel', lang)} />
            <div className={infosiderCls.element('container')}>
                <article className={infosiderCls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <HvemKanFåEngangsstønad />
                    <HvaKanDuFå />
                    <NårBlirPengeneUtbetalt />
                    <TilFarEllerMedmor id="far-eller-medmor" />
                    <Hjelp />
                </article>
            </div>
        </div>
    );
};

export default withIntl(OmEngangsstonad);
