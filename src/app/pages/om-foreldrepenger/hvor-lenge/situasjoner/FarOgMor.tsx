import * as React from 'react';
import Informasjonsfaner from '../informasjons-faner/Informasjonsfaner';

import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl, getTranslation } from '../../../../intl/intl';
import { getContent } from '../../../../utils/getContent';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';

const farOgMorContent = 'all-informasjon/hvor-lenge/far-og-mor/far-og-mor';
const kalkulatorbeskrivelse = 'all-informasjon/hvor-lenge/kalkulatorbeskrivelse';
const morsdel = 'all-informasjon/hvor-lenge/far-og-mor/mors-del';
const fellesdel = 'all-informasjon/hvor-lenge/far-og-mor/felles-del';
const farsdel = 'all-informasjon/hvor-lenge/far-og-mor/fars-del';

const getInformasjonsfaner = (lang: Language) => [
    {
        value: 'mødrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.mødrekvote', lang),
        icon: true,
        body: {
            tittel: 'til mor',
            icon: 'mor2',
            antallUker: '15',
            punktliste: [
                getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.default', lang)
            ],
            component: <StrukturertTekst tekst={getContent(morsdel, lang)} />
        }
    },
    {
        value: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fedrekvote', lang),
        icon: true,
        body: {
            tittel: 'til far',
            icon: 'far1',
            antallUker: '15',
            punktliste: [getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.far', lang)],
            component: <StrukturertTekst tekst={getContent(farsdel, lang)} />
        }
    },
    {
        value: 'fellesperiode',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fellesperiode', lang),
        icon: false,
        body: {
            tittel: 'til begge',
            icon: <Foreldrepar variant={4} firstParent="mor2" secondParent="far1" />,
            antallUker: '16/26',
            punktliste: [
                getTranslation(
                    'om_foreldrepenger.hvor_lenge.fordeling.krav.aktivitetskrav_til.felles',
                    lang
                )
            ],
            component: <StrukturertTekst tekst={getContent(fellesdel, lang)} />
        }
    }
];

const FarOgMor = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(farOgMorContent, lang)} />
            <Informasjonsfaner tabs={getInformasjonsfaner(lang)} />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, lang)} />
        </div>
    );
};

export default withIntl(FarOgMor);
