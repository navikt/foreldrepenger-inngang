import * as React from 'react';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';

import './storToggle.less';

const cls = BEMHelper('storToggle');

const StorToggle = ({
    isToggled,
    onToggle,
    children,
    clsName
}: {
    isToggled: boolean;
    onToggle: () => void;
    children: React.ReactChild;
    clsName?: string;
}) => {
    return (
        <button
            aria-selected={isToggled}
            onClick={onToggle}
            className={classnames(cls.block, { [cls.modifier('toggled')]: isToggled }, clsName)}
        >
            {children}
        </button>
    );
};

export default StorToggle;
