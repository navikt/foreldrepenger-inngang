import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';
import './storToggle.less';

const cls = BEMHelper('storToggle');

const StorToggle = ({
    label,
    isToggled,
    onToggle
}: {
    label: string;
    isToggled: boolean;
    onToggle: () => void;
}) => {
    return (
        <button
            aria-selected={isToggled}
            onClick={onToggle}
            className={classnames(cls.className, { [cls.modifier('toggled')]: isToggled })}>
            <TypografiBase type="normaltekst">{label}</TypografiBase>
        </button>
    );
};

export default StorToggle;
