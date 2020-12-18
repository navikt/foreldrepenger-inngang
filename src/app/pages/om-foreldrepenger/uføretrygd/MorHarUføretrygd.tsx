import * as React from 'react';
import { useIntl } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';

const adopsjonSvg = require('../../../assets/ark/mor-har-uføretrygd.svg').default;

interface Props {
    id: string;
}

const MorHarUføretrygd: React.FunctionComponent<Props> = ({ id }) => {
    const intl = useIntl();

    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.mor_uføretrygd.tittel', intl)}
            svg={adopsjonSvg}
        >
            <Innhold source={getSource('om-foreldrepenger/uføretrygd/mor_har_uføretrygd', intl)} />
        </PanelMedIllustrasjon>
    );
};

export default MorHarUføretrygd;
