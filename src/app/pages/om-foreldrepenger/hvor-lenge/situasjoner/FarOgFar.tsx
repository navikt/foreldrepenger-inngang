import * as React from 'react';
import { getContent } from '../../../../utils/getContent';
import { Language, withIntl, getTranslation } from '../../../../intl/intl';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { addAntallUkerSomSnakkebobletittel } from './utils';

const farOgFarContent = 'om-foreldrepenger/hvor-lenge/far-og-far/far-og-far';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';
const far1 = 'om-foreldrepenger/hvor-lenge/far-og-far/far-en';
const far2 = 'om-foreldrepenger/hvor-lenge/far-og-far/far-to';
const fellesPerioden = 'om-foreldrepenger/hvor-lenge/far-og-far/far-fellesperioden';

const getInformasjonsfaner = (lang: Language): InformasjonsfaneProps[] => [
    {
        kvote: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.første_fedrekvote', lang),
        innhold: {
            snakkeboble: {
                tittel: '',
                punkter: [getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.far1', lang)],
                icon: 'far4'
            },
            component: <StrukturertTekst tekst={getContent(far1, lang)} />
        }
    },
    {
        kvote: 'mødrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.andre_fedrekvote', lang),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: 'far2',
                punkter: [getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.far2', lang)]
            },
            component: <StrukturertTekst tekst={getContent(far2, lang)} />
        }
    },
    {
        kvote: 'fellesperiode',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fellesperiode', lang),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: <Foreldrepar firstParent="far4" secondParent="far2" variant={4} />,
                punkter: [
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.krav.fellesPerioden',
                        lang
                    )
                ]
            },
            component: <StrukturertTekst tekst={getContent(fellesPerioden, lang)} />
        }
    }
];

const FarOgFar = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(farOgFarContent, lang)} />
            <Informasjonsfaner
                title={getTranslation('om_foreldrepenger.hvor_lenge.fordeling.tittel', lang)}
                tabs={getInformasjonsfaner(lang).map(
                    addAntallUkerSomSnakkebobletittel('farOgFar', lang)
                )}
            />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, lang)} />
        </div>
    );
};

export default withIntl(FarOgFar);
