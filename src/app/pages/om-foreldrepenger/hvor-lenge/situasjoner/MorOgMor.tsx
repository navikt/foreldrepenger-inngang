import * as React from 'react';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import Foreldrepar from '../../../../components/foreldrepar/Foreldrepar';
import { Language, withIntl, getTranslation } from '../../../../intl/intl';
import { getContent } from '../../../../utils/getContent';
import { addAntallUkerSomSnakkebobletittel } from './utils';

const content = 'om-foreldrepenger/hvor-lenge/mor-og-mor/mor-og-mor';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';
const morsDel = 'om-foreldrepenger/hvor-lenge/mor-og-mor/mors-del';
const medmorsDel = 'om-foreldrepenger/hvor-lenge/mor-og-mor/medmors-del';
const fellesDel = 'om-foreldrepenger/hvor-lenge/mor-og-mor/felles-del';

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
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.krav.morOgMor_krav',
                        lang
                    )
                ]
            },
            component: <StrukturertTekst tekst={getContent(morsDel, lang)} />
        }
    },
    {
        kvote: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.medmorkvote', lang),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: 'medmor2',
                punkter: [
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.som_far', lang)
                ]
            },
            component: <StrukturertTekst tekst={getContent(medmorsDel, lang)} />
        }
    },
    {
        kvote: 'fellesperiode',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fellesperiode', lang),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" variant={4} />,
                punkter: [
                    `${getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.krav.aktivitetskrav_til',
                        lang
                    )} mor`
                ]
            },
            component: <StrukturertTekst tekst={getContent(fellesDel, lang)} />
        }
    }
];

const MorOgMor = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(lang).map(
                    addAntallUkerSomSnakkebobletittel('morOgMor', lang)
                )}
            />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, lang)} />
        </div>
    );
};

export default withIntl(MorOgMor);
