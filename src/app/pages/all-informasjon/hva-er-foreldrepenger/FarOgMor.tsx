import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';

import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';

const farOgMorContent = require('../../../../content/all-informasjon/hva-er-foreldrepenger/far-og-mor/far-og-mor.json');
const morsdel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/far-og-mor/mors-del.json');
const fellesdel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/far-og-mor/felles-del.json');
const farsdel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/far-og-mor/fars-del.json');

const informasjonsfaner = [
    {
        faneLabel: 'Mors del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'mor2',
            antallUker: '15',
            punktliste: ['Ingen krav til aktivitet', 'Kan ikke overtas av far'],
            component: <StrukturertTekst tekst={morsdel} />
        }
    },
    {
        faneLabel: 'Fars del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til far',
            icon: 'far1',
            antallUker: '15',
            punktliste: ['Ingen krav til aktivitet', 'Kan ikke overtas av mor'],
            component: <StrukturertTekst tekst={farsdel} />
        }
    },
    {
        faneLabel: 'Felles del',
        faneIcon: false,
        bodyProps: {
            tittel: 'til begge',
            icon: 'farOgMor2',
            antallUker: '16/26',
            punktliste: ['Aktivitetskrav til mor'],
            component: <StrukturertTekst tekst={fellesdel} />
        }
    }
];

const FarOgMor = () => {
    return (
        <div>
            <StrukturertTekst tekst={farOgMorContent} />
            <Kalkulator />
            <Informasjonsfaner tabs={informasjonsfaner} />
        </div>
    );
};

export default FarOgMor;
