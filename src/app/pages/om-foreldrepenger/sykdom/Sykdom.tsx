import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import BEMHelper from '../../../utils/bem';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import CustomSVG from '../../../utils/CustomSVG';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import LesMer from '../../../components/les-mer/LesMer';
import { getContent } from '../../../utils/getContent';
import Illustrasjon from './Illustrasjon';
import IllustrasjonMobil from './IllustrasjonMobil';
import TypografiBase from 'nav-frontend-typografi';
import './sykdom.less';
import MediaQuery from 'react-responsive';

const sykdomSvg = require('../../../assets/ark/ark-sykdom.svg').default;
const cls = BEMHelper('sykdom');
const barn = require('../../../assets/barn/barn1.svg').default;

const barnetErInnlagt = 'all-informasjon/sykdom/barnet-er-innlagt/barnet-er-innlagt';
const barnetErInnlagtUtsette = 'all-informasjon/sykdom/barnet-er-innlagt/utsette';

const syke = 'all-informasjon/sykdom/en-av-foreldrene-er-syke/en-av-foreldrene-er-syke';
const sykeUtsette = 'all-informasjon/sykdom/en-av-foreldrene-er-syke/utsette';
const sykeOverta = 'all-informasjon/sykdom/en-av-foreldrene-er-syke/overta';

const BarnetErInnlagtWithoutIntl: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <div>
        <StrukturertTekst tekst={getContent(barnetErInnlagt, lang)} />
        <LesMer intro={getTranslation('om_foreldrepenger.sykdom.innlagt.utsette', lang)}>
            <StrukturertTekst tekst={getContent(barnetErInnlagtUtsette, lang)} />
        </LesMer>
    </div>
);

const EnAvForeldreneErSykeWithoutIntl: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <div>
        <StrukturertTekst tekst={getContent(syke, lang)} />
        <div className={cls.element('eksempeltekst')}>
            <TypografiBase type="normaltekst">
                {getTranslation('om_foreldrepenger.sykdom.innlagt.eksempeltittel')}
            </TypografiBase>
            <MediaQuery query="(min-width: 576px)">
                <Illustrasjon />
            </MediaQuery>
            <MediaQuery query="(max-width: 575px)">
                <IllustrasjonMobil />
            </MediaQuery>
        </div>
        <LesMer intro={getTranslation('om_foreldrepenger.sykdom.innlagt.utsette', lang)}>
            <StrukturertTekst tekst={getContent(sykeUtsette, lang)} />
        </LesMer>
        <LesMer intro={getTranslation('om_foreldrepenger.sykdom.innlagt.overta', lang)}>
            <StrukturertTekst tekst={getContent(sykeOverta, lang)} />
        </LesMer>
    </div>
);

const BarnetErInnlagt = withIntl(BarnetErInnlagtWithoutIntl);
const EnAvForeldreneErSyke = withIntl(EnAvForeldreneErSykeWithoutIntl);

const tabs = [
    {
        label: 'om_foreldrepenger.sykdom.innlagt',
        component: <BarnetErInnlagt />,
        icon: <CustomSVG iconRef={barn} size={32} />
    },
    {
        label: 'om_foreldrepenger.sykdom.foreldre_syke',
        component: <EnAvForeldreneErSyke />,
        icon: <Foreldrepar firstParent="far1" secondParent="mor1" />
    }
];

interface Props {
    id: string;
}

const Sykdom: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            className={cls.className}
            svg={sykdomSvg}
            title={getTranslation('om_foreldrepenger.sykdom.tittel', lang)}>
            <Innholdsfaner tabs={tabs} section={'sykdom'} />
        </PanelMedIllustrasjon>
    );
};

export default withIntl(Sykdom);
