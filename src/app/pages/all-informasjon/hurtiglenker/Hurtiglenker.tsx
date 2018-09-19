import * as React from 'react';
import PanelBase from 'nav-frontend-paneler';
import Lenke from 'nav-frontend-lenker';

import BEMHelper from '../../../utils/bem';
import translate from '../../../utils/translate';

import './hurtiglenker.less';
import TypografiBase from 'nav-frontend-typografi';

const cls = BEMHelper('hurtiglenker');

const links = [
    'hva_er_foreldrepenger',
    'jobbe',
    'beregning',
    'ferie',
    'hjemme_samtidig',
    'adopsjon',
    'sykdom',
    'inntekt',
    'arbeidsgiver'
];

const Hurtiglenker = () => {
    return (
        <PanelBase className={cls.className}>
            {links.map((link) => (
                <TypografiBase type="normaltekst">
                    <Lenke href={`#${link.replace('_', '-')}`}>
                        {translate(link)}
                    </Lenke>
                </TypografiBase>
            ))}
        </PanelBase>
    );
};

export default Hurtiglenker;
