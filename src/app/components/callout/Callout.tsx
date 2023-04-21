import * as React from 'react';
import './callout.less';
import { Normaltekst } from 'nav-frontend-typografi';
import BEMHelper from '../../utils/bem';

interface Props {
    children: React.ReactNode;
    arrowPlacement?: 'left' | 'none';
}

const bem = BEMHelper('callout');
const bemWrapper = bem.child('arrowWrapper');
const Callout: React.FunctionComponent<Props> = ({ children, arrowPlacement = 'left' }) => (
    <div className={bem.block}>
        <div
            className={bemWrapper.classNames(bemWrapper.block, bemWrapper.modifier(arrowPlacement))}
            role="presentation"
            aria-hidden={true}
        >
            <div className={bem.element('arrow')} />
        </div>
        <Normaltekst tag="div">{children}</Normaltekst>
    </div>
);

export default Callout;
