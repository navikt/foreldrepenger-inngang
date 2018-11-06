import * as React from 'react';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl, getTranslation } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';

const content = 'all-informasjon/hva-er-foreldrepenger/bare-far-har-rett/bare-far-har-rett';
const kalkulatorbeskrivelse = 'all-informasjon/hva-er-foreldrepenger/kalkulatorbeskrivelse';
const farsDel = 'all-informasjon/hva-er-foreldrepenger/bare-far-har-rett/fars-del';

const getInformasjonsfaner = (lang: Language) => [
    {
        faneLabel: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.fedrekvote', lang),
        faneIcon: true,
        bodyProps: {
            tittel: 'til far',
            icon: 'far3',
            antallUker: '40/50',
            punktliste: [
                `${getTranslation(
                    'om_foreldrepenger.hvor_lenge.fordeling.krav.aktivitetskrav_til',
                    lang
                )} mor`
            ],
            component: <StrukturertTekst tekst={getContent(farsDel, lang)} />
        }
    }
];

const BareFarHarRett = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <Informasjonsfaner tabs={getInformasjonsfaner(lang)} />
            <StrukturertTekst tekst={getContent(kalkulatorbeskrivelse, lang)} />
        </div>
    );
};

export default withIntl(BareFarHarRett);
