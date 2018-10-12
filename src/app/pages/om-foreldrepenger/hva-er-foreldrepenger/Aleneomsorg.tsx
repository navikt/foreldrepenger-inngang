import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl, getTranslation } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';

const content = 'all-informasjon/hva-er-foreldrepenger/aleneomsorg/aleneomsorg';
const farsDel = 'all-informasjon/hva-er-foreldrepenger/aleneomsorg/fars-del';
const morsDel = 'all-informasjon/hva-er-foreldrepenger/aleneomsorg/mors-del';

const getInformasjonsfaner = (lang: Language) => [
    {
        faneLabel: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.alenemor', lang),
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'mor1',
            antallUker: '49/59',
            punktliste: [],
            component: <StrukturertTekst tekst={getContent(morsDel, lang)} />
        }
    },
    {
        faneLabel: getTranslation('om_foreldrepenger.hvor_lenge.fordeling.alenefar', lang),
        faneIcon: true,
        bodyProps: {
            tittel: 'til far',
            icon: 'far1',
            antallUker: '49/59',
            punktliste: [],
            component: <StrukturertTekst tekst={getContent(farsDel, lang)} />
        }
    }
];

const Aleneomsorg = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <Kalkulator />
            <Informasjonsfaner tabs={getInformasjonsfaner(lang)} />
        </div>
    );
};

export default withIntl(Aleneomsorg);
