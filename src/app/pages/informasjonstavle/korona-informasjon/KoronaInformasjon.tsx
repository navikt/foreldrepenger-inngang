import React from 'react';
import Icon from 'nav-frontend-ikoner-assets';
import BEMHelper from 'app/utils/bem';
import { Normaltekst } from 'nav-frontend-typografi';
// import { Normaltekst, Element } from 'nav-frontend-typografi';

import './koronaInformasjon.less';
import Lenke from 'nav-frontend-lenker';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';

const bem = BEMHelper('koronaInformasjon');

const KoronaInformasjon = () => {
    return (
        <div className={bem.block}>
            <Ekspanderbartpanel
                tittel={
                    <div className={bem.element('tittel')}>
                        <Icon kind="info-sirkel-fyll" wrapperStyle={{ paddingRight: '1rem' }} />
                        <div className={bem.element('tittelTekst')}>
                            Foreldrepenger og koronaviruset
                        </div>
                    </div>
                }>
                <div className={bem.element('textPadding')}>
                    <Normaltekst>
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.nav.no/no/person/innhold-til-person-forside/nyttig-a-vite/sporsmal-og-svar-i-forbindelse-med-koronaviruset">
                            Spørsmål og svar i forbindelse med koronaviruset
                        </Lenke>
                    </Normaltekst>
                </div>
            </Ekspanderbartpanel>
        </div>
    );
};

// const KoronaInformasjon = () => {
//     return (
//         <div className={bem.block}>
//             <Ekspanderbartpanel
//                 tittel={
//                     <div className={bem.element('tittel')}>
//                         <Icon kind="info-sirkel-fyll" wrapperStyle={{ paddingRight: '1rem' }} />
//                         <div className={bem.element('tittelTekst')}>
//                             Foreldrepenger og koronaviruset
//                         </div>
//                     </div>
//                 }>
//                 <div className={bem.element('textPadding')}>
//                     <Element>
//                         Er du i en utsettelsesperiode, der du er fullt eller delvis syk eller satt i
//                         karantene?
//                     </Element>
//                     <Normaltekst>
//                         Har du allerede påbegynt en utsettelse av foreldrepengene dine kan du
//                         beholde utsettelsen.
//                     </Normaltekst>
//                 </div>
//                 <div className={bem.element('textPadding')}>
//                     <Element>
//                         Har du fått innvilget utsettelse men ikke startet utsettelsesperioden enda?
//                     </Element>
//                     <Normaltekst>
//                         Hvis du og barnet er i karantene, men er friske, oppfyller du ikke vilkåret
//                         for å utsette foreldrepengene med fulltidsarbeid. Du kan søke om uttak av
//                         foreldrepenger i den perioden. Dere kan sende en søknad om å endre til fullt
//                         uttak.{' '}
//                         <Lenke href="https://foreldrepenger.nav.no">Søk foreldrepenger</Lenke>
//                     </Normaltekst>
//                 </div>
//                 <div className={bem.element('textPadding')}>
//                     <Element>
//                         Kombinerer du jobb og permisjon når du blir syk eller satt i karantene?
//                     </Element>
//                     <Normaltekst>
//                         Hvis du blir syk eller satt i karantene i en periode der du har avtalt at du
//                         skal kombinerer jobb og foreldrepenger, kan du beholde retten til dette, så
//                         lenge du har begynt å jobbe delvis.
//                     </Normaltekst>
//                 </div>
//                 <div className={bem.element('textPadding')}>
//                     <Element>
//                         Hvis du har avtalt med arbeidsgiver at du skal søke om å kombinerer jobb og
//                         permisjon, men er satt i karantene?
//                     </Element>
//                     <Normaltekst>
//                         Har far/mor/medmor vært i utlandet og kommer i karantene i Norge eller i
//                         utlandet, og ikke kan være sammen med barnet? Da kan du søke om å utsette
//                         foreldrepengene, eller at den andre forelderen overtar foreldrepengene.
//                     </Normaltekst>
//                 </div>
//                 <div className={bem.element('textPadding')}>
//                     <Element>
//                         Kan du søke om å utsette foreldrepengene, eller at den andre forelderen
//                         overtar foreldrepengene grunnet sykdom eller karantene?
//                     </Element>
//                     <Normaltekst>
//                         Har du allerede påbegynt en utsettelse av foreldrepengene dine kan du
//                         beholde utsettelsen.
//                     </Normaltekst>
//                 </div>
//                 <div className={bem.element('textPadding')}>
//                     <Element>
//                         Er far/mor/medmor i karantene med barnet, men den som skal ha foreldrepenger
//                         er syk?
//                     </Element>
//                     <Normaltekst>
//                         Da kan du søke om å utsette foreldrepengene, eller at den andre forelderen
//                         overtar foreldrepengene.
//                     </Normaltekst>
//                 </div>
//             </Ekspanderbartpanel>
//         </div>
//     );
// };

export default KoronaInformasjon;
