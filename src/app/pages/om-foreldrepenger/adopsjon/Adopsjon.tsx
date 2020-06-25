import * as React from 'react';
import { useIntl } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';

const adopsjonSvg = require('../../../assets/ark/ark-adopsjon.svg').default;

interface Props {
    id: string;
}

const Adopjson: React.StatelessComponent<Props> = ({ id }) => {
    const intl = useIntl();

    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.adopsjon.tittel', intl)}
            svg={adopsjonSvg}
        >
            <Innhold source={getSource('om-foreldrepenger/adopsjon/adopsjon', intl)} />
        </PanelMedIllustrasjon>
    );
};

export default Adopjson;
