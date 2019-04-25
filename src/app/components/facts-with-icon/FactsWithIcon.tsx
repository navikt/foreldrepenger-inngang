import * as React from 'react';
import BEMHelper from 'app/utils/bem';
import './factsWithIcon.less';

const cls = BEMHelper('factsWithIcon');

interface Props {
    children: React.ReactNode;
}

const FactsWithIcon = ({ children }: Props) => <div className={cls.block}>{children}</div>;

export default FactsWithIcon;
