import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { EngangsstonadSectionProps } from './OmEngangsstønad';

const utbetalingSvg = require('../../assets/ark/ark-frister.svg').default;

type Props = EngangsstonadSectionProps & InjectedIntlProps;

const NårBlirPengeneUtbetalt: React.StatelessComponent<Props> = ({ id, intl }) => (
    <PanelMedIllustrasjon
        id={id}
        title={getTranslation('om_engangsstønad.utbetaling.tittel', intl)}
        svg={utbetalingSvg}>
        <Innhold source={getSource('om-engangsstønad/utbetaling', intl)} />
    </PanelMedIllustrasjon>
);

export default injectIntl(NårBlirPengeneUtbetalt);
