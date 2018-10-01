import React, { StatelessComponent } from 'react';
import translate from '../../../utils/translate';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';

const content = require('../../../../content/all-informasjon/jeg-har-hatt-inntekt.json');

const pageSvg = require('../../../assets/page.svg').default;

interface Props {
    id: string;
}

const JegHarHattInntekt: StatelessComponent<Props> = ({ id }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={translate('jeg_har_hatt_inntekt')}
            svg={pageSvg}>
            <StrukturertTekst tekst={content} />
        </PanelMedIllustrasjon>
    );
};

export default JegHarHattInntekt;
