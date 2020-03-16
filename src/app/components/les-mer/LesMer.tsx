import * as React from 'react';
import BEMHelper from '../../utils/bem';
import './lesMer.less';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Element } from 'nav-frontend-typografi';

const cls = BEMHelper('lesMer');

interface Props {
    intro: string;
    children: React.ReactNode;
}

const LesMer: React.StatelessComponent<Props> = ({ intro, children }) => (
    <div className={cls.block}>
        <Ekspanderbartpanel border={true} tittel={<Element>{intro}</Element>}>
            {children}
        </Ekspanderbartpanel>
    </div>
);

export default LesMer;
