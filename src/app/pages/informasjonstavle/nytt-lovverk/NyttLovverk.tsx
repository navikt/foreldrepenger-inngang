import React from 'react';
import Icon from 'nav-frontend-ikoner-assets';
import BEMHelper from 'app/utils/bem';
import { Normaltekst, Element } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';

import './nyttLovverk.less';

const bem = BEMHelper('nyttLovverk');

const NyttLovverk = () => {
    return (
        <div className={bem.block}>
            <Ekspanderbartpanel
                tittel={
                    <div className={bem.element('tittel')}>
                        <Icon kind="info-sirkel-fyll" style={{ paddingRight: '1rem' }} />
                        <div className={bem.element('tittelTekst')}>Lovendring: Fri utsettelse av foreldrepenger</div>
                    </div>
                }
            >
                <div className={bem.element('textPadding')}>
                    <Element>Hvem gjelder lovendringen for?</Element>
                    <Normaltekst>
                        <div className={bem.element('bottomPadding')}>
                            Lovendringen gjelder for deg som får barn etter 1. oktober 2021.
                        </div>
                        For deg som har barn født før 1. oktober 2021, gjelder nåværende lovverk. Du må fortsatt søke om
                        utsettelse for perioden du ikke skal ha foreldrepenger, eller hvis far ikke skal ta ut
                        fedrekvoten direkte etter mors uttak.
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Hva er endringen for deg som får barn etter 1. oktober 2021?</Element>
                    <Normaltekst>
                        <div className={bem.element('bottomPadding')}>
                            Hvis du ønsker opphold i uttaket av foreldrepenger, trenger du ikke søke om utsettelse av
                            foreldrepengene dine. Det samme gjelder hvis dere ønsker opphold mellom mor og far/medmor
                            sitt uttak av foreldrepenger.
                        </div>
                        <div className={bem.element('bottomPadding')}>
                            Du kan opptjene rett til foreldrepenger frem til du starter selve uttaket av foreldrepenger.
                            Retten til foreldrepenger vurderes når du starter uttaket. Foreldrepengene beregnes etter
                            inntektsgrunnlaget du har ved første uttak av foreldrepenger.
                        </div>
                        <div className={bem.element('bottomPadding')}>
                            Mor må fortsatt starte uttaket av foreldrepenger senest tre uker før termin, og ta ut
                            mødrekvote minst 6 uker etter fødsel.
                        </div>
                        <div className={bem.element('bottomPadding')}>
                            Hvis mor i løpet av de første 6 ukene etter fødselen blir for syk eller skadet til å ta hånd
                            om barnet, må hun fortsatt søke om å utsette foreldrepengene dersom hun ønsker utsettelse.
                            Det samme gjelder hvis hun blir innlagt i helseinstitusjon innenfor de første 6 ukene.
                        </div>
                        <div className={bem.element('bottomPadding')}>
                            Hvis dere mottar pleiepenger for barn som er innlagt i helseinstitusjon trenger dere ikke
                            søke om utsettelse.
                        </div>
                        <div className={bem.element('bottomPadding')}>
                            Får du et nytt barn, opphører foreldrepengene dine når perioden med foreldrepenger for nytt
                            barn starter. Dager med foreldrepenger som ikke er tatt ut før ny periode starter, vil gå
                            tapt. Dette gjelder også fedrekvoten for far/medmor.
                        </div>
                        Perioden med foreldrepenger ved fødsel opphører når barnet fyller tre år. Dager med
                        foreldrepenger som ikke er tatt ut før barnet fyller 3 år, vil gå tapt.
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Hvis kun far/medmor har rett til foreldrepenger og får barn etter 1. oktober 2021</Element>
                    <Normaltekst>
                        <div className={bem.element('bottomPadding')}>
                            Når far/medmor har opphold i uttaket av foreldrepenger er det fortsatt krav til at mor er i
                            aktivitet.
                        </div>
                        <div className={bem.element('bottomPadding')}>
                            Dager med foreldrepenger vil løpe hvis mor ikke er i aktivitet i oppholdsperiodene. Det
                            samme gjelder dersom mors aktivitetskrav ikke dokumenteres. Disse dagene går derfor i
                            fratrekk på antall dager med foreldrepenger.
                        </div>
                        Du trenger ikke søke utsettelse, men dokumentasjon på aktivitet lastes opp i søknaden.
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Hvis du får barn før 1. oktober 2021</Element>
                    <Normaltekst>
                        <div className={bem.element('bottomPadding')}>
                            Hvis du ønsker opphold i perioden din med foreldrepenger, må du søke om utsettelse. Ønsker
                            du utsettelse på grunn av arbeid eller ferie må du søke før arbeidet eller ferien starter.
                            Hvis du søker senere, vil du kunne tape dager med foreldrepenger.
                        </div>
                        <div className={bem.element('bottomPadding')}>
                            Mor og far/medmors periode er sammenhengende. Far/medmor må søke utsettelse eller uttak av
                            foreldrepenger senest mors siste dag med foreldrepenger. Dette gjelder selv om mor skal ha
                            ferie eller ulønnet permisjon rett etter foreldrepengeperioden sin. Hvis far/medmor søker
                            senere, vil han/hun kunne tape dager med foreldrepenger.
                        </div>
                        <div className={bem.element('bottomPadding')}>
                            Får du et nytt barn, opphører foreldrepengene dine når perioden med foreldrepenger for nytt
                            barn starter. Dager med foreldrepenger som ikke er tatt ut før ny periode starter, vil gå
                            tapt. Dette gjelder også fedrekvoten for far/medmor.
                        </div>
                        Perioden med foreldrepenger ved fødsel opphører når barnet fyller tre år. Dager med
                        foreldrepenger som ikke er tatt ut før barnet fyller 3 år, vil gå tapt.
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Når gjelder endringen fra?</Element>
                    <Normaltekst>
                        <div className={bem.element('bottomPadding')}>Endringen gjelder fra 1. oktober 2021.</div>
                        <div className={bem.element('bottomPadding')}>
                            Fra 1. oktober 2021 vil NAV oppdatere{' '}
                            <Lenke rel="noopener noreferrer" target="_blank" href="https://familie.nav.no/">
                                nettsidene for foreldrepenger
                            </Lenke>{' '}
                            med nytt regelverk.
                        </div>{' '}
                        Ta gjerne kontakt med oss på{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/navforeldrepenger/"
                        >
                            NAV Foreldrepenger Facebook
                        </Lenke>{' '}
                        hvis du har spørsmål.
                    </Normaltekst>
                </div>
            </Ekspanderbartpanel>
        </div>
    );
};

export default NyttLovverk;
