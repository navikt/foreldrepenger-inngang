import * as React from 'react';
import Informasjonsfaner, { InformasjonsfaneProps } from '../informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl, getTranslation } from '../../../../intl/intl';
import { getContent } from '../../../../utils/getContent';
import { addAntallUkerSomSnakkebobletittel } from './utils';

const content = 'om-foreldrepenger/hvor-lenge/bare-mor-har-rett/bare-mor-har-rett';
const kalkulatorbeskrivelse = 'om-foreldrepenger/hvor-lenge/kalkulatorbeskrivelse';
const morsDel = 'om-foreldrepenger/hvor-lenge/bare-mor-har-rett/mors-del';

const getInformasjonsfaner = (lang: Language): InformasjonsfaneProps[] => [
    {
        kvote: 'mødrekvote',
        label: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.mødrekvote', lang),
        innhold: {
            snakkeboble: {
                tittel: 'til mor',
                icon: 'mor1',
                punkter: [
                    getTranslation(
                        'om_foreldrepenger.hvor_lenge.fordeling.i_tillegg_til_foreldrepenger',
                        lang
                    )
                ]
            },
            component: <StrukturertTekst tekst={getContent(morsDel, lang)} />
        }
    }
];

const BareMorHarRett = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <Informasjonsfaner
                tabs={getInformasjonsfaner(lang).map(
                    addAntallUkerSomSnakkebobletittel('bareMorHarRett', lang)
                )}
            />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, lang)} />
        </div>
    );
};

export default withIntl(BareMorHarRett);
