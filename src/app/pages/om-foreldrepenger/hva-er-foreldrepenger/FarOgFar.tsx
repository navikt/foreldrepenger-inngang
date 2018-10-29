import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';

import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl, getTranslation } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';

const farOgFarContent = 'all-informasjon/hva-er-foreldrepenger/far-og-far/far-og-far';
const farOgFarContent2 = 'all-informasjon/hva-er-foreldrepenger/far-og-far/far-og-far-del2';
const farOgFarFane = 'all-informasjon/hva-er-foreldrepenger/far-og-far/far-og-far-fane';

const getInformasjonsfaner = (lang: Language) => [
    {
        faneLabel: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fellesperiode', lang),
        faneIcon: false,
        bodyProps: {
            tittel: '',
            icon: <Foreldrepar firstParent="far4" secondParent="far2" variant={4} />,
            antallUker: '46/56',
            component: <StrukturertTekst tekst={getContent(farOgFarFane, lang)} />
        }
    }
];

const FarOgFar = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(farOgFarContent, lang)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(lang)}
                title={getTranslation('om_foreldrepenger.hvor_lenge.fordeling.tittel', lang)}
            />
            <StrukturertTekst tekst={getContent(farOgFarContent2, lang)} />
            <Kalkulator />
        </div>
    );
};

export default withIntl(FarOgFar);
