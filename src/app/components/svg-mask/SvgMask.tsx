import React, { StatelessComponent } from 'react';
import CustomSVGFromSprite, { IconRef } from 'app/utils/CustomSVG';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';
import './svgMask.less';

const cls = BEMHelper('svgMask');

interface Props {
    svg: IconRef;
    small?: boolean;
    anchorToBottom?: boolean;
}

const SvgMask: StatelessComponent<Props> = ({ svg, small, anchorToBottom }) => {
    let svgSize = small ? 64 : 100;
    if (!anchorToBottom) {
        svgSize = svgSize * 0.6;
    }

    return (
        <div className={classnames(cls.className, { [cls.modifier('small')]: small })}>
            <CustomSVGFromSprite
                className={anchorToBottom ? cls.element('anchorToBOttom') : ''}
                iconRef={svg}
                size={svgSize}
            />
        </div>
    );
};

export default SvgMask;
