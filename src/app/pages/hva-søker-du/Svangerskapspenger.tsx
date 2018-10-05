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
            <div className={parentCls.element('filler')} />
            <ButtonPanel
                parentCls={parentCls}
                buttonText={getTranslation('hva_søker_du.søk_svangerskapspenger', lang)}
                buttonUrl={externalUrls.søk_svangerskapspenger}
                linkText={getTranslation('hva_søker_du.ingen_elektronisk_id', lang)}
                linkUrl={externalUrls.søk_svangerskapspenger}
                helpText="<Placeholder>"
            />
        </PanelMedTittel>
    );
};

export default withIntl(Svangerskapspenger);
