import * as React from 'react';
import CustomSVG from '../../utils/CustomSVG';
import { getRandomInt } from '../../utils/random';
import './svgBanner.less';

const NUM_FAMILIES = 5;
const SvgBanner = ({ svgIndex }: { svgIndex?: number }) => {
    const family = svgIndex || getRandomInt(1, NUM_FAMILIES);
    const svg = require(`../../assets/familier/${family}.svg`).default;

    return (
        <div className="svgBanner">
            <CustomSVG className="svgBanner__svg" iconRef={svg} size={120} />
        </div>
    );
};

export default SvgBanner;
