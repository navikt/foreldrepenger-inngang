import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import { Language, withIntl, getTranslation } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';

const content = 'all-informasjon/hva-er-foreldrepenger/mor-og-mor/mor-og-mor';
const morsDel = 'all-informasjon/hva-er-foreldrepenger/mor-og-mor/mors-del';
const medmorsDel = 'all-informasjon/hva-er-foreldrepenger/mor-og-mor/medmors-del';
const fellesDel = 'all-informasjon/hva-er-foreldrepenger/mor-og-mor/felles-del';

const getInformasjonsfaner = (lang: Language) => [
    {
        faneLabel: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.mødrekvote', lang),
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'mor2',
            antallUker: '15',
            punktliste: [
                getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.ingen_krav', lang),
                `${getTranslation(
                    'om_foreldrepenger.hvor_lenge.fordeling.krav.kan_ikke_overtas_av',
                    lang
                )} medmor`
            ],
            component: <StrukturertTekst tekst={getContent(morsDel, lang)} />
        }
    },
    {
        faneLabel: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.medmorkvote', lang),
        faneIcon: true,
        bodyProps: {
            tittel: 'til medmor',
            icon: 'medmor2',
            antallUker: '15',
            punktliste: [
                getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.ingen_krav', lang),
                `${getTranslation(
                    'om_foreldrepenger.hvor_lenge.fordeling.krav.kan_ikke_overtas_av',
                    lang
                )} mor`
            ],
            component: <StrukturertTekst tekst={getContent(medmorsDel, lang)} />
        }
    },
    {
        faneLabel: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fellesperiode', lang),
        faneIcon: false,
        bodyProps: {
            tittel: 'til begge',
            icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" variant={4} />,
            antallUker: '16/26',
            punktliste: [
                `${getTranslation(
                    'om_foreldrepenger.hvor_lenge.fordeling.krav.aktivitetskrav_til',
                    lang
                )} mor`
            ],
            component: <StrukturertTekst tekst={getContent(fellesDel, lang)} />
        }
    }
];

const MorOgMor = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <Kalkulator />
            <Informasjonsfaner tabs={getInformasjonsfaner(lang)} />
        </div>
    );
};

export default withIntl(MorOgMor);
