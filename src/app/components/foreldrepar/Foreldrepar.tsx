import * as React from 'react';
import { FlexibleSvg } from '../../utils/CustomSVG';
import BEMHelper from '../../utils/bem';
import './foreldrepar.less';

export type Forelder = 'far1' | 'far2' | 'far3' | 'far4' | 'medmor1' | 'medmor2' | 'mor1' | 'mor2';

type Illustrasjonsvariant =
    | 1 // Første forelder er halvt usynlig
    | 2 // Andre forelder er halvt usynlig
    | 3; // Foreldrene er separert

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
        <div role="presentation" className={cls.className}>
            <Forelder svg={firstSvg} lessOpacity={variant === 2} />
            {variant && variant === 3 && <span className={cls.element('parentSeparator')} />}
            <Forelder svg={secondSvg} lessOpacity={variant === 1} />
        </div>
    );
};

const Forelder = ({ svg, lessOpacity }: { svg: any; lessOpacity?: boolean }) => {
    const svgToRender = (
        <FlexibleSvg
            className={lessOpacity ? cls.element('halfOpacity') : ''}
            iconRef={svg}
            width={28}
            height={42}
        />
    );

    return svgToRender;
};

export default Foreldrepar;
