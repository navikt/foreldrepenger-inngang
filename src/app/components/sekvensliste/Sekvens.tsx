import * as React from 'react';
import BEMHelper from '../../utils/bem';

import './sekvens.less';
import Callout from '../callout/Callout';
import MediaQuery from 'react-responsive';

interface Props {
    illustrasjon: React.ReactNode;
    children: React.ReactNode;
}

const bem = BEMHelper('sekvens');

const Sekvens: React.StatelessComponent<Props> = ({ illustrasjon, children }) => (
    <div className={bem.block}>
        <div className={bem.element('illustrasjon')}>{illustrasjon}</div>
        <div className={bem.element('innhold')}>
            <MediaQuery minWidth={576}>
                <Callout>{children}</Callout>
            </MediaQuery>
            <MediaQuery maxWidth={575}>
                <Callout arrowPlacement="none">{children}</Callout>
            </MediaQuery>
        </div>
    </div>
);

export default Sekvens;
