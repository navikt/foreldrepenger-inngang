import React from 'react';
import Icon from 'nav-frontend-ikoner-assets';
import BEMHelper from 'app/utils/bem';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';

import './sisteNyttOmFedrekvote.less';

const bem = BEMHelper('sisteNyttOmFedrekvote');

const SisteNyttOmFedrekvote = () => {
    return (
        <div className={bem.block}>
            <Ekspanderbartpanel
                tittel={
                    <div className={bem.element('tittel')}>
                        <Icon kind="info-sirkel-fyll" style={{ paddingRight: '1rem' }} />
                        <div className={bem.element('tittelTekst')}>
                            Siste nytt om fedrekvote for foreldre med barn født før 1. oktober 2021
                        </div>
                    </div>
                }
            >
                <div className={bem.element('textPadding')}>
                    <Normaltekst>
                        NAV har mottatt en uttalelse fra Sivilombudet, der det framgår at de ikke er enige i hvordan
                        lovverket som gjelder uttak av foreldrepenger praktiseres. Vi har satt oss inn i uttalelsen og
                        sett denne i sammenheng med lovverket på foreldrepenger.
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Normaltekst>
                        Vi har forståelse for at dette er en viktig sak for mange foreldre. Det er leit å høre om de
                        sakene hvor foreldre har mistet hele eller deler av foreldrepengeperioden sin. Vi er glade for
                        at regelverket har blitt endret, selv om det dessverre ikke hjelper dem som er omfattet av det
                        gamle regelverket.
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Normaltekst>
                        Mandag 18. oktober svarte NAV på Sivilombudets uttalelse. NAV tar Sivilombudets uttalelse på
                        alvor og har gått grundig gjennom saken. Den aktuelle saken Sivilombudet har gitt tilbakemelding
                        om har vært klaget til klageinstansen og anket til Trygderetten, med samme resultat alle steder.
                        Etter en ny gjennomgang fra NAV er det ikke funnet feil i saksbehandlingen. NAV kan heller ikke
                        se at det er gitt feil eller mangelfull informasjon. Saken er slik sett behandlet riktig etter
                        den måten NAV praktiserer lovverket.{' '}
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Fakta</Element>
                    <ul>
                        <li>
                            NAV følger de til enhver tid gjeldende lover, og håndheving av lover handler om fortolkning
                            av en sak opp mot lovtekst og andre rettskilder.
                        </li>
                        <li>
                            Trygderetten er en nøytral part utenfor NAV, som behandler saker fra blant annet NAV der det
                            er uenighet om retten til trygde- og pensjonsytelser.
                        </li>
                        <li>
                            Sivilombudet skal føre kontroll med den offentlige forvaltningen for å hindre urett mot den
                            enkelte. De har i denne saken tolket loven annerledes enn NAV og Trygderetten.
                        </li>
                        <li>
                            NAV har derfor gått gjennom egen tolkning og praksis, men er ikke enig med Sivilombudet i at
                            vi praktiserer feil. 
                        </li>
                    </ul>
                </div>
                <div className={bem.element('textPadding')}>
                    <Normaltekst>
                        For oppdatert informasjon om foreldrepenger og fedrekvote, se{' '}
                        <Lenke href="https://www.nav.no/foreldrepenger-for-oktober">
                            familie.nav.no/om-foreldrepenger
                        </Lenke>
                    </Normaltekst>
                </div>
            </Ekspanderbartpanel>
        </div>
    );
};

export default SisteNyttOmFedrekvote;
