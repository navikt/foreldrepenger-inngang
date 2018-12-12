import * as React from 'react';
import { ENGANGSSUM_PER_BARN } from '../../utils/beregningUtils';
import { getContent } from 'app/utils/getContent';
import { withIntl, IntlProps, getTranslation } from 'app/intl/intl';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';

const arbeidstakerSvg = require('../../assets/ark/ark-arbeidstaker.svg').default;

const HvaKanDuFå: React.StatelessComponent<IntlProps> = ({ lang }) => (
    <PanelMedIllustrasjon
        id={'hva-kan-du-fa'}
        title={getTranslation('om_engangsstønad.hva_kan_du_få.tittel', lang)}
        svg={arbeidstakerSvg}>
        <StrukturertTekst
            tekst={getContent('om-engangsstønad/hva-kan-du-få', lang)}
            definisjoner={{
                ENGANGSSUM_PER_BARN: ENGANGSSUM_PER_BARN.toLocaleString(lang)
            }}
        />
    </PanelMedIllustrasjon>
);

export default withIntl(HvaKanDuFå);
