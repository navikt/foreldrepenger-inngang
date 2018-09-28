import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';

const content = require('../../../../content/all-informasjon/hva-er-foreldrepenger/aleneomsorg/aleneomsorg.json');
const farsDel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/aleneomsorg/fars-del.json');
const morsDel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/aleneomsorg/mors-del.json');

const informasjonsfaner = [
    {
        faneLabel: 'Som mor',
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'mor1',
            antallUker: '49/59',
            punktliste: [],
            component: <StrukturertTekst tekst={morsDel} />
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
            component: <StrukturertTekst tekst={farsDel} />
        }
    }
];

const Aleneomsorg = () => {
    return (
        <div>
            <StrukturertTekst tekst={content} />
            <Kalkulator />
            <Informasjonsfaner tabs={informasjonsfaner} />
        </div>
    );
};

export default Aleneomsorg;
