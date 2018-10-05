import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';

const content = 'all-informasjon/hva-er-foreldrepenger/aleneomsorg/aleneomsorg.json';
const farsDel = 'all-informasjon/hva-er-foreldrepenger/aleneomsorg/fars-del.json';
const morsDel = 'all-informasjon/hva-er-foreldrepenger/aleneomsorg/mors-del.json';

const getInformasjonsfaner = (lang: Language) => [
    {
        faneLabel: 'Som mor',
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
        faneLabel: 'Som far',
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
