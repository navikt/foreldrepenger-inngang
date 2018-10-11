import * as React from 'react';
import BEMHelper from '../../../../utils/bem';
import { getTranslation } from '../../../../intl/intl';
import TypografiBase from 'nav-frontend-typografi';
import NoenVilPaFerie from './NoenVilPaFerie';
import JegVilJobbe from './JegVilJobbe';
import EnAvOssBlirSyk from './EnAvOssBlirSyk';
import HjemmeSamtidig from './HjemmeSamtidig';
import ScaleSize from 'react-responsive';

import './MenHvaHvis.less';

const cls = BEMHelper('menHvaHvis');

interface Props {}

class MenHvaHvis extends React.Component<Props> {
    state: {
        Size?: any;
        svgSize: string;
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            svgSize: '109px',
            Size: window.innerWidth
        };
    }

    componentWillMount = () => {
        this.updateWindowSize();

        window.addEventListener('resize', this.updateWindowSize);
    };

    componentDidMount = () => {
        this.updateWindowSize();
        window.addEventListener('resize', this.updateWindowSize);
    };

    updateWindowSize = () => {
        if (window.innerWidth < 799) {
            this.setState({
                svgSize: '80px'
            });
        } else if (window.innerWidth >= 800) {
            this.setState({
                svgSize: '109px'
            });
        }
    };

    render = () => (
        <div className={cls.className}>
            <ScaleSize query="(max-width: 799px)" />
            <div className={cls.element('header')}>
                <TypografiBase type="element">
                    {getTranslation('om_foreldrepenger.hvor_lenge.hurtiglenker')}
                </TypografiBase>
            </div>
            <div className={cls.element('body')}>
                <a style={{ height: this.state.svgSize }} href="#ferie">
                    <NoenVilPaFerie size={this.state.svgSize} />
                </a>
                <a style={{ height: this.state.svgSize }} href="#jeg-vil-jobbe">
                    <JegVilJobbe size={this.state.svgSize} />
                </a>
                <a style={{ height: this.state.svgSize }} href="#sykdom">
                    <EnAvOssBlirSyk size={this.state.svgSize} />
                </a>
                <a style={{ height: this.state.svgSize }} href="#hjemme-samtidig">
                    <HjemmeSamtidig size={this.state.svgSize} />
                </a>
            </div>
        </div>
    );
}

export default MenHvaHvis;
