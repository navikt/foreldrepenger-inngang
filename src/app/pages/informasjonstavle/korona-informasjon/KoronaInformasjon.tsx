import React from 'react';
import Icon from 'nav-frontend-ikoner-assets';
import BEMHelper from 'app/utils/bem';
import { Normaltekst, Element, Undertittel } from 'nav-frontend-typografi';

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
                        <Icon kind="info-sirkel-fyll" style={{ paddingRight: '1rem' }} />
                        <div className={bem.element('tittelTekst')}>
                            Ofte stilte spørsmål om foreldrepenger og koronaviruset
                        </div>
                    </div>
                }
            >
                <div className={bem.element('tittelPadding')}>
                    <Undertittel>Du har blitt syk eller innlagt i helseinstitusjon</Undertittel>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Er du i karantene eller har blitt syk, og ønsker å utsette foreldrepengene?</Element>
                    <Normaltekst>
                        Du kan velge om du ønsker å utsette foreldrepengene, eller den andre forelderen kan søke om å
                        overta foreldrepengene fordi du er helt avhengig av hjelp for å ta deg av barnet, eller du ikke
                        er sammen med barnet grunnet karantene. Legg ved en legeerklæring. Legen må beskrive konkret
                        hvordan sykdommen eller skaden gjør deg helt avhengig av hjelp til å ta deg av barnet, hva du
                        ikke kan gjøre på grunn av sykdommen eller skaden, og hvor lenge det vil vare. Det er ikke nok
                        med vanlig sykmelding. Les mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke"
                        >
                            på våre nettsider.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du i karantene eller har blitt syk, og ønsker å overføre foreldrepengene til den andre
                        forelderen?
                    </Element>
                    <Normaltekst>
                        Du kan velge om du ønsker å utsette foreldrepengene, eller den andre forelderen kan søke om å
                        overta foreldrepengene fordi du er helt avhengig av hjelp for å ta deg av barnet, eller du ikke
                        er sammen med barnet grunnet karantene. Legg ved en legeerklæring. Legen må beskrive konkret
                        hvordan sykdommen eller skaden gjør deg helt avhengig av hjelp til å ta deg av barnet, hva du
                        ikke kan gjøre på grunn av sykdommen eller skaden, og hvor lenge det vil vare. Det er ikke nok
                        med vanlig sykmelding. Les mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke"
                        >
                            på våre nettsider.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du far, mor eller medmor i karantene med barnet, har foreldrepenger, og blir syk?
                    </Element>
                    <Normaltekst>
                        Da kan du søke om å utsette foreldrepengene, eller at den andre forelderen overtar
                        foreldrepengene. Legg ved en legeerklæring. Legen må beskrive konkret hvordan sykdommen eller
                        skaden gjør deg helt avhengig av hjelp til å ta deg av barnet, hva du ikke kan gjøre på grunn av
                        sykdommen eller skaden, og hvor lenge det vil vare. Det er ikke nok med vanlig sykmelding.{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke"
                        >
                            Les mer om dine rettigheter og muligheter ved sykdom.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du i en utsettelsesperiode eller har fått innvilget utsettelse, men du er blitt syk eller
                        satt i karantene?
                    </Element>
                    <Normaltekst>
                        Du beholder utsettelsen din. Blir du syk i en lengre periode enn du har fått innvilget
                        utsettelse for, kan du søke om utsettelse på grunn av sykdom. Legg ved en legeerklæring. Legen
                        må beskrive konkret hvordan sykdommen eller skaden gjør deg helt avhengig av hjelp til å ta deg
                        av barnet, hva du ikke kan gjøre på grunn av sykdommen eller skaden, og hvor lenge det vil vare.
                        Det er ikke nok med vanlig sykmelding. Les mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke"
                        >
                            på våre nettsider.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du er i en periode hvor du kombinerer jobb og foreldrepenger, men nå har du blitt syk eller
                        satt i karantene?
                    </Element>
                    <Normaltekst>
                        Hvis du er syk eller satt i karantene i en periode der du har avtalt at du skal kombinere jobb
                        og foreldrepenger, kan du beholde retten til dette. Legg ved en legeerklæring. Legen må beskrive
                        konkret hvordan sykdommen eller skaden gjør deg helt avhengig av hjelp til å ta deg av barnet,
                        hva du ikke kan gjøre på grunn av sykdommen eller skaden, og hvor lenge det vil vare. Det er
                        ikke nok med vanlig sykmelding. Les mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke"
                        >
                            på våre nettsider.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Har du fått innvilget en periode med delvis arbeid og foreldrepenger, men nå har du blitt syk
                        eller satt i karantene?
                    </Element>
                    <Normaltekst>
                        Hvis du er syk eller satt i karantene i en periode der du har avtalt at du skal kombinere jobb
                        og foreldrepenger, kan du beholde retten til dette. Legg ved en legeerklæring. Legen må beskrive
                        konkret hvordan sykdommen eller skaden gjør deg helt avhengig av hjelp til å ta deg av barnet,
                        hva du ikke kan gjøre på grunn av sykdommen eller skaden, og hvor lenge det vil vare. Det er
                        ikke nok med vanlig sykmelding. Les mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke"
                        >
                            på våre nettsider.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('tittelPadding')}>
                    <Undertittel>Den andre forelderen har blitt syk eller innlagt i helseinstitusjon</Undertittel>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du far eller medmor, og du har påbegynt eller fått innvilget foreldrepenger i fellesperiode –
                        og så blir mor permittert eller satt i karantene?
                    </Element>
                    <Normaltekst>
                        Så lenge mor har en bekreftelse på at hun skulle ha jobbet i den perioden du skal være hjemme,
                        så har hennes permittering eller karantene ingen innvirkning på foreldrepengene dine. Hvis du
                        skal sende inn søknad om foreldrepenger nå, så må du legge ved en bekreftelse på at mor skulle
                        vært i arbeid.
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du far eller medmor og det er kun du som har rett til foreldrepenger, og du har påbegynt – og
                        så blir mor permittert eller satt i karantene?
                    </Element>
                    <Normaltekst>
                        Så lenge mor har en bekreftelse på at hun skulle ha jobbet i den perioden du skal være hjemme,
                        så har hennes permittering eller karantene ingen innvirkning på foreldrepengene dine.
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du far eller medmor og det er kun du som har rett til foreldrepenger, og du har påbegynt – og
                        så blir mor permittert eller satt i karantene?
                    </Element>
                    <Normaltekst>
                        Så lenge mor har en bekreftelse på at hun skulle ha jobbet i den perioden du skal være hjemme,
                        så har hennes permittering eller karantene ingen innvirkning på foreldrepengene dine. Hvis du
                        skal sende inn søknad om uttak nå, så må du legge ved en bekreftelse på at mor skulle vært i
                        arbeid.
                    </Normaltekst>
                </div>
                <div className={bem.element('tittelPadding')}>
                    <Undertittel>
                        Søke om utsettelse på grunn av sykdom eller innleggelse og dokumentasjon av sykdom
                    </Undertittel>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Er du syk og skal søke om utsettelse av foreldrepengene dine?</Element>
                    <Normaltekst>
                        Når du er syk må legen din dokumentere at du er helt avhengig av hjelp til å ta deg av barnet.
                        Legg ved en legeerklæring. Legen må beskrive konkret hvordan sykdommen eller skaden gjør deg
                        helt avhengig av hjelp til å ta deg av barnet, hva du ikke kan gjøre på grunn av sykdommen eller
                        skaden, og hvor lenge det vil vare. Det er ikke nok med vanlig sykmelding. Les mer om hvordan du
                        søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke"
                        >
                            på våre nettsider.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er du innlagt i helseinstitusjon og skal søke om utsettelse av foreldrepengene dine?
                    </Element>
                    <Normaltekst>
                        Når du er innlagt i helseinstitusjon må du dokumentere innleggelsen. Legg ved dokumentasjon på
                        innleggelsen fra helseinstitusjonen. Les mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke"
                        >
                            på våre nettsider.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er den andre forelderen for syk til å ta seg av barnet og du skal overta foreldrepengene?
                    </Element>
                    <Normaltekst>
                        Når den andre forelderen er for syk til å ta seg av barnet deres må legen dokumentere at den
                        andre forelderen er helt avhengig av hjelp til å ta seg av barnet. Legg ved en legeerklæring.
                        Legen må beskrive konkret hvordan sykdommen eller skaden gjør deg helt avhengig av hjelp til å
                        ta deg av barnet, hva du ikke kan gjøre på grunn av sykdommen eller skaden, og hvor lenge det
                        vil vare. Det er ikke nok med vanlig sykmelding. Les mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke"
                        >
                            på våre nettsider.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Er den andre forelderen innlagt i helseinstitusjon og du skal overta foreldrepengene?
                    </Element>
                    <Normaltekst>
                        Når den andre forelderen er innlagt i helseinstitusjon må du dokumentere innleggelsen. Legg ved
                        dokumentasjon fra helseinstitusjonen på innleggelsen. Les mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hvis-en-av-dere-blir-syke"
                        >
                            på våre nettsider.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('tittelPadding')}>
                    <Undertittel>Permittering</Undertittel>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Er du blitt permittert og lurer på hvor mye du kan få utbetalt i foreldrepenger?</Element>
                    <Normaltekst>
                        Hvis du er permittert og tidspunktet for beregning, som er dagen før du starter
                        foreldrepengeperioden din, er i lønnspliktperioden, så vil foreldrepengene dine som hovedregel
                        beregnes til inntekten{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/utbetalinger/grunnbelopet-i-folketrygden"
                        >
                            opptil 6G.
                        </Lenke>
                    </Normaltekst>
                    <br />
                    <Normaltekst>
                        Hvis tidspunktet for beregning, som er dagen før du starter foreldrepengeperioden din, er i
                        perioden du mottar ordinære dagpenger ved permittering, så vil foreldrepengeperioden din
                        beregnes etter samme regler som de som{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-foreldrepenger#hva-kan-du-fa"
                        >
                            mottar dagpenger.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Er du i foreldrepengeperiode eller har utsettelse, og blir permittert?</Element>
                    <Normaltekst>
                        Du kan beholde periode med fulle foreldrepenger som er innvilget og påbegynt før permitteringen.
                        Du kan også beholde en utsettelse som er innvilget før permitteringen. Du kan beholde de
                        graderte foreldrepengene selv om du blir permittert. Vær oppmerksom på at du ikke får innvilget
                        dagpenger om du mottar mer enn 50 prosent foreldrepenger.
                    </Normaltekst>
                </div>
                <div className={bem.element('tittelPadding')}>
                    <Undertittel>Svangerskapspenger og andre utbetalinger fra NAV</Undertittel>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Er du gravid og i arbeid, og i risikogruppen grunnet korona?</Element>
                    <Normaltekst>
                        Er du gravid, tar du kontakt med lege eller jordmor (etter retningslinjene for kontakt gitt av
                        helsemyndighetene) som gjør en vurdering av om smittefaren er en risiko for fosteret. Da kan du
                        ha rett på svangerskapspenger, les mer om hvordan du søker{' '}
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://familie.nav.no/om-svangerskapspenger#slik-soker-du"
                        >
                            på våre nettsider.
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>
                        Kan du bruke omsorgsdager når den andre forelderen er hjemme og har foreldrepenger?
                    </Element>
                    <Normaltekst>
                        Når den andre forelderen har foreldrepenger kan du bruke omsorgsdager hvis
                    </Normaltekst>
                    <ul style={{ marginBottom: 0 }}>
                        <li>den andre forelderen er for syk til å ta seg av barnet</li>
                        <li>du skal passe et annet barn enn det barnet den andre forelderen får foreldrepenger for.</li>
                    </ul>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Har du spørsmål om dager med omsorgspenger, og hvordan du søker?</Element>
                    <Normaltekst>
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.nav.no/familie/sykdom-i-familien/nb/omsorgspenger"
                        >
                            Les mer om omsorgspenger og dine rettigheter her
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Har du andre spørsmål om rettigheter og andre utbetalinger fra NAV?</Element>
                    <Normaltekst>
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.nav.no/no/person/innhold-til-person-forside/nyttig-a-vite/koronavirus--informasjon-fra-nav"
                        >
                            Her finner du informasjon fra NAV i forbindelse med koronaviruset
                        </Lenke>
                    </Normaltekst>
                </div>
                <div className={bem.element('textPadding')}>
                    <Element>Fant du ikke svar på det du lurte på?</Element>
                    <Normaltekst>
                        <Lenke
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.nav.no/person/kontakt-oss/chat/familie"
                        >
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
