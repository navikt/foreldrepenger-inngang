import React from 'react';

import { useIntl } from 'react-intl';
import ButtonPanel from './button-panel/ButtonPanel';
import Environment from 'app/Environment';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import UserHelpAlternativ from './user-help-alternativ/UserHelpAlternativ';

const Foreldrepenger: React.FunctionComponent = () => {
    const intl = useIntl();

    return (
        <PanelMedTittel title={getTranslation('hva_søker_du.foreldrepenger.tittel', intl)}>
            <Innhold source={getSource('hva-søker-du/foreldrepenger', intl)} />
            <ButtonPanel
                button={{
                    text: getTranslation('hva_søker_du.søk_foreldrepenger', intl),
                    url: Environment.SOK_FORELDREPENGER_URL,
                    external: true,
                }}
                secondButton={{
                    text: getTranslation('hva_søker_du.ettersend_vedlegg', intl),
                    url: Environment.DINE_FORELDREPENGER_URL,
                    external: true,
                }}
                alternativHelpSection={
                    <UserHelpAlternativ
                        linkText={getTranslation('hva_søker_du.ingen_elektronisk_id', intl)}
                        helpText={getTranslation('hva_søker_du.ingen_elektronisk_id_hjelp', intl)}
                        papirsoknadUrl={Environment.SOK_FORELDREPENGER_PAPIR_URL}
                        soknadUrl={Environment.SOK_FORELDREPENGER_URL}
                    />
                }
            />
        </PanelMedTittel>
    );
};

export default Foreldrepenger;
