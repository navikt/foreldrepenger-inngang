import * as React from 'react';
import CustomSVG from '../../utils/CustomSVG';
import './svgBanner.less';

const SvgBanner = ({ svgName }: { svgName: string }) => {
    const svgFile = require(`./${svgName}.svg`).default;

    return (
        <div className="svgBanner">
            <CustomSVG
                className="svgBanner__svg"
                iconRef={svgFile}
                size={120}
            />
        </div>
    );
};

export default SvgBanner;
