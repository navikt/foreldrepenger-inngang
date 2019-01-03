import * as React from 'react';
import { addAntallUkerSomSnakkebobletittel } from './utils';
import { getContent } from '../../../../utils/getContent';
import { injectIntl, InjectedIntl, InjectedIntlProps } from 'react-intl';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import getTranslation from 'app/utils/i18nUtils';

const farOgMorContent = 'om-foreldrepenger/hvor-lenge/far-og-mor/far-og-mor';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';
const morsdel = 'om-foreldrepenger/hvor-lenge/far-og-mor/mors-del';
const fellesdel = 'om-foreldrepenger/hvor-lenge/far-og-mor/felles-del';
const farsdel = 'om-foreldrepenger/hvor-lenge/far-og-mor/fars-del';

const getInformasjonsfaner = (intl: InjectedIntl): InformasjonsfaneProps[] => [
    {
        kvote: 'mødrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.mødrekvote', intl),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: 'mor2',
                punkter: [
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.tre_uker_før_fødsel',
                        intl
                    ),
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.default', intl)
                ]
            },
            component: <StrukturertTekst tekst={getContent(morsdel, intl)} />
        }
    },
    {
        kvote: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fedrekvote', intl),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: 'far1',
                punkter: [getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.far', intl)]
            },
            component: <StrukturertTekst tekst={getContent(farsdel, intl)} />
        }
    },
    {
        kvote: 'fellesperiode',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fellesperiode', intl),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: <Foreldrepar variant={4} firstParent="mor2" secondParent="far1" />,
                punkter: [
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.krav.aktivitetskrav_til.felles',
                        intl
                    )
                ]
            },
            component: <StrukturertTekst tekst={getContent(fellesdel, intl)} />
        }
    }
];

const FarOgMor = ({ intl }: InjectedIntlProps) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(farOgMorContent, intl)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(intl).map(
                    addAntallUkerSomSnakkebobletittel('farOgMor', intl)
                )}
            />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, intl)} />
        </div>
    );
};

export default injectIntl(FarOgMor);
