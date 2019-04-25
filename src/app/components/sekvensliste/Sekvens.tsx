import * as React from 'react';
import BEMHelper from '../../utils/bem';

import './sekvens.less';

interface Props {
    illustrasjon: React.ReactNode;
    children: React.ReactNode;
}

const bem = BEMHelper('sekvens');

const Sekvens: React.StatelessComponent<Props> = ({ illustrasjon, children }) => (
    <div className={bem.block}>
        <div className={bem.element('illustrasjon')}>{illustrasjon}</div>
        <div className={bem.element('innhold')}>{children}</div>
    </div>
);

export default Sekvens;
