import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';

import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Language } from '../../../intl/translate';
import { getContent } from '../../../utils/getContent';
import { withLang } from '../../../intl/intl-context';

const farOgMorContent = 'all-informasjon/hva-er-foreldrepenger/far-og-mor/far-og-mor';
const morsdel = 'all-informasjon/hva-er-foreldrepenger/far-og-mor/mors-del';
const fellesdel = 'all-informasjon/hva-er-foreldrepenger/far-og-mor/felles-del';
const farsdel = 'all-informasjon/hva-er-foreldrepenger/far-og-mor/fars-del';

const getInformasjonsfaner = (lang: Language) => [
    {
        faneLabel: 'Mors del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'mor2',
            antallUker: '15',
            punktliste: ['Ingen krav til aktivitet', 'Kan ikke overtas av far'],
            component: <StrukturertTekst tekst={getContent(morsdel, lang)} />
        }
    },
    {
        faneLabel: 'Fars del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til far',
            icon: 'far1',
            antallUker: '15',
            punktliste: ['Ingen krav til aktivitet', 'Kan ikke overtas av mor'],
            component: <StrukturertTekst tekst={getContent(farsdel, lang)} />
        }
    },
    {
        faneLabel: 'Felles del',
        faneIcon: false,
        bodyProps: {
            tittel: 'til begge',
            icon: 'farOgMor2',
            antallUker: '16/26',
            punktliste: ['Aktivitetskrav til mor'],
            component: <StrukturertTekst tekst={getContent(fellesdel, lang)} />
        }
    }
];

const FarOgMor = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(farOgMorContent, lang)} />
            <Kalkulator />
            <Informasjonsfaner tabs={getInformasjonsfaner(lang)} />
        </div>
    );
};

export default withLang(FarOgMor);
