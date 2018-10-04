import * as React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate, { Language } from '../../intl/translate';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import NårKanDuFåEngangsstønad from './når-kan-du-få-engangsstønad/NårKanDuFåEngangsstønad';
import '../infosider.less';
import './omEngangsstønad.less';
import { getContent } from '../../utils/getContent';
import { withLang } from '../../intl/intl-context';

const infosiderCls = BEMHelper('infosider');
const cls = BEMHelper('omEngangsstønad');

interface Props {
    location: any;
}

const pageSvg = require('../../assets/page.svg').default;

const hvaErEngangsstønadContent = 'om-engangsstønad/hva-er-engangsstønad/hva-er-engangsstønad';
const utbetalingContent = 'om-engangsstønad/utbetaling';
const søknadsfristContent = 'om-engangsstønad/søknadsfrist';
const engangssumContent = 'om-engangsstønad/hva-er-engangsstønad/engangssum';
const utbetalingShortContent = 'om-engangsstønad/hva-er-engangsstønad/utbetaling';

const OmEngangsstonad: React.StatelessComponent<Props> = ({ location }) => {
    return (
        <div className={infosiderCls.className}>
            <Sidebanner text={translate('om_engangsstønad.tittel')} />
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

const HvaErEngangsstønad = withLang(({ lang }: { lang: Language }) => (
    <PanelMedIllustrasjon title={translate('om_engangsstønad.hva_er.tittel')} svg={pageSvg}>
        <StrukturertTekst tekst={getContent(hvaErEngangsstønadContent, lang)} />
        <div className={cls.element('kravContainer')}>
            <div className={cls.element('krav')}>
                <StrukturertTekst tekst={getContent(engangssumContent, lang)} />
            </div>
            <div className={cls.element('krav')}>
                <StrukturertTekst tekst={getContent(utbetalingShortContent, lang)} />
            </div>
        </div>
    </PanelMedIllustrasjon>
));

const Utbetaling = withLang(({ lang }: { lang: Language }) => (
    <PanelMedIllustrasjon title={translate('utbetaling')} svg={pageSvg}>
        <StrukturertTekst tekst={getContent(utbetalingContent, lang)} />
    </PanelMedIllustrasjon>
));

const Søknadsfrist = withLang(({ lang }: { lang: Language }) => (
    <PanelMedIllustrasjon title={translate('søknadsfrist')} svg={pageSvg}>
        <StrukturertTekst tekst={getContent(søknadsfristContent, lang)} />
    </PanelMedIllustrasjon>
));

export default withLang(OmEngangsstonad);
