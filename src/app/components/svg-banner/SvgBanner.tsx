import React, { Component } from 'react';
import { FlexibleSvg } from '../../utils/CustomSVG';
import { getRandomInt } from '../../utils/random';
import './svgBanner.less';
import { detErJul } from 'app/utils/datoUtils';

interface Props {
    svgIndex?: number;
}

const NUM_FAMILIES = 5;

const getSvgForHeader = (index: number) => {
    return detErJul()
        ? require(`../../assets/familier-hjemme/familie-hjemme-sesong-${index}.svg`).default
        : require(`../../assets/familier-hjemme/familie-hjemme-${index}.svg`).default;
};

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
        const svg = getSvgForHeader(this.state.svgIndex);
        const cribSvg = require('../../assets/icons/babyCrib.svg').default;

        return (
            <div role="banner" className="svgBanner">
                {this.state && <FlexibleSvg className="svgBanner__svg" iconRef={svg} width={195} height={94} />}
                <FlexibleSvg className="svgBanner__cribSvg" iconRef={cribSvg} width={111} height={88} />
            </div>
        );
    };
}

export default SvgBanner;
