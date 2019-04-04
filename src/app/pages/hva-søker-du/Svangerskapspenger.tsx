import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Page } from 'app/types/Page';
import ButtonPanel from './button-panel/ButtonPanel';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';

const Svangerskapspenger = ({ intl }: InjectedIntlProps) => {
    return (
        <PanelMedTittel title={getTranslation('svangerskapspenger', intl)}>
            <Innhold source={getSource('hva-søker-du/svangerskapspenger', intl)} />
            <ButtonPanel
                button={{
                    text: getTranslation('hva_søker_du.søk_svangerskapspenger', intl),
                    url: Page.SøkSvangerskapspenger
                }}
            />
        </PanelMedTittel>
    );
};

export default injectIntl(Svangerskapspenger);
