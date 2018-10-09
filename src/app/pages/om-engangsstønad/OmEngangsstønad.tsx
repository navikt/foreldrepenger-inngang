import * as React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import { getTranslation, withIntl, IntlProps } from '../../intl/intl';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import NårKanDuFåEngangsstønad from './når-kan-du-få-engangsstønad/NårKanDuFåEngangsstønad';
import { getContent } from '../../utils/getContent';
import '../infosider.less';
import './omEngangsstønad.less';
import CustomSVGFromSprite from '../../utils/CustomSVG';

const infosiderCls = BEMHelper('infosider');
const cls = BEMHelper('omEngangsstønad');

interface Props {
    location: any;
}

const engangsstønadSvg = require('../../assets/engangsstønad.svg').default;
const arbeidstakerSvg = require('../../assets/ark/arbeidstaker.svg').default;
const søknadsfristSvg = require('../../assets/ark/frister.svg').default;
const utbetalingSvg = require('../../assets/icons/utbetaling-til-deg.svg').default;
const utbetalingstidSvg = require('../../assets/icons/utbetalingstid.svg').default;

const hvaErEngangsstønadContent = 'om-engangsstønad/hva-er-engangsstønad/hva-er-engangsstønad';
const utbetalingContent = 'om-engangsstønad/utbetaling';
const søknadsfristContent = 'om-engangsstønad/søknadsfrist';
const engangssumContent = 'om-engangsstønad/hva-er-engangsstønad/engangssum';
const utbetalingShortContent = 'om-engangsstønad/hva-er-engangsstønad/utbetaling';

const OmEngangsstonad: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div className={infosiderCls.className}>
            <Sidebanner text={getTranslation('om_engangsstønad.tittel', lang)} />
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

const HvaErEngangsstønadWithoutIntl: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <PanelMedIllustrasjon
        title={getTranslation('om_engangsstønad.hva_er.tittel', lang)}
        svg={engangsstønadSvg}>
        <StrukturertTekst tekst={getContent(hvaErEngangsstønadContent, lang)} />
        <div className={cls.element('kravContainer')}>
            <div className={cls.element('krav')}>
                <CustomSVGFromSprite iconRef={utbetalingSvg} size={32} />
                <StrukturertTekst tekst={getContent(engangssumContent, lang)} />
            </div>
            <div className={cls.element('krav')}>
                <CustomSVGFromSprite iconRef={utbetalingstidSvg} size={32} />
                <StrukturertTekst tekst={getContent(utbetalingShortContent, lang)} />
            </div>
        </div>
    </PanelMedIllustrasjon>
);

const UtbetalingWithoutIntl: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <PanelMedIllustrasjon title={getTranslation('utbetaling', lang)} svg={arbeidstakerSvg}>
        <StrukturertTekst tekst={getContent(utbetalingContent, lang)} />
    </PanelMedIllustrasjon>
);

const SøknadsfristWithoutIntl: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <PanelMedIllustrasjon title={getTranslation('søknadsfrist', lang)} svg={søknadsfristSvg}>
        <StrukturertTekst tekst={getContent(søknadsfristContent, lang)} />
    </PanelMedIllustrasjon>
);

const HvaErEngangsstønad = withIntl(HvaErEngangsstønadWithoutIntl);
const Utbetaling = withIntl(UtbetalingWithoutIntl);
const Søknadsfrist = withIntl(SøknadsfristWithoutIntl);

export default withIntl(OmEngangsstonad);
