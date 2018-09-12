import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';

import ButtonPanel from './button-panel/ButtonPanel';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import translate from '../../utils/translate';
import externalUrls from '../../utils/externalUrls';

const Engangsstonad = ({ parentCls }: { parentCls: any }) => {
    return (
        <PanelMedTittel title={translate('engangsstønad')}>
            <TypografiBase type="normaltekst">
                {translate('engangsstønad_beskrivelse')}
            </TypografiBase>
            <div className={parentCls.element('filler', 'tiny')} />
            <TypografiBase type="normaltekst">
                <Lenke href={externalUrls.les_mer_engangsstønad}>
                    {translate('engangsstønad_les_mer')}
                </Lenke>
            </TypografiBase>
            <div className={parentCls.element('filler')} />
            <ButtonPanel
                parentCls={parentCls}
                buttonText={translate('søk_engangsstønad')}
                buttonUrl={externalUrls.søk_foreldrepenger_eller_engangsstønad}
                linkText={translate('ingen_elektronisk_id')}
                linkUrl={
                    externalUrls.søk_foreldrepenger_eller_engangsstønad_papir
                }
                helpText="Skaff deg elektronisk ID nå!"
            />
        </PanelMedTittel>
    );
};

export default Engangsstonad;
