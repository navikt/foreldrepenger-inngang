import { getAntallUker, Foreldresituasjon } from 'app/utils/foreldresituasjon';
import { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import getTranslation from 'app/utils/i18nUtils';
import { IntlShape } from 'react-intl';

export const addAntallUkerSomSnakkebobletittel = (foreldresituasjon: Foreldresituasjon, intl: IntlShape) => (
    fane: InformasjonsfaneProps
) => {
    const antallUker100 = getAntallUker(foreldresituasjon, fane.kvote, 'dekning100');
    const antallUker80 = getAntallUker(foreldresituasjon, fane.kvote, 'dekning80');

    return {
        ...fane,
        innhold: {
            ...fane.innhold,
            snakkeboble: {
                ...fane.innhold.snakkeboble,
                tittel: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.snakkeboble.tittel', intl, {
                    antallUker100,
                    antallUker80,
                }),
            },
        },
    };
};
