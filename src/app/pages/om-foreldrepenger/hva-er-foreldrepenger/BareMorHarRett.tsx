import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';

const content = 'all-informasjon/hva-er-foreldrepenger/bare-mor-har-rett/bare-mor-har-rett';
const morsDel = 'all-informasjon/hva-er-foreldrepenger/bare-mor-har-rett/mors-del';

const getInformasjonsfaner = (lang: Language) => [
    {
        faneLabel: 'Mors del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'mor1',
            antallUker: '49/59',
            punktliste: ['Ingen aktivitetskrav for den andre forelderen'],
            component: <StrukturertTekst tekst={getContent(morsDel, lang)} />
        }
    }
];

const BareMorHarRett = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <Kalkulator />
            <Informasjonsfaner tabs={getInformasjonsfaner(lang)} />
        </div>
    );
};

export default withIntl(BareMorHarRett);
