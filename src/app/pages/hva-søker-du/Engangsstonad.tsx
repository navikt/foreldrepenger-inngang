import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import ButtonPanel from './button-panel/ButtonPanel';
import Environment from '../../Environment';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import PopUpModal from './modal/PopUpModal';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import UserHelpAlternativ from './user-help-alternativ/UserHelpAlternativ';

const Engangsstonad = ({ intl }: InjectedIntlProps) => {
    return (
        <PanelMedTittel title={getTranslation('engangsstønad', intl)}>
            <Innhold source={getSource('hva-søker-du/engangsstønad', intl)} />
            <PopUpModal modalIsOpen={false} />
            <ButtonPanel
                button={{
                    text: getTranslation('hva_søker_du.søk_engangsstønad', intl),
                    url: Environment.SOK_ENGANGSSTONAD_URL,
                    external: true
                }}
                secondButton={{
                    text: getTranslation('hva_søker_du.ettersend_vedlegg', intl),
                    url: Environment.DINE_FORELDREPENGER_URL,
                    external: true
                }}
                alternativHelpSection={
                    <UserHelpAlternativ
                        linkText={getTranslation('hva_søker_du.ingen_elektronisk_id', intl)}
                        helpText={getTranslation('hva_søker_du.ingen_elektronisk_id_hjelp', intl)}
                        papirsoknadUrl={Environment.SOK_ENGANGSSTONAD_PAPIR_URL}
                        soknadUrl={Environment.SOK_ENGANGSSTONAD_URL}
                    />
                }
            />
        </PanelMedTittel>
    );
};

export default injectIntl(Engangsstonad);
