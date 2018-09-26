import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';

import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';

const morsdel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/far-og-mor/mors-del.json');
const fellesdel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/far-og-mor/felles-del.json');
const farsdel = require('../../../../content/all-informasjon/hva-er-foreldrepenger/far-og-mor/fars-del.json');

import translate from '../../../utils/translate';

const informasjonsfaner = [
    {
        faneLabel: 'Mors del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'mor2',
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
            punktliste: ['Aktivitetskrav til mor'],
            component: <StrukturertTekst tekst={fellesdel} />
        }
    }
];

const FarOgMor = () => {
    return (
        <div>
            <TypografiBase type="undertittel">
                {translate('lengde_på_foreldreperioden')}
            </TypografiBase>
            <TypografiBase type="normaltekst">
                {translate('lengde_på_foreldreperioden_body')}
            </TypografiBase>
            <Kalkulator />
            <Informasjonsfaner tabs={informasjonsfaner} />
        </div>
    );
};

export default FarOgMor;
