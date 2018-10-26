import * as React from 'react';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';
import './storToggle.less';

const cls = BEMHelper('storToggle');

const StorToggle = ({
    isToggled,
    onToggle,
    children
}: {
    isToggled: boolean;
    onToggle: () => void;
    children: React.ReactChild;
}) => {
    return (
        <button
            aria-selected={isToggled}
            onClick={onToggle}
            className={classnames(cls.className, { [cls.modifier('toggled')]: isToggled })}>
            {children}
        </button>
    );
};

export default StorToggle;
