import * as React from 'react';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import { injectIntl, InjectedIntl, InjectedIntlProps } from 'react-intl';

import { addAntallUkerSomSnakkebobletittel } from './utils';
import getTranslation from 'app/utils/i18nUtils';

const content = 'om-foreldrepenger/hvor-lenge/bare-mor-har-rett/bare-mor-har-rett';
const bareMorHarRettBeskrivelse = 'om-foreldrepenger/hvor-lenge/bare-mor-har-rett/bare-mor-har-rett-beskrivelse';
const morsDel = 'om-foreldrepenger/hvor-lenge/bare-mor-har-rett/mors-del';

const getInformasjonsfaner = (intl: InjectedIntl): InformasjonsfaneProps[] => [
    {
        kvote: 'mødrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.mødrekvote', intl),
        innhold: {
            snakkeboble: {
                tittel: 'til mor',
                icon: 'mor1',
                punkter: [getTranslation('om_foreldrepenger.hvor_lenge.fordeling.i_tillegg_til_foreldrepenger', intl)]
            },
            component: <Innhold source={getSource(morsDel, intl)} />
        }
    }
];

const BareMorHarRett = ({ intl }: InjectedIntlProps) => {
    return (
        <div>
            <Innhold source={getSource(content, intl)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(intl).map(addAntallUkerSomSnakkebobletittel('bareMorHarRett', intl))}
            />
            <Innhold source={getSource(bareMorHarRettBeskrivelse, intl)} />
        </div>
    );
};

export default injectIntl(BareMorHarRett);
