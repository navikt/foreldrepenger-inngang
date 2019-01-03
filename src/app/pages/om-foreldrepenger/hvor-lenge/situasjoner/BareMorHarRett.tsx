import * as React from 'react';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { injectIntl, InjectedIntl, InjectedIntlProps } from 'react-intl';
import { getContent } from '../../../../utils/getContent';
import { addAntallUkerSomSnakkebobletittel } from './utils';
import getTranslation from 'app/utils/i18nUtils';

const content = 'om-foreldrepenger/hvor-lenge/bare-mor-har-rett/bare-mor-har-rett';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';
const morsDel = 'om-foreldrepenger/hvor-lenge/bare-mor-har-rett/mors-del';

const getInformasjonsfaner = (intl: InjectedIntl): InformasjonsfaneProps[] => [
    {
        kvote: 'mødrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.mødrekvote', intl),
        innhold: {
            snakkeboble: {
                tittel: 'til mor',
                icon: 'mor1',
                punkter: [
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.i_tillegg_til_foreldrepenger',
                        intl
                    )
                ]
            },
            component: <StrukturertTekst tekst={getContent(morsDel, intl)} />
        }
    }
];

const BareMorHarRett = ({ intl }: InjectedIntlProps) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, intl)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(intl).map(
                    addAntallUkerSomSnakkebobletittel('bareMorHarRett', intl)
                )}
            />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, intl)} />
        </div>
    );
};

export default injectIntl(BareMorHarRett);
