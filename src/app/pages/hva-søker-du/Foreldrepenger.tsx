import React, { StatelessComponent } from 'react';
import KnappBase from 'nav-frontend-knapper';
import { withRouter } from 'react-router-dom';

import UserHelp from './user-help/UserHelp';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import translate, { Language } from '../../intl/translate';
import externalUrls from '../../utils/externalUrls';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import { withLang } from '../../intl/intl-context';
import { getContent } from '../../utils/getContent';

interface ForeldrepengerProps {
    parentCls: any;
    history: any;
    location: any;
    match: any;
    lang: Language;
}

const Foreldrepenger: StatelessComponent<ForeldrepengerProps> = ({ parentCls, history, lang }) => {
    return (
        <PanelMedTittel title={translate('foreldrepenger')}>
            <StrukturertTekst tekst={getContent('hva-vil-du-søke-om/foreldrepenger', lang)} />
            <div className={parentCls.element('filler')} />
            <div className={parentCls.element('two-buttons-navigation')}>
                <div className={parentCls.element('button-container')}>
                    <KnappBase
                        className={parentCls.element('knapp')}
                        type="hoved"
                        onClick={() => {
                            history.push('/hva-soker-du/foreldrepenger');
                        }}>
                        {translate('hva_søker_du.søk_foreldrepenger')}
                    </KnappBase>
                    <KnappBase className={parentCls.element('knapp')} type="standard">
                        {translate('hva_søker_du.har_søkt_foreldrepenger')}
                    </KnappBase>
                </div>
                <UserHelp
                    linkText={translate('hva_søker_du.ingen_elektronisk_id')}
                    linkUrl={externalUrls.søk_foreldrepenger_eller_engangsstønad_papir}
                    helpText="<Placeholder>"
                />
            </div>
        </PanelMedTittel>
    );
};

export default withLang(withRouter(Foreldrepenger));
