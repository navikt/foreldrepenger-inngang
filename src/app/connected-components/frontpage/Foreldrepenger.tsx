import * as React from 'react';
import KnappBase from 'nav-frontend-knapper';
import TypografiBase from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { Link } from 'react-router-dom';

import UserHelp from '../../components/frontpage/user-help/UserHelp';
import NavigationBox from '../../components/frontpage/navigation-box/NavigationBox';
import translate from '../../utils/translate';

const Foreldrepenger = ({ cls }: { cls: any }) => {
    return (
        <NavigationBox title={translate('foreldrepenger')}>
            <TypografiBase type="normaltekst">
                {translate('foreldrepenger_beskrivelse')}
                <Lenke href="www.nav.no">
                    {translate('foreldrepenger_les_mer')}
                </Lenke>
            </TypografiBase>
            <div className={cls.element('filler')} />
            <div className={cls.element('navigation-section')}>
                <div className={cls.element('double-buttons')}>
                    <Link to="/hva-vil-du-soke-om/foreldrepenger">
                        <KnappBase
                            className={cls.element('knapp')}
                            type="hoved">
                            {translate('søk_foreldrepenger')}
                        </KnappBase>
                    </Link>
                    <KnappBase className={cls.element('knapp')} type="standard">
                        {translate('har_søkt_foreldrepenger')}
                    </KnappBase>
                </div>
                <div className={`${cls.element('filler')}--small`} />
                <UserHelp
                    linkText={translate('ingen_elektronisk_id')}
                    linkUrl={'www.nav.no'}
                    helpText="<Placeholder>"
                />
            </div>
        </NavigationBox>
    );
};

export default Foreldrepenger;
