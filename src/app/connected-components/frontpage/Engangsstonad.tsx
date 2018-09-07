import * as React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';

import NavigationBox from '../../components/frontpage/navigation-box/NavigationBox';
import ButtonPanel from '../../components/frontpage/button-panel/ButtonPanel';
import translate from '../../utils/translate';

const Engangsstonad = ({ cls }: { cls: any }) => {
    return (
        <NavigationBox title={translate('engangsstønad')}>
            <Tekstomrade>{translate('engangsstønad_beskrivelse')}</Tekstomrade>
            <TypografiBase type="normaltekst">
                <Lenke href="www.nav.no">
                    {translate('engangsstønad_les_mer')}
                </Lenke>
            </TypografiBase>
            <div className={cls.element('filler')} />
            <ButtonPanel
                className={cls.element('knapp')}
                buttonText={translate('søk_engangsstønad')}
                linkText={translate('ingen_elektronisk_id')}
                linkUrl={'www.nav.no'}
                helpText="Skaff deg elektronisk ID nå!"
            />
        </NavigationBox>
    );
};

export default Engangsstonad;
