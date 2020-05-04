import * as React from 'react';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import { injectIntl, InjectedIntl, InjectedIntlProps } from 'react-intl';

import { addAntallUkerSomSnakkebobletittel } from './utils';
import getTranslation from 'app/utils/i18nUtils';

const content = 'om-foreldrepenger/hvor-lenge/bare-far-har-rett/bare-far-har-rett';
const bareFarHarRettBeskrivelse =
    'om-foreldrepenger/hvor-lenge/bare-far-har-rett/bare-far-har-rett-beskrivelse';
const farsDel = 'om-foreldrepenger/hvor-lenge/bare-far-har-rett/fars-del';

const getInformasjonsfaner = (intl: InjectedIntl): InformasjonsfaneProps[] => [
    {
        kvote: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fedrekvote', intl),
        innhold: {
            snakkeboble: {
                tittel: 'til far',
                icon: 'far3',
                punkter: [
                    getTranslation('om_foreldrepenger.hvor_lenge.fordeling.aktivitetskrav', intl, {
                        subjekt: getTranslation('mor', intl)
                    })
                ]
            },
            component: <Innhold source={getSource(farsDel, intl)} />
        }
    }
];

const BareFarHarRett = ({ intl }: InjectedIntlProps) => {
    return (
        <div>
            <Innhold source={getSource(content, intl)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(intl).map(
                    addAntallUkerSomSnakkebobletittel('bareFarHarRett', intl)
                )}
            />
            <Innhold source={getSource(bareFarHarRettBeskrivelse, intl)} />
        </div>
    );
};

export default injectIntl(BareFarHarRett);
