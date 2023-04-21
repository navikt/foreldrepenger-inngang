import * as React from 'react';
import { EngangsstonadSectionProps } from '../OmEngangsstønad';
import { FlexibleSvg } from 'app/utils/CustomSVG';
import { useIntl } from 'react-intl';
import Fact from 'app/components/facts-with-icon/Fact';
import FactsWithIcon from 'app/components/facts-with-icon/FactsWithIcon';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';

const iconSvg = require('../../../assets/ark/ark-frister.svg').default;
const morSvg = require('../../../assets/foreldre/mor2.svg').default;
const adopsjonSvg = require('../../../assets/icons/stork.svg').default;

type Props = EngangsstonadSectionProps;

const NårKanDuSøke: React.FunctionComponent<Props> = ({ id }) => {
    const intl = useIntl();

    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_engangsstønad.når_kan_du_søke.tittel', intl)}
            svg={iconSvg}
        >
            <FactsWithIcon>
                <Fact
                    icon={<FlexibleSvg width={40} height={40} iconRef={morSvg} />}
                    content={getSource('om-engangsstønad/når-kan-du-søke/når-kan-du-søke', intl)}
                />
                <Fact
                    icon={<Foreldrepar firstParent="far4" secondParent="medmor2" />}
                    content={getSource('om-engangsstønad/når-kan-du-søke/far-eller-medmor', intl)}
                />
                <Fact
                    icon={<FlexibleSvg width={40} height={56} iconRef={adopsjonSvg} />}
                    content={getSource('om-engangsstønad/når-kan-du-søke/adopsjon', intl)}
                />
            </FactsWithIcon>
            <Innhold source={getSource('om-engangsstønad/når-kan-du-søke/hvordan-søker-du', intl)} />
        </PanelMedIllustrasjon>
    );
};

export default NårKanDuSøke;
