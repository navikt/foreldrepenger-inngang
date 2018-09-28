import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';

const content = require('../../../../content/all-informasjon/hva-er-foreldrepenger/bare-far-har-rett/bare-far-har-rett.json');
const farsDel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/bare-far-har-rett/fars-del.json');

const informasjonsfaner = [
    {
        faneLabel: 'Fars del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til far',
            icon: 'far1',
            antallUker: '40/50',
            punktliste: ['Aktivitetskrav til mor'],
            component: <StrukturertTekst tekst={farsDel} />
        }
    }
];

const BareFarHarRett = () => {
    return (
        <div>
            <StrukturertTekst tekst={content} />
            <Kalkulator />
            <Informasjonsfaner tabs={informasjonsfaner} />
        </div>
    );
};

export default BareFarHarRett;
