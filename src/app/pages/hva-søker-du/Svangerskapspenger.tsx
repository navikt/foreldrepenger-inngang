import * as React from 'react';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import ButtonPanel from './button-panel/ButtonPanel';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../utils/getContent';
import getTranslation from 'app/utils/i18nUtils';

const Svangerskapspenger = ({ intl }: InjectedIntlProps) => {
    return (
        <PanelMedTittel title={getTranslation('svangerskapspenger', intl)}>
            <StrukturertTekst tekst={getContent('hva-søker-du/svangerskapspenger', intl)} />
            <ButtonPanel
                button={{
                    text: getTranslation('hva_søker_du.søk_svangerskapspenger', intl),
                    url: '/hva-soker-du/svangerskapspenger'
                }}
            />
        </PanelMedTittel>
    );
};

export default injectIntl(Svangerskapspenger);
