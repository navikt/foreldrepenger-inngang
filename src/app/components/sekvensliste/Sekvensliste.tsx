import * as React from 'react';
import BEMHelper from '../../utils/bem';

import './sekvensliste.less';

interface Props {
    children: React.ReactNode[];
}

const bem = BEMHelper('sekvensliste');

const Sekvensliste: React.StatelessComponent<Props> = ({ children }) => (
    <div className={bem.block}>
        {children.map((child, index) => (
            <div key={index} className={bem.element('sekvens')}>
                {child}
            </div>
        ))}
    </div>
);

export default Sekvensliste;
