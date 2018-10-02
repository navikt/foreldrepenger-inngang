import * as React from 'react';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';

const content = require('../../../../content/all-informasjon/hva-er-foreldrepenger/mor-og-mor/mor-og-mor.json');
const morsDel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/mor-og-mor/mors-del.json');
const medmorsDel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/mor-og-mor/medmors-del.json');
const fellesDel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/mor-og-mor/felles-del.json');

const informasjonsfaner = [
    {
        faneLabel: 'Mors del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'mor2',
            antallUker: '15',
            punktliste: [
                'Ingen krav til aktivitet',
                'Kan ikke overtas av den andre moren'
            ],
            component: <StrukturertTekst tekst={morsDel} />
        }
    },
    {
        faneLabel: 'Mors del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'medmor2',
            antallUker: '15',
            punktliste: ['Ingen krav til aktivitet', 'Kan ikke overtas av mor'],
            component: <StrukturertTekst tekst={medmorsDel} />
        }
    },
    {
        faneLabel: 'Felles del',
        faneIcon: false,
        bodyProps: {
            tittel: 'til begge',
            icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" />,
            antallUker: '16/26',
            punktliste: ['Aktivitetskrav til mor'],
            component: <StrukturertTekst tekst={fellesDel} />
        }
    }
];

const MorogMor = () => {
    return (
        <div>
            <StrukturertTekst tekst={content} />
            <Kalkulator />
            <Informasjonsfaner tabs={informasjonsfaner} />
        </div>
    );
};

export default MorogMor;
