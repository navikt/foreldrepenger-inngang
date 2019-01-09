import * as React from 'react';
import './factsWithIcon.less';
import BEMHelper from 'app/utils/bem';
import Innhold from 'app/utils/innhold/Innhold';

const cls = BEMHelper('factsWithIcon');

interface Props {
    icon: React.ReactNode;
    content: string;
}

const Fact = ({ icon, content }: Props) => (
    <div className={cls.element('fact')}>
        <div className={cls.element('svgContainer')}>{icon}</div>
        <Innhold source={content} />
    </div>
);

export default Fact;
