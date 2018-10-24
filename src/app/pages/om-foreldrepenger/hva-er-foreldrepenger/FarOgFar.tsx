import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';

import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl, getTranslation } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';

const farOgFarContent = 'all-informasjon/hva-er-foreldrepenger/far-og-far/far-og-far';
const farOgFarContent2 = 'all-informasjon/hva-er-foreldrepenger/far-og-far/far-og-far-del2';
const førsteFarsDel = 'all-informasjon/hva-er-foreldrepenger/far-og-far/far-en';
const andreFarsDel = 'all-informasjon/hva-er-foreldrepenger/far-og-far/far-to';
const fellesdel = 'all-informasjon/hva-er-foreldrepenger/far-og-far/felles-del';

const getInformasjonsfaner = (lang: Language) => [
    {
        faneLabel: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.første_fedrekvote', lang),
        faneIcon: true,
        bodyProps: {
            tittel: 'til far 1',
            icon: 'far4',
            antallUker: '15',
            punktliste: [
                getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.ingen_krav', lang),
                `${getTranslation(
                    'om_foreldrepenger.hvor_lenge.fordeling.krav.kan_ikke_overtas_av',
                    lang
                )} far 2`
            ],
            component: <StrukturertTekst tekst={getContent(førsteFarsDel, lang)} />
        }
    },
    {
        faneLabel: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.andre_fedrekvote', lang),
        faneIcon: true,
        bodyProps: {
            tittel: 'til far 2',
            icon: 'far2',
            antallUker: '15',
            punktliste: [
                getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.ingen_krav', lang),
                `${getTranslation(
                    'om_foreldrepenger.hvor_lenge.fordeling.krav.kan_ikke_overtas_av',
                    lang
                )} far 1`
            ],
            component: <StrukturertTekst tekst={getContent(andreFarsDel, lang)} />
        }
    },
    {
        faneLabel: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fellesperiode', lang),
        faneIcon: false,
        bodyProps: {
            tittel: 'til begge',
            icon: <Foreldrepar firstParent="far4" secondParent="far2" variant={4} />,
            antallUker: '16/26',
            punktliste: [
                `${getTranslation(
                    'om_foreldrepenger.hvor_lenge.fordeling.krav.aktivitetskrav_til',
                    lang
                )} far 1`
            ],
            component: <StrukturertTekst tekst={getContent(fellesdel, lang)} />
        }
    }
];

const FarOgFar = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(farOgFarContent, lang)} />
            <Informasjonsfaner tabs={getInformasjonsfaner(lang)} />
            <StrukturertTekst tekst={getContent(farOgFarContent2, lang)} />
            <Kalkulator />
        </div>
    );
};

export default withIntl(FarOgFar);
