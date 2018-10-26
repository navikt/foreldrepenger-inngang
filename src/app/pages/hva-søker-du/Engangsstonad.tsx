import * as React from 'react';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';

import ButtonPanel from './button-panel/ButtonPanel';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import { getTranslation, Language, withIntl } from '../../intl/intl';
import { getContent } from '../../utils/getContent';
import Environment from '../../Environment';

const Engangsstonad = ({ parentCls, lang }: { parentCls: any; lang: Language }) => {
    return (
        <PanelMedTittel title={getTranslation('engangsstønad', lang)}>
            <StrukturertTekst tekst={getContent('hva-vil-du-søke-om/engangsstønad', lang)} />
            <ButtonPanel
                externalLink={true}
                parentCls={parentCls}
                buttonText={getTranslation('hva_søker_du.søk_engangsstønad', lang)}
                buttonUrl={Environment.SOK_ENGANGSSTONAD_URL}
                linkText={getTranslation('hva_søker_du.søke_som_far_eller_medmor', lang)}
                linkUrl={Environment.SOK_ENGANGSSTONAD_PAPIR_URL}
                helpText={getTranslation('hva_søker_du.søke_som_far_eller_medmor_hjelp', lang)}
            />
        </PanelMedTittel>
    );
};

export default withIntl(Engangsstonad);
