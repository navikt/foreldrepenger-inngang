import * as React from 'react';
import { EngangsstonadSectionProps } from './OmEngangsstønad';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';

const farSvg = require('../../assets/ark/ark-far-og-medmor.svg').default;

type Props = EngangsstonadSectionProps & InjectedIntlProps;

const TilFarEllerMedmor: React.StatelessComponent<Props> = ({ id, intl }) => (
    <PanelMedIllustrasjon
        id={id}
        title={getTranslation('om_engangsstønad.til_far.tittel', intl)}
        svg={farSvg}>
        <Innhold source={getSource('om-engangsstønad/far-eller-medmor', intl)} />
    </PanelMedIllustrasjon>
);

export default injectIntl(TilFarEllerMedmor);
