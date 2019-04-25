import * as React from 'react';
import './callout.less';
import { Normaltekst } from 'nav-frontend-typografi';

interface Props {
    children: React.ReactNode;
}

const Callout: React.StatelessComponent<Props> = ({ children }) => (
    <div className="callout">
        <div className="callout__arrowWrapper" role="presentation" aria-hidden={true}>
            <div className="callout__arrow" />
        </div>
        <Normaltekst tag="div">{children}</Normaltekst>
    </div>
);

export default Callout;
