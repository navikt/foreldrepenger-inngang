import React, { StatelessComponent } from 'react';
import translate, { Language } from '../../../intl/translate';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getContent } from '../../../utils/getContent';
import { withLang } from '../../../intl/intl-context';

const pageSvg = require('../../../assets/page.svg').default;

interface Props {
    id: string;
    lang: Language;
}

const JegHarHattInntekt: StatelessComponent<Props> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon id={id} title={translate('jeg_har_hatt_inntekt')} svg={pageSvg}>
            <StrukturertTekst tekst={getContent('all-informasjon/jeg-har-hatt-inntekt', lang)} />
        </PanelMedIllustrasjon>
    );
};

export default withLang(JegHarHattInntekt);
