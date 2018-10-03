import * as React from 'react';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';

import ButtonPanel from './button-panel/ButtonPanel';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import translate from '../../intl/translate';
import externalUrls from '../../utils/externalUrls';

const content = require('../../../content/hva-vil-du-søke-om/engangsstønad.json');

const Engangsstonad = ({ parentCls }: { parentCls: any }) => {
    return (
        <PanelMedTittel title={translate('engangsstønad')}>
            <StrukturertTekst tekst={content} />
            <div className={parentCls.element('filler')} />
            <ButtonPanel
                parentCls={parentCls}
                buttonText={translate('hva_søker_du.søk_engangsstønad')}
                buttonUrl={externalUrls.søk_foreldrepenger_eller_engangsstønad}
                linkText={translate('hva_søker_du.ingen_elektronisk_id')}
                linkUrl={externalUrls.søk_foreldrepenger_eller_engangsstønad_papir}
                helpText="Skaff deg elektronisk ID nå!"
            />
        </PanelMedTittel>
    );
};

export default Engangsstonad;
