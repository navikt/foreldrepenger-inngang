import * as React from 'react';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import ButtonPanel from './button-panel/ButtonPanel';
import { getTranslation, Language, withIntl } from '../../intl/intl';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../utils/getContent';

const Svangerskapspenger = ({ lang }: { lang: Language }) => {
    return (
        <PanelMedTittel title={getTranslation('svangerskapspenger', lang)}>
            <StrukturertTekst tekst={getContent('hva-søker-du/svangerskapspenger', lang)} />
            <ButtonPanel
                button={{
                    text: getTranslation('hva_søker_du.søk_svangerskapspenger', lang),
                    url: '/hva-soker-du/svangerskapspenger'
                }}
            />
        </PanelMedTittel>
    );
};

export default withIntl(Svangerskapspenger);
