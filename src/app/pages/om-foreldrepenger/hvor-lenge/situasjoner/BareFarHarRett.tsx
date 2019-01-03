import * as React from 'react';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { injectIntl, InjectedIntl, InjectedIntlProps } from 'react-intl';
import { getContent } from '../../../../utils/getContent';
import { addAntallUkerSomSnakkebobletittel } from './utils';
import getTranslation from 'app/utils/i18nUtils';

const content = 'om-foreldrepenger/hvor-lenge/bare-far-har-rett/bare-far-har-rett';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';
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
                    `${getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.krav.aktivitetskrav_til',
                        intl
                    )} mor`
                ]
            },
            component: <StrukturertTekst tekst={getContent(farsDel, intl)} />
        }
    }
];

const BareFarHarRett = ({ intl }: InjectedIntlProps) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, intl)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(intl).map(
                    addAntallUkerSomSnakkebobletittel('bareFarHarRett', intl)
                )}
            />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, intl)} />
        </div>
    );
};

export default injectIntl(BareFarHarRett);
