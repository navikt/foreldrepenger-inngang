import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Language, withIntl } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';

const content = 'all-informasjon/hva-er-foreldrepenger/bare-far-har-rett/bare-far-har-rett.json';
const farsDel = 'all-informasjon/hva-er-foreldrepenger/bare-far-har-rett/fars-del.json';

const getInformasjonsfaner = (lang: Language) => [
    {
        faneLabel: 'Fars del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til far',
            icon: 'far1',
            antallUker: '40/50',
            punktliste: ['Aktivitetskrav til mor'],
            component: <StrukturertTekst tekst={getContent(farsDel, lang)} />
        }
    }
];

const BareFarHarRett = ({ lang }: { lang: Language }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <Kalkulator />
            <Informasjonsfaner tabs={getInformasjonsfaner(lang)} />
        </div>
    );
};

export default withIntl(BareFarHarRett);
