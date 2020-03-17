import React from 'react';
import Icon from 'nav-frontend-ikoner-assets';
import BEMHelper from 'app/utils/bem';
import { Normaltekst, Element } from 'nav-frontend-typografi';

import './koronaInformasjon.less';
import Lenke from 'nav-frontend-lenker';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import Lenkeknapp from 'app/components/lenkeknapp/Lenkeknapp';

const bem = BEMHelper('koronaInformasjon');

const KoronaInformasjon = () => {
    return (
        <div className={bem.block}>
            <Ekspanderbartpanel
                tittel={
                    <div className={bem.element('tittel')}>
                        <Icon kind="info-sirkel-fyll" wrapperStyle={{ paddingRight: '1rem' }} />
                        <div className={bem.element('tittelTekst')}>
                            Ofte stilte spørsmål om foreldrepenger og koronaviruset
                        </div>
                    </div>
                }>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du i en utsettelsesperiode eller har fått innvilget utsettelse, men du er
                        blitt syk eller satt i karantene?
                    </Element>
                    <Normaltekst>
                        Du beholder utsettelsen din. Blir du syk i en lengre periode enn du har fått
                        innvilget utsettelse for, kan du søke om utsettelse på grunn av sykdom. Les
                        mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke">
                            på våre nettsider
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du er i en periode hvor du kombinerer du jobb og foreldrepenger eller har
                        du fått innvilget en periode med delvis arbeid og foreldrepenger, men nå har
                        du blitt syk eller satt i karantene?
                    </Element>
                    <Normaltekst>
                        Hvis du er syk eller satt i karantene i en periode der du har avtalt at du
                        skal kombinere jobb og foreldrepenger, kan du beholde retten til dette. Hvis
                        du er helt avhengig av hjelp til å ta deg av barnet kan du også søke om
                        utsettelse eller den andre forelderen kan søke om å overta din periode. Les
                        mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke">
                            på våre nettsider
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du far eller medmor, og du har påbegynt eller fått innvilget
                        foreldrepenger i fellesperiode, eller det kun er deg som har rett til
                        foreldrepenger – og så blir mor permittert eller satt i karantene?
                    </Element>
                    <Normaltekst>
                        Så lenge mor har en bekreftelse på at hun skulle ha jobbet i den perioden du
                        skal være hjemme, så har hennes permittering eller karantene ingen
                        innvirkning på foreldrepengene dine. Hvis du skal sende inn søknad om uttak
                        nå, så må du legge ved en bekreftelse på at mor skulle vært i arbeid.
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du i karantene eller har blitt syk, og ønsker å utsette foreldrepengene,
                        eller å overføre de til den andre forelderen?
                    </Element>
                    <Normaltekst>
                        Du kan velge om du ønsker å utsette foreldrepengene, eller den andre
                        forelderen kan søke om å overta foreldrepengene fordi du er helt avhengig av
                        hjelp for å ta deg av barnet, eller du ikke er sammen med barnet grunnet
                        karantene. Les mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke">
                            på våre nettsider
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du far, mor eller medmor i karantene med barnet, men den som skal ha
                        foreldrepenger er syk?
                    </Element>
                    <Normaltekst>
                        Da kan du søke om å utsette foreldrepengene, eller at den andre forelderen
                        overtar foreldrepengene.{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke">
                            Les mer om dine rettigheter og muligheter ved sykdom
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du beordret ut i jobb eller i heimevernet, og ønsker at den andre
                        forelderen tar ut din kvote?
                    </Element>
                    <Normaltekst>
                        Nei, den andre forelderen kan ikke overta din kvote om du må ut i jobb,
                        gjelder for eksempel helsepersonell, heimevernet eller sivilforsvaret. Du
                        kan søke om å utsette perioden din, og ta den ut på et senere tidspunkt. Må
                        du jobbe, men bare delvis kan du søke om graderte foreldrepenger i
                        kombinasjon med foreldrepenger.
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du blir beordret ut i jobb, og rekker ikke søke om utsettelse?
                    </Element>
                    <Normaltekst>
                        Du må søke om utsettelse så fort som mulig om du skal jobbe. Vi kan i slike
                        tilfeller innvilge utsettelse tilbake i tid. Når du søker om utsettelse
                        tilbake i tid så, får du mulighet til å skrive en begrunnelse til oss. Da
                        forklarer du kort situasjonen.
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Er du gravid og i risikogruppen?</Element>
                    <Normaltekst>
                        Er du gravid, tar du kontakt med lege eller jordmor (etter retningslinjene
                        for kontakt gitt av helsemyndighetene) som gjør en vurdering av om
                        smittefaren er en risiko for fosteret. Da kan du ha rett på
                        svangerskapspenger, les mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-svangerskapspenger#slik-soker-du">
                            på våre nettsider
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er den andre forelderen hjemme og mottar foreldrepenger, og du lurer på om
                        du kan bruke omsorgsdager?
                    </Element>
                    <Normaltekst>
                        Nei, når den andre forelderen er hjemme og mottar foreldrepenger, kan du
                        ikke bruke omsorgsdager hvis barnehagen eller skolen er stengt på grunn av
                        korona.{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.nav.no/familie/sykdom-i-familien/nb/omsorgspenger">
                            Les mer om omsorgspenger og dine rettigheter her
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Har du andre spørsmål om rettigheter og andre utbetalinger fra NAV?
                    </Element>
                    <Normaltekst>
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.nav.no/no/person/innhold-til-person-forside/nyttig-a-vite/koronavirus--informasjon-fra-nav">
                            Her finner du informasjon fra NAV i forbindelse med koronaviruset.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Fant du ikke svar på det du lurte på?</Element>
                    <Normaltekst>
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.nav.no/person/kontakt-oss/chat/familie">
                            Chat med oss
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Normaltekst>
                        <Lenkeknapp urlIsExternal={true} url="https://foreldrepenger.nav.no">
                            Søk foreldrepenger
                        </Lenkeknapp>
                    </Normaltekst>
                </div>
            </Ekspanderbartpanel>
        </div>
    );
};

export default KoronaInformasjon;
