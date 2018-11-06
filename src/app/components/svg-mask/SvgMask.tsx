import React, { StatelessComponent } from 'react';
import CustomSVGFromSprite, { IconRef } from 'app/utils/CustomSVG';
import BEMHelper from 'app/utils/bem';
import './svgMask.less';

const cls = BEMHelper('svgMask');

interface Props {
    svg: IconRef;
    anchorToBottom?: boolean;
}

const SvgMask: StatelessComponent<Props> = ({ svg, anchorToBottom }) => (
    <div className={cls.className}>
        <CustomSVGFromSprite
            className={anchorToBottom ? cls.element('anchorToBOttom') : ''}
            iconRef={svg}
            size={anchorToBottom ? 100 : 60}
        />
    </div>
);

export default SvgMask;
