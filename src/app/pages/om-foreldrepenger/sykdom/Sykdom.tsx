import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import BEMHelper from '../../../utils/bem';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import CustomSVG from '../../../utils/CustomSVG';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import LesMer from '../../../components/les-mer/LesMer';
import { getContent } from '../../../utils/getContent';
import Illustrasjon from './Illustrasjon';
import IllustrasjonMobil from './IllustrasjonMobil';
import { Normaltekst } from 'nav-frontend-typografi';
import './sykdom.less';
import MediaQuery from 'react-responsive';
import getTranslation from 'app/utils/i18nUtils';

const sykdomSvg = require('../../../assets/ark/ark-sykdom.svg').default;
const cls = BEMHelper('sykdom');
const barn = require('../../../assets/barn/barn1.svg').default;

const barnetErInnlagt = 'om-foreldrepenger/sykdom/barnet-er-innlagt/barnet-er-innlagt';
const barnetErInnlagtUtsette = 'om-foreldrepenger/sykdom/barnet-er-innlagt/utsette';

const syke = 'om-foreldrepenger/sykdom/en-av-foreldrene-er-syke/en-av-foreldrene-er-syke';
const sykeUtsette = 'om-foreldrepenger/sykdom/en-av-foreldrene-er-syke/utsette';
const sykeOverta = 'om-foreldrepenger/sykdom/en-av-foreldrene-er-syke/overta';

const BarnetErInnlagtWithoutIntl: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => (
    <div>
        <StrukturertTekst tekst={getContent(barnetErInnlagt, intl)} />
        <div className={cls.element('eksempeltekst')}>
            <Normaltekst>
                {getTranslation('om_foreldrepenger.sykdom.innlagt.eksempeltittel', intl)}
            </Normaltekst>
            <MediaQuery minWidth={576}>
                <Illustrasjon
                    grunnForForlengelse={getTranslation(
                        'om_foreldrepenger.sykdom.barnet_er_innlagt',
                        intl
                    )}
                />
            </MediaQuery>
            <MediaQuery maxWidth={575}>
                <IllustrasjonMobil
                    grunnForForlengelse={getTranslation(
                        'om_foreldrepenger.sykdom.barnet_er_innlagt',
                        intl
                    )}
                />
            </MediaQuery>
        </div>
        <LesMer intro={getTranslation('om_foreldrepenger.sykdom.innlagt.utsette', intl)}>
            <StrukturertTekst tekst={getContent(barnetErInnlagtUtsette, intl)} />
        </LesMer>
    </div>
);

const EnAvForeldreneErSykeWithoutIntl: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => (
    <div>
        <StrukturertTekst tekst={getContent(syke, intl)} />
        <div className={cls.element('eksempeltekst')}>
            <Normaltekst>
                {getTranslation('om_foreldrepenger.sykdom.sykmeldt.eksempeltittel', intl)}
            </Normaltekst>
            <MediaQuery minWidth={576}>
                <Illustrasjon
                    grunnForForlengelse={getTranslation('om_foreldrepenger.sykdom.sykmeldt', intl)}
                />
            </MediaQuery>
            <MediaQuery maxWidth={575}>
                <IllustrasjonMobil
                    grunnForForlengelse={getTranslation('om_foreldrepenger.sykdom.sykmeldt', intl)}
                />
            </MediaQuery>
        </div>
        <LesMer intro={getTranslation('om_foreldrepenger.sykdom.innlagt.utsette', intl)}>
            <StrukturertTekst tekst={getContent(sykeUtsette, intl)} />
        </LesMer>
        <LesMer intro={getTranslation('om_foreldrepenger.sykdom.innlagt.overta', intl)}>
            <StrukturertTekst tekst={getContent(sykeOverta, intl)} />
        </LesMer>
    </div>
);

const BarnetErInnlagt = injectIntl(BarnetErInnlagtWithoutIntl);
const EnAvForeldreneErSyke = injectIntl(EnAvForeldreneErSykeWithoutIntl);

const tabs = [
    {
        label: 'om_foreldrepenger.sykdom.foreldre_syke',
        component: <EnAvForeldreneErSyke />,
        icon: <Foreldrepar firstParent="far1" secondParent="mor1" />
    },
    {
        label: 'om_foreldrepenger.sykdom.innlagt',
        component: <BarnetErInnlagt />,
        icon: <CustomSVG iconRef={barn} size={32} />
    }
];

interface Props {
    id: string;
}

const Sykdom: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            className={cls.className}
            svg={sykdomSvg}
            title={getTranslation('om_foreldrepenger.sykdom.tittel', intl)}>
            <Innholdsfaner tabs={tabs} />
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(Sykdom);
