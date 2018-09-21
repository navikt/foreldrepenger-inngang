import * as React from 'react';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import ButtonPanel from './button-panel/ButtonPanel';
import translate from '../../utils/translate';
import externalUrls from '../../utils/externalUrls';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';

const content = require('../../../content/hva-vil-du-søke-om.svangerskapspenger.json');

const Svangerskapspenger = ({ parentCls }: { parentCls: any }) => {
    return (
        <PanelMedTittel title={translate('svangerskapspenger')}>
            <StrukturertTekst tekst={content} />
            <div className={parentCls.element('filler--small')} />
            <ButtonPanel
                parentCls={parentCls}
                buttonText={translate('søk_svangerskapspenger')}
                buttonUrl={externalUrls.søk_svangerskapspenger}
                linkText={translate('ingen_elektronisk_id')}
                linkUrl={externalUrls.søk_svangerskapspenger}
                helpText="<Placeholder>"
            />
        </PanelMedTittel>
    );
};

export default Svangerskapspenger;
