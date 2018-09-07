import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';

import NavigationBox from '../../components/frontpage/navigation-box/NavigationBox';
import ButtonPanel from '../../components/frontpage/button-panel/ButtonPanel';
import translate from '../../utils/translate';

const Svangerskapspenger = ({ cls }: { cls: any }) => {
    return (
        <NavigationBox title={translate('svangerskapspenger')}>
            <TypografiBase type="normaltekst">
                {translate('svangerskapspenger_beskrivelse')}
                <Lenke href="www.nav.no">
                    {translate('svangerskapspenger_les_mer')}
                </Lenke>
            </TypografiBase>
            <div className={cls.element('filler')} />
            <ButtonPanel
                className={cls.element('knapp')}
                buttonText={translate('søk_svangerskapspenger')}
                linkText={translate('ingen_elektronisk_id')}
                linkUrl={'www.nav.no'}
                helpText="<Placeholder>"
            />
        </NavigationBox>
    );
};

export default Svangerskapspenger;
