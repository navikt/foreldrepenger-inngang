import * as React from 'react';
import Informasjonsfaner from '../informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import Foreldrepar from '../../../../components/foreldrepar/Foreldrepar';
import { Language, withIntl, getTranslation } from '../../../../intl/intl';
import { getContent } from '../../../../utils/getContent';

const content = 'all-informasjon/hvor-lenge/mor-og-mor/mor-og-mor';
const kalkulatorbeskrivelse = 'all-informasjon/hvor-lenge/kalkulatorbeskrivelse';
const morsDel = 'all-informasjon/hvor-lenge/mor-og-mor/mors-del';
const medmorsDel = 'all-informasjon/hvor-lenge/mor-og-mor/medmors-del';
const fellesDel = 'all-informasjon/hvor-lenge/mor-og-mor/felles-del';

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
                getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.morOgMor_krav', lang)
            ],
            component: <StrukturertTekst tekst={getContent(morsDel, lang)} />
        }
    },
    {
        value: 'medmorkvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.medmorkvote', lang),
        icon: true,
        body: {
            tittel: 'til medmor',
            icon: 'medmor2',
            antallUker: '15',
            punktliste: [
                getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.som_far', lang)
            ],
            component: <StrukturertTekst tekst={getContent(medmorsDel, lang)} />
        }
    },
    {
        value: 'fellesperiode',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fellesperiode', lang),
        icon: false,
        body: {
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
            <Informasjonsfaner tabs={getInformasjonsfaner(lang)} />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, lang)} />
        </div>
    );
};

export default withIntl(MorOgMor);
