import * as React from 'react';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';

import ButtonPanel from './button-panel/ButtonPanel';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import translate, { Language } from '../../intl/translate';
import externalUrls from '../../utils/externalUrls';
import { getContent } from '../../utils/getContent';
import { withLang } from '../../intl/intl-context';

const Engangsstonad = ({ parentCls, lang }: { parentCls: any; lang: Language }) => {
    return (
        <PanelMedTittel title={translate('engangsstønad')}>
            <StrukturertTekst tekst={getContent('hva-vil-du-søke-om/engangsstønad', lang)} />
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

export default withLang(Engangsstonad);
