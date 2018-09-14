import React, { Component } from 'react';
import CustomSVG from '../../utils/CustomSVG';
import { getRandomInt } from '../../utils/random';
import './svgBanner.less';

interface Props {
    svgIndex?: number;
}

const NUM_FAMILIES = 5;
class SvgBanner extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = this.props.svgIndex || getRandomInt(1, NUM_FAMILIES);
    }

    render = () => {
        const svg = require(`../../assets/familier/familie-${this.state}.svg`)
            .default;

        return (
            <div className="svgBanner">
                {this.state && (
                    <CustomSVG
                        className="svgBanner__svg"
                        iconRef={svg}
                        size={120}
                    />
                )}
            </div>
        );
    };
}

export default SvgBanner;
