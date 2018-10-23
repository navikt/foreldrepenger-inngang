import * as React from 'react';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import ButtonPanel from './button-panel/ButtonPanel';
import { getTranslation, Language, withIntl } from '../../intl/intl';
import externalUrls from '../../utils/externalUrls';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../utils/getContent';

const Svangerskapspenger = ({ parentCls, lang }: { parentCls: any; lang: Language }) => {
    return (
        <PanelMedTittel title={getTranslation('svangerskapspenger', lang)}>
            <StrukturertTekst tekst={getContent('hva-vil-du-søke-om/svangerskapspenger', lang)} />
            <ButtonPanel
                externalLink={false}
                parentCls={parentCls}
                buttonText={getTranslation('hva_søker_du.søk_svangerskapspenger', lang)}
                buttonUrl="/hva-soker-du/svangerskapspenger"
                linkText={getTranslation('hva_søker_du.ingen_elektronisk_id', lang)}
                linkUrl={externalUrls.søk_svangerskapspenger}
                helpText={getTranslation('hva_søker_du.ingen_elektronisk_id_hjelp', lang)}
            />
        </PanelMedTittel>
    );
};

export default withIntl(Svangerskapspenger);
