import * as React from 'react';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../../utils/bem';
import translate from '../../../../utils/translate';

import './fane.less';

const cls = BEMHelper('fane');

export interface Innholdsfane {
    label: string;
    icon: React.ReactNode;
    component: React.ReactNode;
}

const Fane = ({
    tab,
    isSelected,
    onSelect
}: {
    tab: Innholdsfane;
    isSelected: boolean;
    onSelect: () => void;
}) => {
    return (
        <div
            tabIndex={0}
            role="button"
            onClick={onSelect}
            onKeyPress={onSelect}
            className={classnames(cls.className, {
                [cls.modifier('selected')]: isSelected
            })}>
            <div className={cls.element('inner')}>
                {tab.icon}
                <TypografiBase type="normaltekst">
                    {translate(tab.label)}
                </TypografiBase>
            </div>
        </div>
    );
};

export default Fane;
