import * as React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import { getTranslation, withIntl, IntlProps } from '../../intl/intl';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../utils/getContent';
import CustomSVGFromSprite from '../../utils/CustomSVG';
import { ENGANGSSUM_PER_BARN } from '../../utils/beregningUtils';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import Hjelp from '../../components/hjelpe-seksjon/HjelpeSeksjon';
import '../infosider.less';
import './omEngangsstønad.less';
import classnames from 'classnames';
import MediaQuery from 'react-responsive';
import Innholdsfortegnelse from '../om-foreldrepenger/innholdsfortegnelse/Innholdsfortegnelse';
import Mobilmeny from '../om-foreldrepenger/mobilmeny/Mobilmeny';

const infosiderCls = BEMHelper('infosider');
const cls = BEMHelper('omEngangsstønad');

interface Props {
    location: any;
}

const engangsstønadSvg = require('../../assets/engangsstønad.svg').default;
const arbeidstakerSvg = require('../../assets/ark/ark-arbeidstaker.svg').default;
const utbetalingSvg = require('../../assets/ark/ark-frister.svg').default;
const farSvg = require('../../assets/ark/ark-far.svg').default;
const checkmarkIcon = require('../../assets/icons/checkmark.svg').default;

const hvaErEngangsstønadContent = 'om-engangsstønad/hva-er-engangsstønad/hva-er-engangsstønad';
const engangssumContent = 'om-engangsstønad/hva-er-engangsstønad/krav1';
const utbetalingShortContent = 'om-engangsstønad/hva-er-engangsstønad/krav2';

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
            <OmEngangsstønadHeader />
            <Sidebanner text={getTranslation('om_engangsstønad.tittel', lang)} />
            <div
                className={classnames(
                    infosiderCls.element('container'),
                    infosiderCls.modifier('withSidebar')
                )}>
                <MediaQuery minWidth={1072}>
                    <aside className={infosiderCls.element('sidebar')}>
                        <Innholdsfortegnelse sections={sections} sokUrl={true} />
                    </aside>
                </MediaQuery>
                <MediaQuery maxWidth={1071}>
                    <Mobilmeny sections={sections} />
                </MediaQuery>
                <article className={infosiderCls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <HvaErEngangsstønad />
                    <HvaKanDuFå />
                    <NårBlirPengeneUtbetalt />
                    <EngangsstønadTilFar id="engangsstonad-til-far-eller-medmor" />
                    <Hjelp />
                </article>
            </div>
        </div>
    );
};

const OmEngangsstønadHeader = () => {
    return (
        <HeaderInformasjon
            title="Om engangsstønad"
            description="Hvis du venter barn og ikke hatt inntekt det siste året, kan du få en engangssum fra NAV."
            siteUrl="https://familie.nav.no/om-engangsstonad"
        />
    );
};

const HvaErEngangsstønadW: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <PanelMedIllustrasjon
        id={'hvem-kan-fa-engangsstonad'}
        title={getTranslation('om_engangsstønad.hva_er.tittel', lang)}
        svg={engangsstønadSvg}>
        <StrukturertTekst tekst={getContent(hvaErEngangsstønadContent, lang)} />
        <div className={cls.element('kravContainer')}>
            <div className={cls.element('krav')}>
                <CustomSVGFromSprite iconRef={checkmarkIcon} size={24} />
                <StrukturertTekst tekst={getContent(engangssumContent, lang)} />
            </div>
            <div className={cls.element('krav')}>
                <CustomSVGFromSprite iconRef={checkmarkIcon} size={24} />
                <StrukturertTekst tekst={getContent(utbetalingShortContent, lang)} />
            </div>
        </div>
    </PanelMedIllustrasjon>
);

const HvaKanDuFåW: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <PanelMedIllustrasjon
        id={'hva-kan-du-fa'}
        title={getTranslation('om_engangsstønad.hva_kan_du_få.tittel', lang)}
        svg={arbeidstakerSvg}>
        <StrukturertTekst
            tekst={getContent('om-engangsstønad/hva-kan-du-få', lang)}
            definisjoner={{
                ENGANGSSUM_PER_BARN: ENGANGSSUM_PER_BARN.toLocaleString(lang)
            }}
        />
    </PanelMedIllustrasjon>
);

const NårBlirPengeneUtbetaltW: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <PanelMedIllustrasjon
        id={'nar-blir-pengene-utbetalt'}
        title={getTranslation('om_engangsstønad.utbetaling.tittel', lang)}
        svg={utbetalingSvg}>
        <StrukturertTekst tekst={getContent('om-engangsstønad/utbetaling', lang)} />
    </PanelMedIllustrasjon>
);

const EngangsstønadTilFarW: React.StatelessComponent<IntlProps & { id: string }> = ({
    id,
    lang
}) => (
    <PanelMedIllustrasjon
        id={id}
        title={getTranslation('om_engangsstønad.til_far.tittel', lang)}
        svg={farSvg}>
        <StrukturertTekst tekst={getContent('om-engangsstønad/til-far', lang)} />
    </PanelMedIllustrasjon>
);

const HvaErEngangsstønad = withIntl(HvaErEngangsstønadW);
const HvaKanDuFå = withIntl(HvaKanDuFåW);
const NårBlirPengeneUtbetalt = withIntl(NårBlirPengeneUtbetaltW);
const EngangsstønadTilFar = withIntl(EngangsstønadTilFarW);

export default withIntl(OmEngangsstonad);
