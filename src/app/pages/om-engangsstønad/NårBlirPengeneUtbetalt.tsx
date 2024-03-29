import * as React from 'react';
import { useIntl } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { EngangsstonadSectionProps } from './OmEngangsstønad';

const utbetalingSvg = require('../../assets/ark/ark-timeglass.svg').default;

type Props = EngangsstonadSectionProps;

const NårBlirPengeneUtbetalt: React.FunctionComponent<Props> = ({ id }) => {
    const intl = useIntl();
    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_engangsstønad.utbetaling.tittel', intl)}
            svg={utbetalingSvg}
        >
            <Innhold source={getSource('om-engangsstønad/utbetaling', intl)} />
        </PanelMedIllustrasjon>
    );
};

export default NårBlirPengeneUtbetalt;
