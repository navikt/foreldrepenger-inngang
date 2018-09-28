import * as React from 'react';
import Expanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import BEMHelper from '../../utils/bem';
import './lesMer.less';

const cls = BEMHelper('lesMer');

interface Props {
    intro: string;
    children: React.ReactNode;
}

const LesMer: React.StatelessComponent<Props> = ({ intro, children }) => (
    <div className={cls.className}>
        <Expanderbartpanel border={true} tittel={intro} tittelProps="element">
            {children}
        </Expanderbartpanel>
    </div>
);

export default LesMer;
