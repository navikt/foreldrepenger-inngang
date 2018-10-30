import * as React from 'react';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';

import ButtonPanel from './button-panel/ButtonPanel';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import { getTranslation, Language, withIntl } from '../../intl/intl';
import { getContent } from '../../utils/getContent';
import Environment from '../../Environment';
import PopUpModal from './modal/PopUpModal';

const Engangsstonad = ({ parentCls, lang }: { parentCls: any; lang: Language }) => {
    return (
        <PanelMedTittel title={getTranslation('engangsstønad', lang)}>
            <StrukturertTekst tekst={getContent('hva-vil-du-søke-om/engangsstønad', lang)} />
            <PopUpModal modalIsOpen={false} />
            <ButtonPanel
                externalLink={true}
                parentCls={parentCls}
                buttonText={getTranslation('hva_søker_du.søk_engangsstønad', lang)}
                buttonUrl={Environment.SOK_ENGANGSSTONAD_URL}
                linkText={getTranslation('hva_søker_du.ingen_elektronisk_id', lang)}
                linkUrl={Environment.SOK_ENGANGSSTONAD_PAPIR_URL}
                helpText={getTranslation('hva_søker_du.ingen_elektronisk_id_hjelp', lang)}
            />
        </PanelMedTittel>
    );
};

export default withIntl(Engangsstonad);
