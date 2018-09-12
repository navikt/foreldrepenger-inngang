import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';

import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import ButtonPanel from './button-panel/ButtonPanel';
import translate from '../../utils/translate';

const Svangerskapspenger = ({ parentCls }: { parentCls: any }) => {
    return (
        <PanelMedTittel title={translate('svangerskapspenger')}>
            <TypografiBase type="normaltekst">
                {translate('svangerskapspenger_beskrivelse')}
            </TypografiBase>
            <div className={parentCls.element('filler', 'tiny')} />
            <TypografiBase type="normaltekst">
                <Lenke href="www.nav.no">
                    {translate('svangerskapspenger_les_mer')}
                </Lenke>
            </TypografiBase>
            <div className={parentCls.element('filler')} />
            <ButtonPanel
                parentCls={parentCls}
                buttonText={translate('søk_svangerskapspenger')}
                linkText={translate('ingen_elektronisk_id')}
                linkUrl={'www.nav.no'}
                helpText="<Placeholder>"
            />
        </PanelMedTittel>
    );
};

export default Svangerskapspenger;
