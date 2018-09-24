import * as React from 'react';
import PanelMedIllustrasjon from '../panel-med-illustrasjon/PanelMedIllustrasjon';
import translate from '../../../utils/translate';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';

const content = require('../../../../content/all-informasjon/jeg-vil-jobbe.json');
const pageSvg = require('../../../assets/page.svg').default;

const JegVilJobbe = ({ id }: { id: string }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={translate('jeg_vil_jobbe')}
            svg={pageSvg}>
            <StrukturertTekst tekst={content} />
        </PanelMedIllustrasjon>
    );
};

export default JegVilJobbe;
