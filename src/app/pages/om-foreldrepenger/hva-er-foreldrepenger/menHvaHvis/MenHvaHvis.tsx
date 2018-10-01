import * as React from 'react';
import BEMHelper from '../../../../utils/bem';
import translate from '../../../../utils/translate';
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
        svgSize: string
    };

    constructor(props: Props) {
      super(props);
      this.state = {
          svgSize: "109px",
          Size: window.innerWidth
      };
    };

    componentWillMount = () => {
        this.updateWindowSize();

        window.addEventListener('resize', this.updateWindowSize);
    };

    componentDidMount = () => {
        this.updateWindowSize();
        window.addEventListener('resize', this.updateWindowSize);
    };

    updateWindowSize = () => {

        if(window.innerWidth < 799) {
            this.setState({
                svgSize: "70px"
            })
        }else if (window.innerWidth >= 800) {
            this.setState({
                svgSize: "109px"
            })
        }
    };

    render = () => (
        <div className={cls.className}>
            <ScaleSize query="(max-width: 799px)" />
            <div className={cls.element('header')}>
                <TypografiBase type="element">
                    {translate('menHvaHvis')}
                </TypografiBase>
            </div>
            <div className={cls.element('body')}>
                <NoenVilPaFerie size={this.state.svgSize} />
                <JegVilJobbe size={this.state.svgSize} />
                <EnAvOssBlirSyk size={this.state.svgSize} />
                <HjemmeSamtidig size={this.state.svgSize} />
            </div>
        </div>
    );
}

export default MenHvaHvis;
