import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import BEMHelper from '../../../utils/bem';
import translate, { Language } from '../../../intl/translate';
import CustomSVG from '../../../utils/CustomSVG';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import LesMer from '../../../components/les-mer/LesMer';
import { withLang } from '../../../intl/intl-context';
import { getContent } from '../../../utils/getContent';

const pageSvg = require('../../../assets/page.svg').default;
const cls = BEMHelper('jegVilJobbe');
const barn = require('../../../assets/barn/barn1.svg').default;

const barnetErInnlagt = 'all-informasjon/sykdom/barnet-er-innlagt/barnet-er-innlagt';
const barnetErInnlagtForts =
    'all-informasjon/sykdom/barnet-er-innlagt/barnet-er-innlagt-fortsettelse';
const barnetErInnlagtUtsette = 'all-informasjon/sykdom/barnet-er-innlagt/utsette';

const syke = 'all-informasjon/sykdom/en-av-foreldrene-er-syke/en-av-foreldrene-er-syke';
const sykeUtsette = 'all-informasjon/sykdom/en-av-foreldrene-er-syke/utsette';
const sykeOverta = 'all-informasjon/sykdom/en-av-foreldrene-er-syke/overta';

const BarnetErInnlagt = withLang(({ lang }: { lang: Language }) => (
    <div>
        <StrukturertTekst tekst={getContent(barnetErInnlagt, lang)} />
        <LesMer intro={translate('om_foreldrepenger.sykdom.innlagt.utsette')}>
            <StrukturertTekst tekst={getContent(barnetErInnlagtUtsette, lang)} />
        </LesMer>
        <StrukturertTekst tekst={getContent(barnetErInnlagtForts, lang)} />
    </div>
));

const EnAvForeldreneErSyke = withLang(({ lang }: { lang: Language }) => (
    <div>
        <StrukturertTekst tekst={getContent(syke, lang)} />
        <LesMer intro={translate('om_foreldrepenger.sykdom.innlagt.utsette')}>
            <StrukturertTekst tekst={getContent(sykeUtsette, lang)} />
        </LesMer>
        <LesMer intro={translate('om_foreldrepenger.sykdom.innlagt.overta')}>
            <StrukturertTekst tekst={getContent(sykeOverta, lang)} />
        </LesMer>
    </div>
));

const tabs = [
    {
        label: 'om_foreldrepenger.sykdom.innlagt',
        component: <BarnetErInnlagt />,
        icon: <CustomSVG iconRef={barn} size={48} />
    },
    {
        label: 'om_foreldrepenger.sykdom.foreldre_syke',
        component: <EnAvForeldreneErSyke />,
        icon: <Foreldrepar firstParent="far1" secondParent="mor1" />
    }
];

const Sykdom = ({ id, lang }: { id: string; lang: Language }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            className={cls.className}
            svg={pageSvg}
            title={translate('om_foreldrepenger.sykdom.tittel')}>
            <Innholdsfaner tabs={tabs} />
        </PanelMedIllustrasjon>
    );
};

export default withLang(Sykdom);
