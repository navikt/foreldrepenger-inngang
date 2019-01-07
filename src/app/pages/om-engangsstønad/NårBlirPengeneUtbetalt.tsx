import * as React from 'react';

import { injectIntl, InjectedIntlProps } from 'react-intl';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import getTranslation from 'app/utils/i18nUtils';

const utbetalingSvg = require('../../assets/ark/ark-frister.svg').default;

const NårBlirPengeneUtbetalt: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => (
    <PanelMedIllustrasjon
        id={'nar-blir-pengene-utbetalt'}
        title={getTranslation('om_engangsstønad.utbetaling.tittel', intl)}
        svg={utbetalingSvg}>
        <Innhold source={getSource('om-engangsstønad/utbetaling', intl)} />
    </PanelMedIllustrasjon>
);

export default injectIntl(NårBlirPengeneUtbetalt);
