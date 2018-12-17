import { getTranslation, Language } from 'app/intl/intl';
import {
    getMottakersOversettbareNavn,
    getAntallUker,
    Foreldresituasjon
} from 'app/utils/foreldresituasjon';
import { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';

export const addAntallUkerSomSnakkebobletittel = (
    foreldresituasjon: Foreldresituasjon,
    lang: Language
) => (fane: InformasjonsfaneProps) => {
    const antallUker100 = getAntallUker(foreldresituasjon, fane.kvote, 'dekning100');
    const antallUker80 = getAntallUker(foreldresituasjon, fane.kvote, 'dekning80');
    const mottakersNavn = getTranslation(
        getMottakersOversettbareNavn(foreldresituasjon, fane.kvote),
        lang
    );

    return {
        ...fane,
        innhold: {
            ...fane.innhold,
            snakkeboble: {
                ...fane.innhold.snakkeboble,
                tittel: getTranslation(
                    'om_foreldrepenger.hvor_lenge.fordeling.snakkeboble.tittel',
                    lang,
                    {
                        antallUker100,
                        mottakersNavn,
                        antallUker80
                    }
                )
            }
        }
    };
};
