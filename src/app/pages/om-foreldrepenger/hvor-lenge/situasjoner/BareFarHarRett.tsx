import * as React from 'react';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl, getTranslation } from '../../../../intl/intl';
import { getContent } from '../../../../utils/getContent';
import { addAntallUkerSomSnakkebobletittel } from './utils';

const content = 'om-foreldrepenger/hvor-lenge/bare-far-har-rett/bare-far-har-rett';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';
const farsDel = 'om-foreldrepenger/hvor-lenge/bare-far-har-rett/fars-del';

const getInformasjonsfaner = (lang: Language): InformasjonsfaneProps[] => [
    {
        kvote: 'fedrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fedrekvote', lang),
        innhold: {
            snakkeboble: {
                tittel: 'til far',
                icon: 'far3',
                punkter: [
                    `${getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.krav.aktivitetskrav_til',
                        lang
                    )} mor`
                ]
            },
            component: <StrukturertTekst tekst={getContent(farsDel, lang)} />
        }
    }
];

const BareFarHarRett = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(lang).map(
                    addAntallUkerSomSnakkebobletittel('bareFarHarRett', lang)
                )}
            />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, lang)} />
        </div>
    );
};

export default withIntl(BareFarHarRett);
