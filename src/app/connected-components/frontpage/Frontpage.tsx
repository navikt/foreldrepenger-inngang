import * as React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import KnappBase from 'nav-frontend-knapper';
import UserHelp from '../../components/frontpage/user-help/UserHelp';
import BEMHelper from '../../utils/bem';

import NavigationBox from '../../components/frontpage/navigation-box/NavigationBox';
import ButtonPanel from '../../components/frontpage/button-panel/ButtonPanel';
import './frontpage.less';
import Lenke from 'nav-frontend-lenker';

const translations = {
    no: {
        foreldrepenger: 'Foreldrepenger',
        foreldrepenger_beskrivelse:
            'Har du en inntekt som er minst 46 518kr (i året), får ytelse fra NAV eller har vært i militæret, kan du få foreldrepenger når du skal ha foreldrepermisjon. Les mer ',
        ingen_elektronisk_id: 'Jeg har ikke elektronisk ID',
        søk_foreldrepenger: 'Søk om foreldrepenger',
        endre_foreldrepenger: 'Jeg har allerede en søknad',
        engangsstønad: 'Engangsstønad',
        engangsstønad_beskrivelse:
            'Hvis mor ikke har hatt inntekt, kan hun få en engangssum isteden for foreldrepenger.',
        engangsstønad_beskrivelse_fortsettelse: 'Les om tilfeller hvor ',
        søk_engangsstønad: 'Søk om engangsstønad',
        svangerskapspenger: 'Svangerskapspenger',
        svangerskapspenger_beskrivelse:
            'Dersom du er frisk og gravid, men fortsatt ikke kan jobbe under svangerskapet, så kan du søke ',
        søk_svangerskapspenger: 'Søk om svangerskapspenger'
    }
};

const cls = BEMHelper('frontpage');

const translate = (s: string) => translations.no[s];

const Frontpage = () => {
    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <TypografiBase type="undertittel">
                    Hva vil du søke om?
                </TypografiBase>
            </div>
            <div className={cls.element('content')}>
                <CoverImage />
                <Foreldrepenger />
                <Engangsstonad />
                <Svangerskapspenger />
            </div>
        </div>
    );
};

const CoverImage = () => {
    return <div className={cls.element('cover-image')} />;
};

const Foreldrepenger = () => {
    return (
        <NavigationBox title={translate('foreldrepenger')}>
            <TypografiBase type="normaltekst">
                {translate('foreldrepenger_beskrivelse')}
                <Lenke href="www.nav.no">
                    om lengde på foreldrepermisjon, ferie o.l.
                </Lenke>
            </TypografiBase>
            <div className={cls.element('filler')} />
            <div className={cls.element('navigation-section')}>
                <div className={cls.element('double-buttons')}>
                    <KnappBase className={cls.element('knapp')} type="hoved">
                        {translate('søk_foreldrepenger')}
                    </KnappBase>
                    <KnappBase className={cls.element('knapp')} type="standard">
                        {translate('endre_foreldrepenger')}
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

const Engangsstonad = () => {
    return (
        <NavigationBox title={translate('engangsstønad')}>
            <Tekstomrade>{translate('engangsstønad_beskrivelse')}</Tekstomrade>
            <TypografiBase type="normaltekst">
                {translate('engangsstønad_beskrivelse_fortsettelse')}
                <Lenke href="www.nav.no">
                    far/medmor kan få engangsstønad.
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

const Svangerskapspenger = () => {
    return (
        <NavigationBox title={translate('svangerskapspenger')}>
            <TypografiBase type="normaltekst">
                {translate('svangerskapspenger_beskrivelse')}
                <Lenke href="www.nav.no">om svangerskapspenger!</Lenke>
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

export default Frontpage;
