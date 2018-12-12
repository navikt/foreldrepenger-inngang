import * as React from 'react';
import { getContent } from '../../../utils/getContent';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import { Innholdsfane } from '../../../components/innholdsfaner/fane/Fane';
import Arbeidstaker from './innhold/Arbeidstaker';
import ArbeidstakerIkon from './ikoner/ArbeidstakerIkon';
import BEMHelper from '../../../utils/bem';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import PoliceOfficerIkon from './ikoner/PoliceOfficerIkon';
import SelvstendigIkon from './ikoner/SelvstendigIkon';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import YtelseFraNavIkon from './ikoner/YtelseFraNavIkon';
import './beregning.less';

import Selvstendig from './innhold/Selvstendig';
import HarYtelser from './innhold/HarYtelser';
import AndreInntekskilder from './innhold/AndreInntekskilder';

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

const section = 'beregning';

interface Props {
    id: string;
}

const Beregning: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            className={cls.className}
            id={id}
            title={getTranslation('om_foreldrepenger.beregning.tittel', lang)}
            svg={beregningSvg}>
            <StrukturertTekst tekst={getContent('om-foreldrepenger/beregning/beregning', lang)} />
            <Innholdsfaner tabs={tabs} section={section} />
        </PanelMedIllustrasjon>
    );
};

export default withIntl(Beregning);
