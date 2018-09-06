import * as React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import Lenke from 'nav-frontend-lenker';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../utils/bem';

import NavigationBox from '../../components/frontpage/navigation-box/NavigationBox';
import ButtonPanel from '../../components/frontpage/button-panel/ButtonPanel';
import './frontpage.less';

const translations = {
    no: {
        foreldrepenger: 'Foreldrepenger',
        foreldrepenger_beskrivelse:
            'Her kan du søke om foreldrepenger, gitt at du oppfyller følgende krav:',
        foreldrepenger_unntak:
            'Det er også noen unntak som du bør være klar over, les mer om disse unntakene og generelt:',
        ingen_elektronisk_id: 'Jeg har ikke elektronisk ID',
        søk_foreldrepenger: 'Søk om foreldrepenger',
        engangsstønad: 'Engangsstønad',
        engangsstønad_beskrivelse:
            'Du kan få engangsstønad hvis du ikke har rett til foreldrepenger, eller velger engangsstønad fremfor foreldrepenger. Du kan ikke senere gjøre om dette valget.',
        søk_engangsstønad: 'Søk om engangsstønad',
        svangerskapspenger: 'Svangerskapspenger',
        svangerskapspenger_beskrivelse:
            'Friske, gravide kvinner som ikke kan fortsette å jobbe under svangerskapet fordi det kan medføre risiko for skade på fosteret, kan få svangerskapspenger.',
        søk_svangerskapspenger:
            'Gå til papirsøknad for søknad om svangerskapspenger'
    }
};

const cls = BEMHelper('frontpage');

const translate = (s: string) => translations.no[s];

const Frontpage = () => {
    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <TypografiBase type="systemtittel">
                    Hva vil du søke om?
                </TypografiBase>
            </div>
            <div className={cls.element('content')}>
                <Foreldrepenger />
                <Engangsstonad />
                <Svangerskapspenger />
            </div>
        </div>
    );
};

const Foreldrepenger = () => {
    return (
        <NavigationBox title={translate('foreldrepenger')}>
            <Tekstomrade>{translate('foreldrepenger_beskrivelse')}</Tekstomrade>
            <Tekstomrade>{translate('foreldrepenger_unntak')}</Tekstomrade>
            <div className={cls.element('filler')} />
            <ButtonPanel
                buttonText={translate('søk_foreldrepenger')}
                linkText={translate('ingen_elektronisk_id')}
                linkUrl={'www.nav.no'}
                helpText="<Placeholder>"
            />
        </NavigationBox>
    );
};

const Engangsstonad = () => {
    return (
        <NavigationBox title={translate('engangsstønad')}>
            <Tekstomrade>{translate('engangsstønad_beskrivelse')}</Tekstomrade>
            <div className={cls.element('filler')} />
            <ButtonPanel
                buttonText={translate('søk_engangsstønad')}
                linkText={translate('ingen_elektronisk_id')}
                linkUrl={'www.nav.no'}
                helpText="<Placeholder>"
            />
        </NavigationBox>
    );
};

const Svangerskapspenger = () => {
    return (
        <NavigationBox title={translate('svangerskapspenger')}>
            <Tekstomrade>
                {translate('svangerskapspenger_beskrivelse')}
            </Tekstomrade>
            <div className={cls.element('filler')} />
            <Lenke href="www.nav.no">
                {translate('søk_svangerskapspenger')}
            </Lenke>
        </NavigationBox>
    );
};

export default Frontpage;
