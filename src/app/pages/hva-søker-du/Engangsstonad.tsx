import * as React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';

import ButtonPanel from './button-panel/ButtonPanel';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import translate from '../../utils/translate';

const Engangsstonad = ({ parentCls }: { parentCls: any }) => {
    return (
        <PanelMedTittel title={translate('engangsstønad')}>
            <Tekstomrade>{translate('engangsstønad_beskrivelse')}</Tekstomrade>
            <TypografiBase type="normaltekst">
                <Lenke href="www.nav.no">
                    {translate('engangsstønad_les_mer')}
                </Lenke>
            </TypografiBase>
            <div className={parentCls.element('filler')} />
            <ButtonPanel
                parentCls={parentCls}
                buttonText={translate('søk_engangsstønad')}
                linkText={translate('ingen_elektronisk_id')}
                linkUrl={'www.nav.no'}
                helpText="Skaff deg elektronisk ID nå!"
            />
        </PanelMedTittel>
    );
};

export default Engangsstonad;
