import * as React from 'react';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import { FlexibleSvg } from '../../../../utils/CustomSVG';
import BEMHelper from '../../../../utils/bem';
import translate from '../../../../utils/translate';

import './fane.less';

const cls = BEMHelper('fane');

type Forelder =
    | 'far1'
    | 'far2'
    | 'far3'
    | 'far4'
    | 'medmor1'
    | 'medmor2'
    | 'mor1'
    | 'mor2';

export interface FaneType {
    label: string;
    firstParent: Forelder;
    secondParent: Forelder;
    variant?: 1 | 2 | 3;
    component: React.ReactNode;
}

const Fane = ({
    tab,
    isSelected,
    onSelect
}: {
    tab: FaneType;
    isSelected: boolean;
    onSelect: () => void;
}) => {
    const firstParent = require(`../../../../assets/foreldre/${
        tab.firstParent
    }.svg`).default;
    const secondParent = require(`../../../../assets/foreldre/${
        tab.secondParent
    }.svg`).default;

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
                <div className={cls.element('illustration')}>
                    <Faneforelder
                        svg={firstParent}
                        lessOpacity={tab.variant === 2}
                    />
                    {tab.variant && tab.variant === 3 && '/'}
                    <Faneforelder
                        svg={secondParent}
                        lessOpacity={tab.variant === 1}
                    />
                </div>
                <TypografiBase type="normaltekst">
                    {translate(tab.label)}
                </TypografiBase>
            </div>
        </div>
    );
};

const Faneforelder = ({
    svg,
    lessOpacity
}: {
    svg: any;
    lessOpacity?: boolean;
}) => {
    const svgToRender = <FlexibleSvg iconRef={svg} width={28} height={42} />;

    return lessOpacity ? (
        <div className={cls.element('halfOpacity')}>{svgToRender}</div>
    ) : (
        svgToRender
    );
};

export default Fane;
