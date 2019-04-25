import * as React from 'react';
import './callout.less';

interface Props {
    children: React.ReactNode;
}

const Callout: React.StatelessComponent<Props> = ({ children }) => (
    <div className="callout">{children}</div>
);

export default Callout;
