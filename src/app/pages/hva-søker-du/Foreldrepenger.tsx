import React, { StatelessComponent } from 'react';
import { getContent } from '../../utils/getContent';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import ButtonPanel from './button-panel/ButtonPanel';
import Environment from 'app/Environment';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';

const Foreldrepenger: StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <PanelMedTittel title={getTranslation('foreldrepenger', intl)}>
            <StrukturertTekst tekst={getContent('hva-søker-du/foreldrepenger', intl)} />
            <ButtonPanel
                button={{
                    text: getTranslation('hva_søker_du.søk_foreldrepenger', intl),
                    url: Environment.SOK_FORELDREPENGER_URL,
                    external: true
                }}
                secondButton={{
                    text: getTranslation('hva_søker_du.ettersend_vedlegg', intl),
                    url: Environment.SOK_FORELDREPENGER_URL,
                    external: true
                }}
                helpSection={{
                    linkText: getTranslation('hva_søker_du.ingen_elektronisk_id', intl),
                    linkUrl: Environment.SOK_FORELDREPENGER_PAPIR_URL,
                    helpText: getTranslation('hva_søker_du.ingen_elektronisk_id_hjelp', intl)
                }}
            />
        </PanelMedTittel>
    );
};

export default injectIntl(Foreldrepenger);
