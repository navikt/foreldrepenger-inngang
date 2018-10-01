import * as React from 'react';
import BEMHelper from '../../../../utils/bem';

const cls = BEMHelper('fanelabel');

interface Props {
    label: string;
    icon: any;
}

const InformasjonsFanerLabel: React.StatelessComponent<Props> = ({
    label,
    icon
}) => {
    return (
        <div className={cls.className}>
            <div className={cls.element('Icon')}>{icon}</div>
            <div className={cls.element('label')}>{label}</div>
        </div>
    );
};

export default InformasjonsFanerLabel;
