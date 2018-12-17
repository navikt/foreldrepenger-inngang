import * as React from 'react';
import { addAntallUkerSomSnakkebobletittel } from './utils';
import { getContent } from '../../../../utils/getContent';
import { Language, withIntl, getTranslation } from '../../../../intl/intl';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';

const farOgMorContent = 'om-foreldrepenger/hvor-lenge/far-og-mor/far-og-mor';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';
const morsdel = 'om-foreldrepenger/hvor-lenge/far-og-mor/mors-del';
const fellesdel = 'om-foreldrepenger/hvor-lenge/far-og-mor/felles-del';
const farsdel = 'om-foreldrepenger/hvor-lenge/far-og-mor/fars-del';

const getInformasjonsfaner = (lang: Language): InformasjonsfaneProps[] => [
    {
        kvote: 'mødrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.mødrekvote', lang),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: 'mor2',
                punkter: [
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.tre_uker_før_fødsel',
                        lang
                    ),
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.default', lang)
                ]
            },
            component: <StrukturertTekst tekst={getContent(morsdel, lang)} />
        }
    },
    {
        kvote: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fedrekvote', lang),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: 'far1',
                punkter: [getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.far', lang)]
            },
            component: <StrukturertTekst tekst={getContent(farsdel, lang)} />
        }
    },
    {
        kvote: 'fellesperiode',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fellesperiode', lang),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: <Foreldrepar variant={4} firstParent="mor2" secondParent="far1" />,
                punkter: [
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.krav.aktivitetskrav_til.felles',
                        lang
                    )
                ]
            },
            component: <StrukturertTekst tekst={getContent(fellesdel, lang)} />
        }
    }
];

const FarOgMor = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(farOgMorContent, lang)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(lang).map(
                    addAntallUkerSomSnakkebobletittel('farOgMor', lang)
                )}
            />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, lang)} />
        </div>
    );
};

export default withIntl(FarOgMor);
