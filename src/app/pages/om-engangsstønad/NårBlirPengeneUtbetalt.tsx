import * as React from 'react';
import { getContent } from 'app/utils/getContent';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import getTranslation from 'app/utils/i18nUtils';

const utbetalingSvg = require('../../assets/ark/ark-frister.svg').default;

const NårBlirPengeneUtbetalt: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => (
    <PanelMedIllustrasjon
        id={'nar-blir-pengene-utbetalt'}
        title={getTranslation('om_engangsstønad.utbetaling.tittel', intl)}
        svg={utbetalingSvg}>
        <StrukturertTekst tekst={getContent('om-engangsstønad/utbetaling', intl)} />
    </PanelMedIllustrasjon>
);

export default injectIntl(NårBlirPengeneUtbetalt);
