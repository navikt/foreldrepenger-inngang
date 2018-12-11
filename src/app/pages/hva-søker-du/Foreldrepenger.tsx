import React, { StatelessComponent } from 'react';
import { getContent } from '../../utils/getContent';
import { getTranslation, withIntl, Language } from '../../intl/intl';
import ButtonPanel from './button-panel/ButtonPanel';
import Environment from 'app/Environment';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';

interface ForeldrepengerProps {
    lang: Language;
}

const Foreldrepenger: StatelessComponent<ForeldrepengerProps> = ({ lang }) => {
    return (
        <PanelMedTittel title={getTranslation('foreldrepenger', lang)}>
            <StrukturertTekst tekst={getContent('hva-søker-du/foreldrepenger', lang)} />
            <ButtonPanel
                button={{
                    text: getTranslation('hva_søker_du.søk_foreldrepenger', lang),
                    url: Environment.SOK_FORELDREPENGER_URL,
                    external: true
                }}
                secondButton={{
                    text: getTranslation('hva_søker_du.ettersend_vedlegg', lang),
                    url: Environment.SOK_FORELDREPENGER_URL,
                    external: true
                }}
                helpSection={{
                    linkText: getTranslation('hva_søker_du.ingen_elektronisk_id', lang),
                    linkUrl: Environment.SOK_FORELDREPENGER_PAPIR_URL,
                    helpText: getTranslation('hva_søker_du.ingen_elektronisk_id_hjelp', lang)
                }}
            />
        </PanelMedTittel>
    );
};

export default withIntl(Foreldrepenger);
