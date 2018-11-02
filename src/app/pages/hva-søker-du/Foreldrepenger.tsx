import React, { StatelessComponent } from 'react';
import KnappBase from 'nav-frontend-knapper';
import { withRouter } from 'react-router-dom';

import UserHelp from './user-help/UserHelp';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import { getTranslation, withIntl, Language } from '../../intl/intl';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../utils/getContent';
import Environment from 'app/Environment';

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
            <div className={parentCls.element('two-buttons-navigation')}>
                <div className={parentCls.element('button-container')}>
                    <KnappBase
                        className={parentCls.element('knapp')}
                        type="hoved"
                        onClick={() => {
                            history.push('/hva-soker-du/foreldrepenger', lang);
                        }}>
                        {getTranslation('hva_søker_du.søk_foreldrepenger', lang)}
                    </KnappBase>
                    <a tabIndex={-1} href={Environment.ENDRE_SOKNAD_FORELDREPENGER_URL}>
                        <KnappBase className={parentCls.element('knapp')} type="standard">
                            {getTranslation('hva_søker_du.har_søkt_foreldrepenger', lang)}
                        </KnappBase>
                    </a>
                </div>
                <UserHelp
                    linkText={getTranslation('hva_søker_du.ingen_elektronisk_id', lang)}
                    linkUrl={Environment.SOK_FORELDREPENGER_PAPIR_URL}
                    helpText={getTranslation('hva_søker_du.ingen_elektronisk_id_hjelp', lang)}
                />
            </div>
        </PanelMedTittel>
    );
};

export default withIntl(withRouter(Foreldrepenger));
