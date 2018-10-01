import * as React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import NårKanDuFåEngangsstønad from './når-kan-du-få-engangsstønad/NårKanDuFåEngangsstønad';
import '../infosider.less';
import './omEngangsstønad.less';

const infosiderCls = BEMHelper('infosider');
const cls = BEMHelper('omEngangsstønad');

interface Props {
    location: any;
}

const pageSvg = require('../../assets/page.svg').default;

const hvaErEngangsstønadContent = require('../../../content/om-engangsstønad/hva-er-engangsstønad/hva-er-engangsstønad');
const utbetalingContent = require('../../../content/om-engangsstønad/utbetaling');
const søknadsfristContent = require('../../../content/om-engangsstønad/søknadsfrist');
const engangssumContent = require('../../../content/om-engangsstønad/hva-er-engangsstønad/engangssum');
const utbetalingShortContent = require('../../../content/om-engangsstønad/hva-er-engangsstønad/utbetaling');

const OmEngangsstonad: React.StatelessComponent<Props> = ({ location }) => {
    return (
        <div className={infosiderCls.className}>
            <Sidebanner text={translate('all_informasjon_engangsstønad')} />
            <div className={infosiderCls.element('body')}>
                <div className={infosiderCls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <HvaErEngangsstønad />
                    <NårKanDuFåEngangsstønad />
                    <Utbetaling />
                    <Søknadsfrist />
                </div>
            </div>
        </div>
    );
};

const HvaErEngangsstønad = () => (
    <PanelMedIllustrasjon
        title={translate('hva_er_engangsstønad')}
        svg={pageSvg}>
        <StrukturertTekst tekst={hvaErEngangsstønadContent} />
        <div className={cls.element('kravContainer')}>
            <div className={cls.element('krav')}>
                <StrukturertTekst tekst={engangssumContent} />
            </div>
            <div className={cls.element('krav')}>
                <StrukturertTekst tekst={utbetalingShortContent} />
            </div>
        </div>
    </PanelMedIllustrasjon>
);

const Utbetaling = () => (
    <PanelMedIllustrasjon title={translate('utbetaling')} svg={pageSvg}>
        <StrukturertTekst tekst={utbetalingContent} />
    </PanelMedIllustrasjon>
);

const Søknadsfrist = () => (
    <PanelMedIllustrasjon title={translate('søknadsfrist')} svg={pageSvg}>
        <StrukturertTekst tekst={søknadsfristContent} />
    </PanelMedIllustrasjon>
);

export default OmEngangsstonad;
