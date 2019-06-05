import React, { FunctionComponent } from 'react';
import BEMHelper from 'app/utils/bem';

import './eventline.less';

const cls = BEMHelper('eventline');

interface Props {
    children: React.ReactNode;
}

const Eventline: FunctionComponent<Props> = ({ children }) => {
    return <div className={cls.block}>{children}</div>;
};

export default Eventline;
