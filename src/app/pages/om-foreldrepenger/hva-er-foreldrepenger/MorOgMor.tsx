import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import { Language } from '../../../intl/translate';
import { getContent } from '../../../utils/getContent';
import { withLang } from '../../../intl/intl-context';

const content = 'all-informasjon/hva-er-foreldrepenger/mor-og-mor/mor-og-mor';
const morsDel = 'ontent/all-informasjon/hva-er-foreldrepenger/mor-og-mor/mors-del';
const medmorsDel = 'ontent/all-informasjon/hva-er-foreldrepenger/mor-og-mor/medmors-del';
const fellesDel = 'ontent/all-informasjon/hva-er-foreldrepenger/mor-og-mor/felles-del';

const getInformasjonsfaner = (lang: Language) => [
    {
        faneLabel: 'Mors del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'mor2',
            antallUker: '15',
            punktliste: ['Ingen krav til aktivitet', 'Kan ikke overtas av den andre moren'],
            component: <StrukturertTekst tekst={getContent(morsDel, lang)} />
        }
    },
    {
        faneLabel: 'Mors del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'medmor2',
            antallUker: '15',
            punktliste: ['Ingen krav til aktivitet', 'Kan ikke overtas av mor'],
            component: <StrukturertTekst tekst={getContent(medmorsDel, lang)} />
        }
    },
    {
        faneLabel: 'Felles del',
        faneIcon: false,
        bodyProps: {
            tittel: 'til begge',
            icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" />,
            antallUker: '16/26',
            punktliste: ['Aktivitetskrav til mor'],
            component: <StrukturertTekst tekst={getContent(fellesDel, lang)} />
        }
    }
];

const MorogMor = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <Kalkulator />
            <Informasjonsfaner tabs={getInformasjonsfaner(lang)} />
        </div>
    );
};

export default withLang(MorogMor);
