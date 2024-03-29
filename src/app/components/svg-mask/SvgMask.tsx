import React, { FunctionComponent } from 'react';
import CustomSVGFromSprite, { IconRef } from 'app/utils/CustomSVG';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';
import './svgMask.less';

const cls = BEMHelper('svgMask');

interface Props {
    svg: IconRef;
    small?: boolean;
    smaller?: boolean;
    anchorToBottom?: boolean;
}

const SvgMask: FunctionComponent<Props> = ({ svg, small, smaller, anchorToBottom }) => {
    let svgSize = smaller ? 40 : small ? 64 : 100;
    if (!anchorToBottom) {
        svgSize = svgSize * 0.6;
    }

    return (
        <div
            className={classnames(cls.block, {
                [cls.modifier('small')]: small,
                [cls.modifier('smaller')]: smaller,
            })}
        >
            <CustomSVGFromSprite
                className={anchorToBottom ? cls.element('anchorToBOttom') : ''}
                iconRef={svg}
                size={svgSize}
            />
        </div>
    );
};

export default SvgMask;
