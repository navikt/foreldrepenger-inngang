import * as React from 'react';
import { getContent } from 'app/utils/getContent';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';

const farSvg = require('../../assets/ark/ark-far-og-medmor.svg').default;

interface OwnProps {
    id: string;
}

const TilFarEllerMedmor: React.StatelessComponent<InjectedIntlProps & OwnProps> = ({
    id,
    intl
}) => (
    <PanelMedIllustrasjon
        id={id}
        title={getTranslation('om_engangsstønad.til_far.tittel', intl)}
        svg={farSvg}>
        <StrukturertTekst tekst={getContent('om-engangsstønad/til-far', intl)} />
    </PanelMedIllustrasjon>
);

export default injectIntl(TilFarEllerMedmor);
