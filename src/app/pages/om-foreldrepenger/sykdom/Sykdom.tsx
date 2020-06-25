import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import BEMHelper from '../../../utils/bem';
import CustomSVG from '../../../utils/CustomSVG';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import getTranslation from 'app/utils/i18nUtils';
import Illustrasjon from './Illustrasjon';
import IllustrasjonMobil from './IllustrasjonMobil';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import LesMer from '../../../components/les-mer/LesMer';
import MediaQuery from 'react-responsive';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import './sykdom.less';

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
        <Innhold className="blokk-m" source={getSource(barnetErInnlagt, intl)} />
        <div className={cls.element('eksempeltekst')}>
            <Normaltekst>{getTranslation('om_foreldrepenger.sykdom.innlagt.eksempeltittel', intl)}</Normaltekst>
            <MediaQuery minWidth={576}>
                <Illustrasjon
                    grunnForForlengelse={getTranslation('om_foreldrepenger.sykdom.barnet_er_innlagt', intl)}
                />
            </MediaQuery>
            <MediaQuery maxWidth={575}>
                <IllustrasjonMobil
                    grunnForForlengelse={getTranslation('om_foreldrepenger.sykdom.barnet_er_innlagt', intl)}
                />
            </MediaQuery>
        </div>
        <LesMer intro={getTranslation('om_foreldrepenger.sykdom.innlagt.utsette', intl)}>
            <Innhold source={getSource(barnetErInnlagtUtsette, intl)} />
        </LesMer>
    </div>
);

const EnAvForeldreneErSykeWithoutIntl: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => (
    <div>
        <Innhold className="blokk-m" source={getSource(syke, intl)} />
        <div className={cls.element('eksempeltekst')}>
            <Normaltekst>{getTranslation('om_foreldrepenger.sykdom.sykmeldt.eksempeltittel', intl)}</Normaltekst>
            <MediaQuery minWidth={576}>
                <Illustrasjon grunnForForlengelse={getTranslation('om_foreldrepenger.sykdom.sykmeldt', intl)} />
            </MediaQuery>
            <MediaQuery maxWidth={575}>
                <IllustrasjonMobil grunnForForlengelse={getTranslation('om_foreldrepenger.sykdom.sykmeldt', intl)} />
            </MediaQuery>
        </div>
        <LesMer intro={getTranslation('om_foreldrepenger.sykdom.innlagt.utsette', intl)}>
            <Innhold source={getSource(sykeUtsette, intl)} />
        </LesMer>
        <LesMer intro={getTranslation('om_foreldrepenger.sykdom.innlagt.overta', intl)}>
            <Innhold source={getSource(sykeOverta, intl)} />
        </LesMer>
    </div>
);

const BarnetErInnlagt = injectIntl(BarnetErInnlagtWithoutIntl);
const EnAvForeldreneErSyke = injectIntl(EnAvForeldreneErSykeWithoutIntl);

const BabyWrapper = () => (
    <div className={cls.element('babyWrapper')}>
        <CustomSVG iconRef={barn} size={32} />
    </div>
);

const tabs = [
    {
        label: 'om_foreldrepenger.sykdom.foreldre_syke',
        component: <EnAvForeldreneErSyke />,
        icon: <Foreldrepar firstParent="far1" secondParent="mor1" />
    },
    {
        label: 'om_foreldrepenger.sykdom.innlagt',
        component: <BarnetErInnlagt />,
        icon: <BabyWrapper />
    }
];

interface Props {
    id: string;
}

const Sykdom: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            className={cls.block}
            svg={sykdomSvg}
            title={getTranslation('om_foreldrepenger.sykdom.tittel', intl)}
        >
            <Innholdsfaner tabs={tabs} />
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(Sykdom);
