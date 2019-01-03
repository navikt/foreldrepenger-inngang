import * as React from 'react';
import { ENGANGSSUM_PER_BARN } from '../../utils/beregningUtils';
import { getContent } from 'app/utils/getContent';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import getTranslation from 'app/utils/i18nUtils';

const arbeidstakerSvg = require('../../assets/ark/ark-arbeidstaker.svg').default;

const HvaKanDuFå: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => (
    <PanelMedIllustrasjon
        id={'hva-kan-du-fa'}
        title={getTranslation('om_engangsstønad.hva_kan_du_få.tittel', intl)}
        svg={arbeidstakerSvg}>
        <StrukturertTekst
            tekst={getContent('om-engangsstønad/hva-kan-du-få', intl)}
            definisjoner={{
                ENGANGSSUM_PER_BARN: ENGANGSSUM_PER_BARN.toLocaleString(intl.locale)
            }}
        />
    </PanelMedIllustrasjon>
);

export default injectIntl(HvaKanDuFå);
