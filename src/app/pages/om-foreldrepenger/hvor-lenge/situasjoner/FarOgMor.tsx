import * as React from 'react';
import { addAntallUkerSomSnakkebobletittel } from './utils';

import { injectIntl, InjectedIntl, InjectedIntlProps } from 'react-intl';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
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
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.ingen_krav', intl, {
                        subjekt: getTranslation('far', intl)
                    })
                ]
            },
            component: <Innhold source={getSource(morsdel, intl)} />
        }
    },
    {
        kvote: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fedrekvote', intl),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: 'far1',
                punkter: [
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.ingen_krav', intl, {
                        subjekt: getTranslation('mor', intl)
                    })
                ]
            },
            component: <Innhold source={getSource(farsdel, intl)} />
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
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav', intl, {
                        subjekt: getTranslation('mor', intl)
                    })
                ]
            },
            component: <Innhold source={getSource(fellesdel, intl)} />
        }
    }
];

const FarOgMor = ({ intl }: InjectedIntlProps) => {
    return (
        <div>
            <Innhold source={getSource(farOgMorContent, intl)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(intl).map(
                    addAntallUkerSomSnakkebobletittel('farOgMor', intl)
                )}
            />
            <Innhold source={getSource(kalkulatorbeskrivelse, intl)} />
        </div>
    );
};

export default injectIntl(FarOgMor);
