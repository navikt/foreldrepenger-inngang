import * as React from 'react';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import ButtonPanel from './button-panel/ButtonPanel';
import translate, { Language } from '../../intl/translate';
import externalUrls from '../../utils/externalUrls';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../utils/getContent';
import { withLang } from '../../intl/intl-context';

const Svangerskapspenger = ({ parentCls, lang }: { parentCls: any; lang: Language }) => {
    return (
        <PanelMedTittel title={translate('svangerskapspenger')}>
            <StrukturertTekst tekst={getContent('hva-vil-du-søke-om/svangerskapspenger', lang)} />
            <div className={parentCls.element('filler')} />
            <ButtonPanel
                parentCls={parentCls}
                buttonText={translate('hva_søker_du.søk_svangerskapspenger')}
                buttonUrl={externalUrls.søk_svangerskapspenger}
                linkText={translate('hva_søker_du.ingen_elektronisk_id')}
                linkUrl={externalUrls.søk_svangerskapspenger}
                helpText="<Placeholder>"
            />
        </PanelMedTittel>
    );
};

export default withLang(Svangerskapspenger);
