import * as React from 'react';
import { EngangsstonadSectionProps } from './OmEngangsstønad';
import { ENGANGSSUM_PER_BARN } from '../../utils/beregningUtils';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';

const arbeidstakerSvg = require('../../assets/ark/ark-beregning.svg').default;

type Props = EngangsstonadSectionProps & InjectedIntlProps;

const HvaKanDuFå: React.StatelessComponent<Props> = ({ id, intl }) => (
    <PanelMedIllustrasjon
        id={id}
        title={getTranslation('om_engangsstønad.hva_kan_du_få.tittel', intl)}
        svg={arbeidstakerSvg}>
        <Innhold
            source={getSource('om-engangsstønad/hva-kan-du-få', intl)}
            values={{
                ENGANGSSUM_PER_BARN: ENGANGSSUM_PER_BARN.toLocaleString(intl.locale)
            }}
        />
    </PanelMedIllustrasjon>
);

export default injectIntl(HvaKanDuFå);
