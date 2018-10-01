import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';

const content = require('../../../../content/all-informasjon/hva-er-foreldrepenger/bare-mor-har-rett/bare-mor-har-rett.json');
const morsDel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/bare-mor-har-rett/mors-del.json');

const informasjonsfaner = [
    {
        faneLabel: 'Mors del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'mor1',
            antallUker: '49/59',
            punktliste: ['Ingen aktivitetskrav for den andre forelderen'],
            component: <StrukturertTekst tekst={morsDel} />
        }
    }
];

const BareMorHarRett = () => {
    return (
        <div>
            <StrukturertTekst tekst={content} />
            <Kalkulator />
            <Informasjonsfaner tabs={informasjonsfaner} />
        </div>
    );
};

export default BareMorHarRett;
