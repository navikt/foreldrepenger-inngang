import React, { StatelessComponent } from 'react';
import KnappBase from 'nav-frontend-knapper';
import TypografiBase from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { withRouter } from 'react-router-dom';

import UserHelp from './user-help/UserHelp';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import translate from '../../utils/translate';

interface ForeldrepengerProps {
    parentCls: any;
    history: any;
    location: any;
    match: any;
}

const Foreldrepenger: StatelessComponent<ForeldrepengerProps> = ({
    parentCls,
    history
}) => {
    return (
        <PanelMedTittel title={translate('foreldrepenger')}>
            <TypografiBase type="normaltekst">
                {translate('foreldrepenger_beskrivelse')}
            </TypografiBase>
            <div className={parentCls.element('filler', 'tiny')} />
            <TypografiBase type="normaltekst">
                <Lenke href="www.nav.no">
                    {translate('foreldrepenger_les_mer')}
                </Lenke>
            </TypografiBase>

            <div className={parentCls.element('filler')} />
            <div className={parentCls.element('navigation-section')}>
                <div className={parentCls.element('two-buttons-navigation')}>
                    <KnappBase
                        className={parentCls.element('knapp')}
                        type="hoved"
                        onClick={() => {
                            history.push('/hva-soker-du/foreldrepenger');
                        }}>
                        {translate('søk_foreldrepenger')}
                    </KnappBase>
                    <KnappBase
                        className={parentCls.element('knapp')}
                        type="standard">
                        {translate('har_søkt_foreldrepenger')}
                    </KnappBase>
                    <UserHelp
                        linkText={translate('ingen_elektronisk_id')}
                        linkUrl={'www.nav.no'}
                        helpText="<Placeholder>"
                    />
                </div>
            </div>
        </PanelMedTittel>
    );
};

export default withRouter(Foreldrepenger);
