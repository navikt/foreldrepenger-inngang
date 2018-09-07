import * as React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import KnappBase from 'nav-frontend-knapper';
import UserHelp from '../../components/frontpage/user-help/UserHelp';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';

import NavigationBox from '../../components/frontpage/navigation-box/NavigationBox';
import ButtonPanel from '../../components/frontpage/button-panel/ButtonPanel';
import './frontpage.less';
import Lenke from 'nav-frontend-lenker';

// TODO: Implementer i18n
const translate = (s: string) => translations.no[s];
const translations = {
    no: {
        foreldrepenger: 'Foreldrepenger',
        foreldrepenger_beskrivelse:
            'Har du hatt inntekt eller ytelser fra NAV kan du få foreldrepenger når du er hjemme med barnet ditt. ',
        foreldrepenger_les_mer: 'Les mer om hvem som kan få foreldrepenger',

        ingen_elektronisk_id: 'Jeg har ikke elektronisk ID',
        søk_foreldrepenger: 'Søk om foreldrepenger',
        har_søkt_foreldrepenger: 'Jeg har allerede søkt',
        engangsstønad: 'Engangsstønad',
        engangsstønad_beskrivelse:
            'Hvis mor ikke har hatt inntekt, kan hun få en engangssum istedenfor foreldrepenger.\nI noen tilfeller kan far eller medmor få engangsstønaden.',
        engangsstønad_les_mer: 'Les mer om hvem som kan få engangsstønad',
        søk_engangsstønad: 'Søk om engangsstønad',
        svangerskapspenger: 'Svangerskapspenger',
        svangerskapspenger_beskrivelse:
            'Hvis du er frisk og gravid, men ikke kan jobbe fordi det kan skade det ufødte barnet, kan du få svangerskapspenger. ',
        svangerskapspenger_les_mer:
            'Les mer om hvem som kan få svangerskapspenger',
        søk_svangerskapspenger: 'Søk om svangerskapspenger'
    }
};

// TODO: Hent fra state etter routing er implementert
const tempRoute = [
    {
        label: 'Foreldrepenger, engangsstønad og svangerskapspenger',
        url: 'www.nav.no'
    },
    {
        label: 'Hva vil du søke om',
        url: 'www.nav.no'
    }
];

const cls = BEMHelper('frontpage');

const Frontpage = () => {
    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <TypografiBase type="undertittel">
                    Hva vil du søke om?
                </TypografiBase>
            </div>
            <div className={cls.element('content')}>
                <Breadcrumbs route={tempRoute} />
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
                    {translate('foreldrepenger_les_mer')}
                </Lenke>
            </TypografiBase>
            <div className={cls.element('filler')} />
            <div className={cls.element('navigation-section')}>
                <div className={cls.element('double-buttons')}>
                    <KnappBase className={cls.element('knapp')} type="hoved">
                        {translate('søk_foreldrepenger')}
                    </KnappBase>
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

const Engangsstonad = () => {
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

const Svangerskapspenger = () => {
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

export default Frontpage;
