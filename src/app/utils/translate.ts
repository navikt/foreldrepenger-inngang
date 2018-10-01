// TODO: Implementer i18n
const translations = {
    no: {
        informasjonstavle_tittel:
            'Foreldrepenger, engangsstønad og svangerskapspenger',
        informasjonstavle_ingress:
            'Her finner du all informasjon for både fødsel og adopsjon.',

        informasjonstavle_veileder:
            'For å kunne se status på en tidligare innsendt søknad eller endre eller klage på en eksisterende sak så trenger du å logge inn.',

        logg_inn: 'Logg inn',

        hvor_lenge_kan_du_få_permisjon: 'Hvor lenge kan du ha permisjon?',
        hvor_lenge_kan_du_få_permisjon_body:
            'Foreldrepengeplanleggeren gir deg svar på det meste.',
        gå_rett_til_søknaden: 'Gå rett til søknaden',
        gå_rett_til_søknaden_body:
            'Ikke nøl, søk om foreldrepenger, engangsstønad eller svangerskapspenger her!',

        mer_informasjon_tittel: 'All informasjon om',
        mer_informasjon_foreldrepenger:
            'Foreldrepenger skal erstatte inntekten din når du skal ha foreldrepermisjon.  Her kan du lese alt om ytelsen.',
        mer_informasjon_engangsstønad:
            'Har du ikke hatt inntekt de siste året kan du får en engangssum. Dette skal hjelpe deg i rollen som forelder.',
        mer_informasjon_svangerskapspenger:
            'Friske, gravide kvinner som ikke kan fortsette å jobbe under svangerskapet fordi det kan medføre risiko for skade på fosteret.',

        // Route translations
        route_: 'Foreldrepenger, engangsstønad og svangerskapspenger',
        'route_hva-soker-du': 'Hva vil du søke om',
        'route_om-foreldrepenger': 'Om foreldrepenger',
        'route_om-engangsstonad': 'Om engangsstønad',
        route_foreldrepenger: 'Foreldrepenger',
        hva_er_engangsstønad: 'Hva er engangsstønad?',

        hva_vil_du_søke_om: 'Hva vil du søke om?',
        ingen_elektronisk_id: 'Jeg har ikke elektronisk ID',

        foreldrepenger: 'Foreldrepenger',
        foreldrepenger_beskrivelse:
            'Har du hatt inntekt eller ytelser fra NAV kan du få foreldrepenger når du er hjemme med barnet ditt. ',
        foreldrepenger_les_mer: 'Les mer om hvem som kan få foreldrepenger',
        søk_foreldrepenger: 'Søk om foreldrepenger',
        har_søkt_foreldrepenger: 'Jeg har allerede søkt',
        foreldrepenger_inngang:
            'Du kan tidligst sende inn søknad seks uker før du skal ta ut foreldrepengene dine. Skal du vente med å ta ut foreldrepengene dine, gjelder dette også deg.',
        begynn_søknad_om_foreldrepenger: 'Begynn søknad om foreldrepenger',
        når_starter_du: 'Når er første dag med uttak eller utsettelse?',
        ugyldig_dato_for_foreldrepenger:
            'Du søker tidligere enn 6 uker før du skal ta ut foreldrepenger. Du kan begynne på søknaden, det vil ikke være mulig å sende den inn før ',

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

        søk_svangerskapspenger: 'Søk om svangerskapspenger',
        hva_har_du_rett_på: 'Hva har du rett på?',
        Hva_har_du_rett_på_body:
            'Er det foreldrepenger eller engangsstønad du skal søke om? Bruk veilederen for å finne ut!',

        all_informasjon_foreldrepenger: 'All informasjon om foreldrepenger',
        all_informasjon_engangsstønad: 'All informasjon om engangsstønad',
        for_å_få_foreldrepenger: 'For å få foreldrepenger',
        for_å_få_foreldrepenger_ingress:
            'Hvis du har vært i jobb eller hatt annen inntekt, kan du få foreldrepenger når du skal være hjemme i foreldrepermisjon.',
        for_å_få_foreldrepenger_ingress2:
            'Vanligvis er det tre krav må du fylle for å få foreldrepenger. Men det er noen unntak du må være klar over.',
        snarvei_til_søknad:
            'Du kan også søke med nå med en gang :) Husk å ha bankID eller liknende klart før du søker!',
        søk_om_foreldrepenger: 'Søk om foreldrepenger',
        hva_er_foreldrepenger: 'Hva er foreldrepenger?',
        hva_er_foreldrepenger_ingress:
            'Foreldrepenger skal erstatte inntekten din når du skal ha foreldrepermisjon. Foreldrepengene kan tas sammenhengende eller kombineres med arbeid eller ferie, men må tas ut før barnet blir 3 år.',

        jeg_vil_jobbe: 'Jeg vil jobbe',
        beregning: 'Beregning',
        ferie: 'Ferie',
        hjemme_samtidig: 'Hjemme samtidig',
        adopsjon_og_arbeidsgiver: 'Adopsjon og arbeidsgiver',
        sykdom: 'Sykdom',
        jeg_har_inntekt: 'Jeg har inntekt',
        arbeidsgiver: 'Arbeidsgiver',

        jeg_har_hatt_inntekt: 'Jeg har hatt inntekt',

        // For å få foreldrepenger
        jeg_har_hatt_inntekt_6_av_10_siste_mnd:
            'Jeg har hatt inntekt 6 av 10 siste mnd.',
        jeg_har_hatt_inntekt_6_av_10_siste_mnd_ingress:
            'Som inntekt regnes også enkelte ytelser fra NAV, arbeidsgiver eller militæret.',
        jeg_har_tjent_minst: 'Jeg har tjent minst 46 817,- i året',
        jeg_har_tjent_minst_ingress:
            'Omregnet til årsinntekt må inntekten din tilsvare et halvt grunnbeløp (G)',
        jeg_bor_i_norge: 'Jeg bor i Norge',
        jeg_bor_i_norge_ingress:
            'Bor du ikke i Norge, kan du være medlem av folketrygden på en annen måte. Se medlemskap',

        // Faner i foreldrepengekalkulator
        farOgMor: 'Far og mor',
        farOgMedfar: 'Far og medfar',
        morOgMedmor: 'Mor og medmor',
        bareFarHarRett: 'Bare far har rett',
        bareMorHarRett: 'Bare mor har rett',
        aleneomsorg: 'Aleneomsorg',
        eksempelvis_dersom_inntekt_pr_er:
            'Eksempelvis dersom inntekt per måned er',

        lengde_på_foreldreperioden: 'Lengde på foreldreperioden',
        lengde_på_foreldreperioden_body:
            'Hvor mange barn dere venter og om dere tar 100 eller 80 prosent foreldrepenger, bestemmer hvor mange uker dere kan få. Den totale utbetalingen av foreldrepengene blir høyere ved å velge 100 prosent.',

        ett_barn: 'Ett barn',
        tvillinger: 'Tvillinger',
        flere_barn: 'Flere barn',
        uker: 'uker',
        din_lønn_per_mnd_ca: 'Din lønn pr. måned (ca)',
        for_lav_lønn_feilmelding: 'For lav lønn',
        barnet_er_født: 'Barnet er født',
        nye_regler_fra_1_juli_2018: 'Nye regler fra 1. juli 2018',
        før_1_juli_2018: 'før 1. juli 2018',
        etter_1_juli_2018: 'etter 1. juli 2018',
        barnet_er_født_eller_adoptert: 'Barnet er født eller adoptert',
        nye_regler_før:
            'Av den totale foreldrepengeperioden er 10 uker øremerket hver av foreldrene (kvoten). Får dere flere barn samtidig, får dere fem eller syv uker ekstra for hvert barn mer enn ett.',
        nye_regler_etter:
            'Av den totale foreldrepengeperioden er 15 uker øremerket hver av foreldrene (kvoten). Får dere to barn samtidig, får dere 17 eller 21 uker ekstra. Får dere tre eller flere barn, får dere 46 eller 56 uker ekstra.',

        menHvaHvis: 'Men hva hvis...',

        slik_går_du_frem_ved_heltidsjobb: 'Slik går du frem ved heltidsjobb',
        slik_går_du_frem_ved_deltidsjobb: 'Slik går du frem ved deltidsjobb',
        barnet_er_innlagt: 'Barnet er innlagt',
        en_av_foreldrene_er_syk: 'En av foreldrene er syke',

        din_situasjon: 'Din situasjon:',
        slik_går_du_frem_for_å_utsette: 'Slik går du frem for å utsette',

        // Sub-faner i foreldrepengekalkulator

        // header
        subFanerHeader: 'Slik er permisjonen delt mellom dere',

        // Mors-del
        'farOgMor.subFaner.Morsdel.linjeEn':
            'De første ukene må mor ta ut etter fødselen. De siste fire ukene kan hun ta ut rett etterpå eller pare til senere',
        'farOgMor.subFamer.Morsdel.linjeTo':
            ' dere, kan mor ta ut sin del når som helst etter adopsjonsdatoen.',
        'farOgMor.subFaner.Morsdel.linjeTreDelEn': 'Hvis mor er så ',
        'farOgMor.subFaner.Morsdel.linjeTreDelTre':
            ' at hun er helt avhengig av hjelp til å ta seg av barnet, kan far eller medmor overta permisjonen.',

        'farOgMor.subFaner.Morsdel.linkEn': 'Adopterer',
        'farOgMor.subFaner.Morsdel.linkTo': 'Syk',

        // Felles-del
        'farOgMor.subFaner.fellesDel.linjeEn':
            'Fellesdelen er permisjonsukene som dere kan dele',
        'farOgMor.subFaner.fellesDel.linjeTo':
            'Når far tar ut foreldrepenger fra fellesdelen, må mor være i jobb, studere eller i annen aktivitet.',

        'farOgMor.subFaner.fellesDel.linjeTreDelEn': 'Aktivitetskravene',
        'farOgMor.subFaner.fellesDel.linjeTreDelTo': ' til mor er å enten:',

        'farOgMor.subFaner.fellesDel.punktEn': 'være i arbeid',
        'farOgMor.subFaner.fellesDel.punktTo': 'ta utdanning på heltid',
        'farOgMor.subFaner.fellesDel.punktTre':
            'kombinere utdanning med arbeid som til sammen blir heltid',
        'farOgMor.subFaner.fellesDel.punktFire':
            'være helt avhengig av hjelp til å ta seg av barnet på grunn av sykdom eller skade',
        'farOgMor.subFaner.fellesDel.punktFem':
            'være innlagt på sykehus eller helseinstitusjon',
        'farOgMor.subFaner.fellesDel.punktSeks': 'delta i ',
        'farOgMor.subFaner.fellesDel.punktSeksLink': 'kvalifiseringsprogrammet',
        'farOgMor.subFaner.fellesDel.punktSyv':
            'delta på heltid i introduksjonsprogrammet etter kapittel 2. for nyankomne innvandrere',

        // Fars-del
        'farOgMor.subFaner.farsDel.linjeEnDelEn': 'Far kan ta ut sin del fra ',
        'farOgMor.subFaner.farsDel.linjeEnBold': 'uke syv etter fødselen ',
        'farOgMor.subFaner.farsDel.linjeEnDelTre':
            'eller vente til barnet er blitt litt større. Ukene kan tas samlet eller deles opp. Far må ta ut sin del senest når fellesdelen er ferdig, eller søke om utsettelse.',
        'farOgMor.subFaner.farsDel.linjeTo':
            'Adopterer dere, kan far ta ut sin del når som helst etter ',
        'farOgMor.subFaner.farsDel.linjeToLink': 'adopsjonsdatoen.',

        'farOgMor.subFaner.farsDel.linjeTreDelEn': 'Mor kan ',
        'farOgMor.subFaner.farsDel.linjeTreBold': 'overta fars ',
        'farOgMor.subFaner.farsDel.LinjeTreDelTre':
            'del hvis han er så syk at han er helt avhengig av hjelp til å ta seg av',

        // Arbeidsgiver
        arbeidsgiver_tittel: 'Arbeidsgiver',
        arbeid_skjema_for_inntektsopplysninger_link:
            'Skjema for inntektsopplysninger for arbeidstaker (pdf)',
        arbeid_for_refusjoner_fra_nav_link:
            'Bankkontonummer for refusjoner fra NAV til arbeidsgiver',

        slik_blir_permisjonen_delt_mellom_dere:
            'Slik blir permisjonen delt mellom dere',
        slik_blir_din_permisjon: 'Slik blir din permisjon',

        // Ferie
        eksempel_på_utsettelse_ved_uttak_av_ferie:
            'Eksempel på utsettelse ved uttak av ferie',
        et_annet_eksempel_på_forskyving_av_perioder:
            'Et annet eksempel på forskyving av perioder',
        ferie_som_gir_rett_til_utsettelse: 'Ferie som gir rett til utsettelse',
        slik_går_du_frem_for_å_overta: 'Slik går du frem for å overta',

        // Adopsjon
        adopsjon: 'Adopsjon',
        når_starter_foreldrepengeperioden: 'Når starter foreldrepengeperioden',
        hvor_lenge_kan_du_få_foreldrepenger:
            'Hvor lenge kan du få foreldrepenger',
        adopterer_dere_flere_barn: 'Adopterer dere flere barn?',
        adopsjon_som_ikke_gir_rett: 'Adopsjon som ikke gir rett',

        når_kan_du_få_engangsstønad: 'Når kan du få engangsstønad?',
        utbetaling: 'Utbetaling',
        søknadsfrist: 'Søknadsfrist',
        fødsel: 'Fødsel',

        antatt_saksbehandlingstid: 'Antatt saksbehandlingstid',
        kontakt_oss: 'Kontakt oss',
        utbetalinger: 'Utbetalinger',
        foreldrepenger_hvis_utland: 'Foreldrepenger hvis utland',
        meld_fra_om_endringer: 'Meld fra om endringer',
        viktige_frister: 'Viktige frister',
        klager: 'Klager',
        regelverk: 'Regelverk',
        andre_lenker: 'Andre lenker'
    }
};

const translate = (s: string) => translations.no[s] || `**${s}**`;
export default translate;
