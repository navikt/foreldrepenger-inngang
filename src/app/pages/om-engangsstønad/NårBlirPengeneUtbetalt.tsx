import * as React from 'react';
import { getContent } from 'app/utils/getContent';
import { withIntl, IntlProps, getTranslation } from 'app/intl/intl';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import './omEngangsstønad.less';

const utbetalingSvg = require('../../assets/ark/ark-frister.svg').default;

const NårBlirPengeneUtbetalt: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <PanelMedIllustrasjon
        title={getTranslation('om_engangsstønad.utbetaling.tittel', lang)}
        svg={utbetalingSvg}>
        <StrukturertTekst tekst={getContent('om-engangsstønad/utbetaling', lang)} />
    </PanelMedIllustrasjon>
);

export default withIntl(NårBlirPengeneUtbetalt);
