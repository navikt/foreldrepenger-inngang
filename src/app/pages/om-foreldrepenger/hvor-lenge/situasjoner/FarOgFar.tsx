import * as React from 'react';
import Informasjonsfaner from '../informasjons-faner/Informasjonsfaner';

import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl, getTranslation } from '../../../../intl/intl';
import { getContent } from '../../../../utils/getContent';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';

const farOgFarContent = 'om-foreldrepenger/hvor-lenge/far-og-far/far-og-far';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';

const far1 = 'om-foreldrepenger/hvor-lenge/far-og-far/far-en';
const far2 = 'om-foreldrepenger/hvor-lenge/far-og-far/far-to';
const fellesPerioden = 'om-foreldrepenger/hvor-lenge/far-og-far/far-fellesperioden';

const getInformasjonsfaner = (lang: Language) => [
    {
        value: 'første_fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.første_fedrekvote', lang),
        icon: true,
        body: {
            tittel: ' uker til hvis surrogati',
            icon: 'far4',
            antallUker: '45/56',
            punktliste: [getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.far1', lang)],
            component: <StrukturertTekst tekst={getContent(far1, lang)} />
        }
    },
    {
        value: 'andre_fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.andre_fedrekvote', lang),
        icon: true,
        body: {
            tittel: ' uker til hvis adopsjon',
            icon: 'far2',
            antallUker: '15',
            punktliste: [getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.far2', lang)],
            component: <StrukturertTekst tekst={getContent(far2, lang)} />
        }
    },
    {
        value: 'fellesperiode',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fellesperiode', lang),
        icon: false,
        body: {
            tittel: '',
            icon: <Foreldrepar firstParent="far4" secondParent="far2" variant={4} />,
            antallUker: '16/26 uker til hvis adopsjon',
            punktliste: [
                getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.fellesPerioden', lang)
            ],
            component: <StrukturertTekst tekst={getContent(fellesPerioden, lang)} />
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
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, lang)} />
        </div>
    );
};

export default withIntl(FarOgFar);
