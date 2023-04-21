import * as React from 'react';
import BEMHelper from '../../utils/bem';

import './sekvensliste.less';

interface Props {
    children: React.ReactNode[] | React.ReactNode;
}

const bem = BEMHelper('sekvensliste');

const Sekvensliste: React.FunctionComponent<Props> = ({ children }) => {
    const sekvenser = Array.isArray(children) ? children : [children];
    return (
        <div className={bem.block}>
            {sekvenser.map((sekvens, index) => (
                <div key={index} className={bem.element('sekvens')}>
                    {sekvens}
                </div>
            ))}
        </div>
    );
};

export default Sekvensliste;
