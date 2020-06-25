import * as React from 'react';
import { useIntl } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';

const hjemmeSamtidigSvg = require('../../../assets/ark/ark-hjemme-samtidig.svg').default;
const ingress = 'om-foreldrepenger/hjemme-samtidig/hjemme-samtidig';

interface Props {
    id: string;
}

const HjemmeSamtidig: React.StatelessComponent<Props> = ({ id }) => {
    const intl = useIntl();

    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.hjemme_samtidig.tittel', intl)}
            svg={hjemmeSamtidigSvg}
        >
            <Innhold source={getSource(ingress, intl)} />
        </PanelMedIllustrasjon>
    );
};

export default HjemmeSamtidig;
