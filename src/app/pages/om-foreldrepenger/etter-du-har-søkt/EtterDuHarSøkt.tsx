import * as React from 'react';
import { useIntl } from 'react-intl';

import getTranslation from 'app/utils/i18nUtils';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

const statusSVG = require('../../../assets/ark/ark-saksstatus.svg').default;

interface Props {
    id: string;
}

const EtterDuHarSøkt: React.StatelessComponent<Props> = ({ id }) => {
    const intl = useIntl();

    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.etter_du_har_søkt.tittel', intl)}
            svg={statusSVG}
        >
            <Innhold source={getSource('om-foreldrepenger/etter-du-har-søkt/etter-du-har-søkt', intl)} />
        </PanelMedIllustrasjon>
    );
};

export default EtterDuHarSøkt;
