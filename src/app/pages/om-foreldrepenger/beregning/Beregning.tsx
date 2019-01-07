import * as React from 'react';
import { FrilanserIkon } from './ikoner/FrilanserIkon';

import { getGrunnbeløpet } from 'app/utils/beregningUtils';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Innholdsfane } from '../../../components/innholdsfaner/fane/Fane';
import AndreInntekskilder from './innhold/AndreInntekskilder';
import Arbeidstaker from './innhold/Arbeidstaker';
import ArbeidstakerIkon from './ikoner/ArbeidstakerIkon';
import BEMHelper from '../../../utils/bem';
import Frilanser from './innhold/Frilanser';
import getTranslation from 'app/utils/i18nUtils';
import HarYtelser from './innhold/HarYtelser';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import PoliceOfficerIkon from './ikoner/PoliceOfficerIkon';
import Selvstendig from './innhold/Selvstendig';
import SelvstendigIkon from './ikoner/SelvstendigIkon';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import YtelseFraNavIkon from './ikoner/YtelseFraNavIkon';
import './beregning.less';

const beregningSvg = require('../../../assets/ark/ark-beregning.svg').default;
const cls = BEMHelper('beregning');

const tabs: Innholdsfane[] = [
    {
        label: 'om_foreldrepenger.beregning.arbeidstaker',
        icon: <ArbeidstakerIkon />,
        component: <Arbeidstaker />
    },
    {
        label: 'om_foreldrepenger.beregning.selvstendig',
        icon: <SelvstendigIkon />,
        component: <Selvstendig />
    },
    {
        label: 'om_foreldrepenger.beregning.frilanser.ikontittel',
        icon: <FrilanserIkon />,
        component: <Frilanser />
    },
    {
        label: 'om_foreldrepenger.beregning.harYtelse',
        icon: <YtelseFraNavIkon />,
        component: <HarYtelser />
    },
    {
        label: 'om_foreldrepenger.beregning.andreInntektskilder',
        icon: <PoliceOfficerIkon />,
        component: <AndreInntekskilder />
    }
];

interface Props {
    id: string;
}

const Beregning: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            className={cls.className}
            id={id}
            title={getTranslation('om_foreldrepenger.beregning.tittel', intl)}
            svg={beregningSvg}>
            <Innhold
                source={getSource('om-foreldrepenger/beregning/beregning', intl)}
                values={{
                    seksG: (getGrunnbeløpet() * 6).toLocaleString(intl.locale)
                }}
            />
            <Innholdsfaner tabs={tabs} />
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(Beregning);
