import React, { StatelessComponent } from 'react';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getContent } from '../../../utils/getContent';

const inntektSvg = require('../../../assets/ark/ark-hatt-inntekt.svg').default;

interface Props {
    id: string;
}

const JegHarHattInntekt: StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('jeg_har_hatt_inntekt', lang)}
            svg={inntektSvg}>
            <StrukturertTekst tekst={getContent('all-informasjon/jeg-har-hatt-inntekt', lang)} />
        </PanelMedIllustrasjon>
    );
};

export default withIntl(JegHarHattInntekt);
