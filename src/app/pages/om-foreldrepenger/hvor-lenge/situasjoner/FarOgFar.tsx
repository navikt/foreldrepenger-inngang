import * as React from 'react';

import { injectIntl, InjectedIntlProps, InjectedIntl } from 'react-intl';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import { addAntallUkerSomSnakkebobletittel } from './utils';
import getTranslation from 'app/utils/i18nUtils';

const farOgFarContent = 'om-foreldrepenger/hvor-lenge/far-og-far/far-og-far';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';
const far1 = 'om-foreldrepenger/hvor-lenge/far-og-far/far-en';
const far2 = 'om-foreldrepenger/hvor-lenge/far-og-far/far-to';
const fellesPerioden = 'om-foreldrepenger/hvor-lenge/far-og-far/far-fellesperioden';

const getInformasjonsfaner = (intl: InjectedIntl): InformasjonsfaneProps[] => [
    {
        kvote: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.første_fedrekvote', intl),
        innhold: {
            snakkeboble: {
                tittel: '',
                punkter: [getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.far1', intl)],
                icon: 'far4'
            },
            component: <Innhold source={getSource(far1, intl)} />
        }
    },
    {
        kvote: 'mødrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.andre_fedrekvote', intl),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: 'far2',
                punkter: [getTranslation('om_foreldrepenger.hvor_lenge.fordeling.krav.far2', intl)]
            },
            component: <Innhold source={getSource(far2, intl)} />
        }
    },
    {
        kvote: 'fellesperiode',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fellesperiode', intl),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: <Foreldrepar firstParent="far4" secondParent="far2" variant={4} />,
                punkter: [
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.krav.fellesPerioden',
                        intl
                    )
                ]
            },
            component: <Innhold source={getSource(fellesPerioden, intl)} />
        }
    }
];

const FarOgFar = ({ intl }: InjectedIntlProps) => {
    return (
        <div>
            <Innhold source={getSource(farOgFarContent, intl)} />
            <Informasjonsfaner
                title={getTranslation('om_foreldrepenger.hvor_lenge.fordeling.tittel', intl)}
                tabs={getInformasjonsfaner(intl).map(
                    addAntallUkerSomSnakkebobletittel('farOgFar', intl)
                )}
            />
            <Innhold source={getSource(kalkulatorbeskrivelse, intl)} />
        </div>
    );
};

export default injectIntl(FarOgFar);
