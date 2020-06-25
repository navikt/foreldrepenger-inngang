import * as React from 'react';

import { IntlShape, useIntl } from 'react-intl';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import { addAntallUkerSomSnakkebobletittel } from './utils';
import getTranslation from 'app/utils/i18nUtils';

const farOgFarContent = 'om-foreldrepenger/hvor-lenge/far-og-far/far-og-far';
const farOgFarBeskrivelse = 'om-foreldrepenger/hvor-lenge/far-og-far/far-og-far-beskrivelse';
const far1 = 'om-foreldrepenger/hvor-lenge/far-og-far/far-en';
const far2 = 'om-foreldrepenger/hvor-lenge/far-og-far/far-to';
const fellesPerioden = 'om-foreldrepenger/hvor-lenge/far-og-far/far-fellesperioden';

const getInformasjonsfaner = (intl: IntlShape): InformasjonsfaneProps[] => [
    {
        kvote: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.første_fedrekvote', intl),
        innhold: {
            snakkeboble: {
                tittel: '',
                punkter: [
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.ingen_krav', intl, {
                        subjekt: getTranslation('far2', intl),
                    }),
                ],
                icon: 'far4',
            },
            component: <Innhold source={getSource(far1, intl)} />,
        },
    },
    {
        kvote: 'mødrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.andre_fedrekvote', intl),
        innhold: {
            snakkeboble: {
                tittel: '',
                icon: 'far2',
                punkter: [
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.kan_ikke_overta', intl, {
                        subjekt: getTranslation('far1', intl),
                    }),
                ],
            },
            component: <Innhold source={getSource(far2, intl)} />,
        },
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
                        getTranslation('om_foreldrepenger.hvor_lenge.fordeling.aktivitetskrav', intl, {
                            subjekt: getTranslation('far1', intl),
                        }),
                        intl
                    ),
                ],
            },
            component: <Innhold source={getSource(fellesPerioden, intl)} />,
        },
    },
];

const FarOgFar = () => {
    const intl = useIntl();

    return (
        <div>
            <Innhold source={getSource(farOgFarContent, intl)} />
            <Informasjonsfaner
                title={getTranslation('om_foreldrepenger.hvor_lenge.fordeling.tittel', intl)}
                tabs={getInformasjonsfaner(intl).map(addAntallUkerSomSnakkebobletittel('farOgFar', intl))}
            />
            <Innhold source={getSource(farOgFarBeskrivelse, intl)} />
        </div>
    );
};

export default FarOgFar;
