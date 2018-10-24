import React, { Component } from 'react';
import CustomSVG from '../../utils/CustomSVG';
import { getRandomInt } from '../../utils/random';
import './svgBanner.less';

interface Props {
    svgIndex?: number;
}

const NUM_FAMILIES = 5;
class SvgBanner extends Component<Props> {
    state: {
        svgIndex: number;
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            svgIndex: this.props.svgIndex || getRandomInt(1, NUM_FAMILIES)
        };
    }

    render = () => {
        const svg = require(`../../assets/familier-hjemme/familie-hjemme-${
            this.state.svgIndex
        }.svg`).default;

        const cribSvg = require('../../assets/icons/babyCrib.svg').default;

        return (
            <div role="banner" className="svgBanner">
                {this.state && <CustomSVG className="svgBanner__svg" iconRef={svg} size={200} />}
                <CustomSVG className="svgBanner__cribSvg" iconRef={cribSvg} size={140} />
            </div>
        );
    };
}

export default SvgBanner;
