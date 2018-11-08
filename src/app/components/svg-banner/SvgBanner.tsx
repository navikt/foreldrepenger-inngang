import React, { Component } from 'react';
import { FlexibleSvg } from '../../utils/CustomSVG';
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
                {this.state && (
                    <FlexibleSvg className="svgBanner__svg" iconRef={svg} width={195} height={94} />
                )}
                <FlexibleSvg
                    className="svgBanner__cribSvg"
                    iconRef={cribSvg}
                    width={111}
                    height={88}
                />
            </div>
        );
    };
}

export default SvgBanner;
