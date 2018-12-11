import * as React from 'react';
import { getContent } from 'app/utils/getContent';
import { withIntl, getTranslation, IntlProps } from 'app/intl/intl';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';

const farSvg = require('../../assets/ark/ark-far.svg').default;

interface OwnProps {
    id: string;
}

const TilFarEllerMedmor: React.StatelessComponent<IntlProps & OwnProps> = ({ id, lang }) => (
    <PanelMedIllustrasjon
        id={id}
        title={getTranslation('om_engangsstønad.til_far.tittel', lang)}
        svg={farSvg}>
        <StrukturertTekst tekst={getContent('om-engangsstønad/til-far', lang)} />
    </PanelMedIllustrasjon>
);

export default withIntl(TilFarEllerMedmor);
