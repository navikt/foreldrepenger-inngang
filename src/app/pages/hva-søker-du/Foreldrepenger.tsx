import React, { StatelessComponent } from 'react';
import { withRouter } from 'react-router-dom';

import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import { getTranslation, withIntl, Language } from '../../intl/intl';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../utils/getContent';
import Environment from 'app/Environment';
import ButtonPanel from './button-panel/ButtonPanel';

interface ForeldrepengerProps {
    parentCls: any;
    history: any;
    location: any;
    match: any;
    lang: Language;
}

const Foreldrepenger: StatelessComponent<ForeldrepengerProps> = ({ parentCls, history, lang }) => {
    return (
        <PanelMedTittel title={getTranslation('foreldrepenger', lang)}>
            <StrukturertTekst tekst={getContent('hva-vil-du-søke-om/foreldrepenger', lang)} />
            <ButtonPanel
                externalLink={true}
                parentCls={parentCls}
                buttonText={getTranslation('hva_søker_du.søk_foreldrepenger', lang)}
                buttonUrl={Environment.SOK_FORELDREPENGER_URL}
                helpSection={{
                    linkText: getTranslation('hva_søker_du.ingen_elektronisk_id', lang),
                    linkUrl: Environment.SOK_FORELDREPENGER_PAPIR_URL,
                    helpText: getTranslation('hva_søker_du.ingen_elektronisk_id_hjelp', lang)
                }}
            />
        </PanelMedTittel>
    );
};

export default withIntl(withRouter(Foreldrepenger));
