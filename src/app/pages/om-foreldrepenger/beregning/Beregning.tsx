import * as React from 'react';
import { FrilanserIkon } from './ikoner/FrilanserIkon';
import { getGrunnbeløpet } from 'app/utils/beregningUtils';
import { injectIntl, InjectedIntlProps, InjectedIntl } from 'react-intl';
import { Innholdsfane } from '../../../components/innholdsfaner/fane/Fane';
import ArbeidstakerIkon from './ikoner/ArbeidstakerIkon';
import BEMHelper from '../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import PoliceOfficerIkon from './ikoner/PoliceOfficerIkon';
import SelvstendigIkon from './ikoner/SelvstendigIkon';
import YtelseFraNavIkon from './ikoner/YtelseFraNavIkon';
import './beregning.less';
import FiskerIkon from './ikoner/FiskerIkon';

const beregningSvg = require('../../../assets/ark/ark-beregning.svg').default;
const cls = BEMHelper('beregning');

const getTabs = (intl: InjectedIntl): Innholdsfane[] => [
  {
    label: 'om_foreldrepenger.beregning.arbeidstaker',
    icon: <ArbeidstakerIkon />,
    component: <Innhold source={getSource('om-foreldrepenger/beregning/arbeidstaker', intl)} />
  },
  {
    label: 'om_foreldrepenger.beregning.selvstendig',
    icon: <SelvstendigIkon />,
    component: <Innhold source={getSource('om-foreldrepenger/beregning/selvstendig', intl)} />
  },
  {
    label: 'om_foreldrepenger.beregning.fisker',
    icon: <FiskerIkon />,
    component: <Innhold source={getSource('om-foreldrepenger/beregning/fisker', intl)} />
  },
  {
    label: 'om_foreldrepenger.beregning.frilanser.ikontittel',
    icon: <FrilanserIkon />,
    component: <Innhold source={getSource('om-foreldrepenger/beregning/frilanser', intl)} />
  },
  {
    label: 'om_foreldrepenger.beregning.harYtelse',
    icon: <YtelseFraNavIkon />,
    component: <Innhold source={getSource('om-foreldrepenger/beregning/har-ytelser', intl)} />
  },
  {
    label: 'om_foreldrepenger.beregning.andreInntektskilder',
    icon: <PoliceOfficerIkon />,
    component: (
      <Innhold
        source={getSource('om-foreldrepenger/beregning/andre-inntekskilder', intl)}
        values={{
          treGangerGrunnbeløpet: (getGrunnbeløpet() * 3).toLocaleString(intl.locale)
        }}
      />
    )
  }
];

interface Props {
  id: string;
}

const Beregning: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
  return (
    <PanelMedIllustrasjon
      className={cls.block}
      id={id}
      title={getTranslation('om_foreldrepenger.beregning.tittel', intl)}
      svg={beregningSvg}>
      <Innhold
        source={getSource('om-foreldrepenger/beregning/beregning', intl)}
        values={{
          seksG: (getGrunnbeløpet() * 6).toLocaleString(intl.locale)
        }}
      />
      <Innholdsfaner tabs={getTabs(intl)} />
    </PanelMedIllustrasjon>
  );
};

export default injectIntl(Beregning);
