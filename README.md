# Inngangssider til foreldrepenger, engangsstønad og svangerskapspenger

## Komme i gang

Installer og kjør applikasjonen lokalt:

```
npm install
npm run develop
```

Dette kjører applikasjonen uten NAV-dekoratøren. For å aktivere denne må du kjøre `npm run start`, men da vil ikke autorefresh fungere ved kodeendringer.

For å bygge  i `production` kjører du:

```
npm run build
```

Start node-server på port `8080` med:

```
npm run start-express
```

Kjør tester

```
npm run test
```

## Stack

-   `React`: Rendering og logikk
-   `TypeScript`: Typesikring
-   `Prettier`: Kodeformatering
-   `Jest`: Akseptansetesting av XML-filer, oversettelser og mer.
-   `XML-filer`: Innhold i et egendefinert XML-format.
-   `Node`: Applikasjon for å serve appen, bruker [Express](https://github.com/expressjs/express)
    -   Setter på dekoratøren ved oppstart, sender komprimerte (gzip) ressurser til brukeren på forespørsler.

## Xml-to-React-parseren

Inngangssidene består av teksttunge seksjoner som også inneholder mange spesialbygde, grafiske komponenter. Tekstene skal være enkle å endre for utvikleren, men også nogen lunde lett å redigere for ikke-tekniske. For å oppnå denne fleksibiliteten har vi separert tekstene fra resten av React-applikasjonen. Disse er kodet i XML-format (se `src/content`) og tolkes hos klienten ved hjelp av en [XML-to-React-parser](https://github.com/CondeNast/xml-to-react#readme). Tekstfilene er strukturert i mapper basert på siden de tar del i, med én fil per språk. Filene er navngitt i [kebab-case](http://wiki.c2.com/?KebabCase).

Alle XML-filene er omgitt av en `<innhold>`-tag. Denne kan inneholde `<avsnitt>`, `<liste>` eller `<lesmer>`. Alle tags kan ta inn `class`-attributtet (string) som kan brukes til egendefinert CSS-styling.

-   `<avsnitt>`

    -   Bruker NAV-frontend sin [Typografi-komponent](https://design.nav.no/components/typografi)
    -   Tar inn en valgfri attributt `type` som korresponderer med TypografiBase sin "type"-prop (default: 'normaltekst')

-   `<liste>`

    -   Forventer en `<punkt>`-tag for hvert punkt i listen.
    -   Tar inn en valgfri attributt `tag: ul | ol` (default: ul)

-   `<lesmer>`

    -   Rendrer til et [Ekspanderbartpanel](https://design.nav.no/components/ekspanderbartpanel) eller et [Lesmerpanel](https://design.nav.no/components/lesmerpanel) hvis attributten `liten="true"`.
    -   Krever attributten `intro: string`
    -   Kan inneholde andre tags som `<avsnitt>`, `<liste>` osv.

-   `<lenke>`

    -   Rendrer til en a-tag med NAV-frontend-stil
    -   Krever attributten `url: string`
    -   Tar inn et valgfri attributt `ekstern: boolean`

-   Andre tags
    -   `<b>`: Fet tekst
    -   `<i>`: Kursiv tekst

### Eksempler:

```xml
<innhold>
    <avsnitt type="undertittel">Dette er en innholdsfil!</avsnitt>
    <avsnitt>Dette blir tolket som et avsnitt med riktig typografi fra NAV-frontend</avsnitt>
</innhold>
```

Avansert eksempel: Se ([src/content/dokumentasjon/dokumentasjon.xml](https://github.com/navikt/foreldrepenger-inngang/blob/master/src/content/dokumentasjon/dokumentasjon.xml).

### Testing av XML-filer

Det er lagt inn tester (`npm run test`) som prøver å tolke XML-filene med parseren og sier i fra om det skjedde noe galt.

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan rettes mot nav.team.bris@nav.no.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #bris.

### Icon License

This project uses [Streamline Icons](http://www.streamlineicons.com/). If you use nav-frontend-moduler in your project please adhere to the [Streamline Icons license agreement](http://www.streamlineicons.com/license.html)
