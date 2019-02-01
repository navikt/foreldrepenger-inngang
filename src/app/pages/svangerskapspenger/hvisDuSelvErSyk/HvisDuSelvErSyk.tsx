import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import getTranslation from '../../../utils/i18nUtils';
import Innhold, { getSource } from '../../../utils/innhold/Innhold';

const seksjonsBilde = require('../../../assets/ark/ark-sykdom.svg').default;

interface Props {
    id: string;
}

const HvisDuSelvErSyk: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_svangerskapspenger.hvisDuSelvErSyk.tittel', intl)}
            svg={seksjonsBilde}>
            <Innhold
                source={getSource('svangerskapspenger/hvis-du-selv-er-syk/hvisDuSelvErSyk', intl)}
            />
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(HvisDuSelvErSyk);
