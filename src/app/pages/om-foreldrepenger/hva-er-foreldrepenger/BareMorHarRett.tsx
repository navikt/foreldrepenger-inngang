import * as React from 'react';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl, getTranslation } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';

const content = 'all-informasjon/hva-er-foreldrepenger/bare-mor-har-rett/bare-mor-har-rett';
const kalkulatorbeskrivelse = 'all-informasjon/hva-er-foreldrepenger/kalkulatorbeskrivelse';
const morsDel = 'all-informasjon/hva-er-foreldrepenger/bare-mor-har-rett/mors-del';

const getInformasjonsfaner = (lang: Language) => [
    {
        faneLabel: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.mødrekvote', lang),
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'mor1',
            antallUker: '49/59',
            punktliste: [],
            component: <StrukturertTekst tekst={getContent(morsDel, lang)} />
        }
    }
];

const BareMorHarRett = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <Informasjonsfaner tabs={getInformasjonsfaner(lang)} />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, lang)} />
        </div>
    );
};

export default withIntl(BareMorHarRett);
