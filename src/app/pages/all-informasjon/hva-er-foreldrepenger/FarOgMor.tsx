import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Kalkulator from './kalkulator/Kalkulator';
import Informasjonsfaner from './informasjons-faner/Informasjonsfaner';
import FarOgMorSubInformasjonsFaneMorsDel from './informasjons-faner/sub-informasjonsfaner-txt/FarOgMorSubInformasjonsFaneMorsDel';
import FarOgMorSubInformasjonsFaneFarsDel from './informasjons-faner/sub-informasjonsfaner-txt/FarOgMorSubInformasjonsFaneFarsDel';
import FarOgMorSubInformasjonsFaneFellesDel from './informasjons-faner/sub-informasjonsfaner-txt/FarOgMorSubInformasjonsFaneFellesDel';

import translate from '../../../utils/translate';

const Tabulator = [
    {
        faneLabel: 'Mors del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til mor',
            icon: 'mor2',
            punktliste: ['Ingen krav til aktivitet', 'Kan ikke overtas av far'],
            component: <FarOgMorSubInformasjonsFaneMorsDel />
        }
    },
    {
        faneLabel: 'Fars del',
        faneIcon: true,
        bodyProps: {
            tittel: 'til far',
            icon: 'far1',
            punktliste: ['Ingen krav til aktivitet', 'Kan ikke overtas av mor'],
            component: <FarOgMorSubInformasjonsFaneFellesDel />
        }
    },
    {
        faneLabel: 'Felles del',
        faneIcon: false,
        bodyProps: {
            tittel: 'til begge',
            icon: 'farOgMor2',
            punktliste: ['Aktivitetskrav til mor'],
            component: <FarOgMorSubInformasjonsFaneFarsDel />
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
            <Informasjonsfaner tabs={Tabulator} />
        </div>
    );
};

export default FarOgMor;
