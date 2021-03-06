import React, { FunctionComponent } from 'react';
import BEMHelper from 'app/utils/bem';

import './eventline.less';
import { Undertittel } from 'nav-frontend-typografi';

const cls = BEMHelper('eventline');

interface Props {
    children?: React.ReactNode;
    title: string;
}

const Event: FunctionComponent<Props> = ({ children, title }) => {
    return (
        <div className={cls.element('event')}>
            {<Undertittel className={cls.element('eventTitle')}>{title}</Undertittel>}
            {children && <div className={cls.element('eventContent')}>{children}</div>}
        </div>
    );
};

export default Event;
