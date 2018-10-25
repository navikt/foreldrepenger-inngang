import * as React from 'react';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';

import ButtonPanel from './button-panel/ButtonPanel';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import { getTranslation, Language, withIntl } from '../../intl/intl';
import externalUrls from '../../utils/externalUrls';
import { getContent } from '../../utils/getContent';

const Engangsstonad = ({ parentCls, lang }: { parentCls: any; lang: Language }) => {
    return (
        <PanelMedTittel title={getTranslation('engangsstønad', lang)}>
            <StrukturertTekst tekst={getContent('hva-vil-du-søke-om/engangsstønad', lang)} />
            <ButtonPanel
                externalLink={true}
                parentCls={parentCls}
                buttonText={getTranslation('hva_søker_du.søk_engangsstønad', lang)}
                buttonUrl={externalUrls.søk_foreldrepenger_eller_engangsstønad}
                linkText={getTranslation('hva_søker_du.ingen_elektronisk_id', lang)}
                linkUrl={externalUrls.søk_foreldrepenger_eller_engangsstønad_papir}
                helpText={getTranslation('hva_søker_du.ingen_elektronisk_id_hjelp', lang)}
            />
        </PanelMedTittel>
    );
};

export default withIntl(Engangsstonad);
