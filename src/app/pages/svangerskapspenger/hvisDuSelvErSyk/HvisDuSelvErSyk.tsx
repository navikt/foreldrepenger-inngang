import React from 'react';
import { useIntl } from 'react-intl';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import getTranslation from '../../../utils/i18nUtils';
import Innhold, { getSource } from '../../../utils/innhold/Innhold';

const seksjonsBilde = require('../../../assets/ark/ark-sykdom.svg').default;

interface Props {
    id: string;
}

const HvisDuSelvErSyk: React.FunctionComponent<Props> = ({ id }) => {
    const intl = useIntl();

    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_svangerskapspenger.hvisDuSelvErSyk.tittel', intl)}
            svg={seksjonsBilde}
        >
            <Innhold source={getSource('svangerskapspenger/hvis-du-selv-er-syk/hvis-du-selv-er-syk', intl)} />
        </PanelMedIllustrasjon>
    );
};

export default HvisDuSelvErSyk;
