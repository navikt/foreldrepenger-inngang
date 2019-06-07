import Environment from '../Environment';

const externalUrls = {
    facebook: 'http://www.facebook.com/navforeldrepenger',
    chat:
        'https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Relatert+informasjon/chat-med-oss-om-foreldrepenger',
    telefon:
        'https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Kontakt+oss/kontakt-nav-p%C3%A5-telefon',

    søk_svangerskapspenger:
        'https://www.nav.no/no/Person/Familie/Venter+du+barn/svangerskapspenger#chapter-3',

    les_mer_foreldrepenger:
        'https://www.nav.no/no/Person/Familie/Venter+du+barn/foreldrepenger--347653',
    les_mer_engangsstønad:
        'https://www.nav.no/no/Person/Familie/Venter+du+barn/engangsst%C3%B8nad-ved-f%C3%B8dsel-og-adopsjon',
    les_mer_svangerskapspenger:
        'https://www.nav.no/no/Person/Familie/Relatert+informasjon/svangerskapspenger',

    foreldrepengeplanlegger: 'https://foreldrepengeplanlegger.nav.no/foreldrepengeplanlegger'
};

export type Søknadstyper =
    | 'svangerskapspenger'
    | 'foreldrepenger'
    | 'engangsstønad'
    | 'planleggeren';

export const getSøknadsurl = (søknad: Søknadstyper, papir?: boolean): string => {
    switch (søknad) {
        case 'engangsstønad':
            return papir
                ? Environment.SOK_ENGANGSSTONAD_PAPIR_URL
                : Environment.SOK_ENGANGSSTONAD_URL;
        case 'foreldrepenger':
            return papir
                ? Environment.SOK_FORELDREPENGER_PAPIR_URL
                : Environment.SOK_FORELDREPENGER_URL;
        case 'svangerskapspenger':
            return papir
                ? Environment.SOK_SVANGERSKAPSPENGER_PAPIR_URL
                : Environment.SOK_SVANGERSKAPSPENGER_URL;
        case 'planleggeren':
            return Environment.PLANLEGGEREN_URL;
    }
};

export default externalUrls;
