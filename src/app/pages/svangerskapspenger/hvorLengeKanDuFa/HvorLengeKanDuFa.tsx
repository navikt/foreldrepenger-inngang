import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import getTranslation from '../../../utils/i18nUtils';
import Innhold, { getSource } from '../../../utils/innhold/Innhold';

const seksjonsbilde = require('../../../assets/ark/ark-info.svg').default;

interface Props {
    id: string;
}

const HvorLengeKanDuFa: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_svangerskapspenger.hvorLengeKanDuFa.tittel', intl)}
            svg={seksjonsbilde}>
            <Innhold
                source={getSource(
                    'svangerskapspenger/hvor-lenge-kan-du-fa/hvor-lenge-kan-du-fa',
                    intl
                )}
            />
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(HvorLengeKanDuFa);
