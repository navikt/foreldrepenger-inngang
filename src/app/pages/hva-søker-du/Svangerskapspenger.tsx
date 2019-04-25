import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import ButtonPanel from './button-panel/ButtonPanel';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import Environment from '../../Environment';
import UserHelpAlternativ from './user-help-alternativ/UserHelpAlternativ';

const Svangerskapspenger = ({ intl }: InjectedIntlProps) => {
    return (
        <PanelMedTittel title={getTranslation('svangerskapspenger', intl)}>
            <Innhold source={getSource('hva-søker-du/svangerskapspenger', intl)} />
            <ButtonPanel
                button={{
                    text: getTranslation('hva_søker_du.søk_svangerskapspenger', intl),
                    url: Environment.SOK_SVANGERSKAPSPENGER_URL,
                    external: true
                }}
                alternativHelpSection={
                    <UserHelpAlternativ
                        linkText={getTranslation('hva_søker_du.ingen_elektronisk_id', intl)}
                        helpText={getTranslation('hva_søker_du.ingen_elektronisk_id_hjelp', intl)}
                        papirsoknadUrl={Environment.SOK_SVANGERSKAPSPENGER_PAPIR_URL}
                        soknadUrl={Environment.SOK_SVANGERSKAPSPENGER_URL}
                    />
                }
            />
        </PanelMedTittel>
    );
};

export default injectIntl(Svangerskapspenger);
