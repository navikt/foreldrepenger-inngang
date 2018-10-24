import * as React from 'react';
import { FlexibleSvg } from '../../utils/CustomSVG';
import BEMHelper from '../../utils/bem';
import classnames from 'classnames';
import './foreldrepar.less';

export type Forelder = 'far1' | 'far2' | 'far3' | 'far4' | 'medmor1' | 'medmor2' | 'mor1' | 'mor2';

type Illustrasjonsvariant =
    | 1 // Første forelder er halvt usynlig
    | 2 // Andre forelder er halvt usynlig
    | 3 // Foreldrene er separert
    | 4; // Foreldrene er nærmere

interface Props {
    firstParent: Forelder;
    secondParent: Forelder;
    variant?: Illustrasjonsvariant;
}

const cls = BEMHelper('foreldrepar');

const Foreldrepar: React.StatelessComponent<Props> = ({ firstParent, secondParent, variant }) => {
    const firstSvg = require(`../../assets/foreldre/${firstParent}.svg`).default;
    const secondSvg = require(`../../assets/foreldre/${secondParent}.svg`).default;

    return (
        <div
            role="presentation"
            className={classnames(cls.className, {
                [cls.element('closerParents')]: variant && variant === 4
            })}>
            <Forelder
                className={cls.element('firstParent')}
                svg={firstSvg}
                lessOpacity={variant === 2}
            />
            {variant && variant === 3 && <span className={cls.element('parentSeparator')} />}
            <Forelder
                className={cls.element('secondParent')}
                svg={secondSvg}
                lessOpacity={variant === 1}
            />
        </div>
    );
};

const Forelder = ({
    className,
    svg,
    lessOpacity
}: {
    className: string;
    svg: any;
    lessOpacity?: boolean;
}) => {
    const svgToRender = (
        <FlexibleSvg
            className={classnames(className, { [cls.element('halfOpacity')]: lessOpacity })}
            iconRef={svg}
            width={28}
            height={42}
        />
    );

    return svgToRender;
};

export default Foreldrepar;
