import * as React from 'react';
import BEMHelper from '../../../../utils/bem';
import TypografiBase from 'nav-frontend-typografi';
import NoenVilPaFerie from './NoenVilPaFerie';
import JegVilJobbe from './JegVilJobbe';
import EnAvOssBlirSyk from './EnAvOssBlirSyk';
import HjemmeSamtidig from './HjemmeSamtidig';
import WithLink from '../../../../components/with-link/WithLink';
import './MenHvaHvis.less';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';

const cls = BEMHelper('menHvaHvis');

class MenHvaHvis extends React.Component<InjectedIntlProps> {
    state: {
        Size?: any;
        svgSize: string;
    };

    constructor(props: InjectedIntlProps) {
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
                svgSize: '70px'
            });
        } else if (window.innerWidth >= 800) {
            this.setState({
                svgSize: '109px'
            });
        }
    };

    render = () => {
        const { intl } = this.props;

        return (
            <div className={cls.className}>
                <div className={cls.element('header')}>
                    <TypografiBase type="element">
                        {getTranslation('om_foreldrepenger.hvor_lenge.hurtiglenker', intl)}
                    </TypografiBase>
                </div>
                <div className={cls.element('body')}>
                    <WithLink
                        style={{ height: this.state.svgSize, width: this.state.svgSize }}
                        url={'#hvis-du-skal-pa-ferie'}
                        noStyling={true}
                        ariaLabel={getTranslation('om_foreldrepenger.menHvaHvis.ferie', intl)}>
                        <NoenVilPaFerie size={this.state.svgSize} />
                    </WithLink>

                    <WithLink
                        style={{ height: this.state.svgSize, width: this.state.svgSize }}
                        url={'#hvis-du-vil-jobbe'}
                        noStyling={true}
                        ariaLabel={getTranslation(
                            'om_foreldrepenger.menHvaHvis.jobb_i_periode',
                            intl
                        )}>
                        <JegVilJobbe size={this.state.svgSize} />
                    </WithLink>

                    <WithLink
                        style={{ height: this.state.svgSize, width: this.state.svgSize }}
                        url={'#hvis-en-av-dere-blir-syke'}
                        noStyling={true}
                        ariaLabel={getTranslation('om_foreldrepenger.menHvaHvis.blirSyk', intl)}>
                        <EnAvOssBlirSyk size={this.state.svgSize} />
                    </WithLink>

                    <WithLink
                        style={{ height: this.state.svgSize, width: this.state.svgSize }}
                        url={'#hjemme-samtidig'}
                        noStyling={true}
                        ariaLabel={getTranslation(
                            'om_foreldrepenger.menHvaHvis.hjemmeSamtidig',
                            intl
                        )}>
                        <HjemmeSamtidig size={this.state.svgSize} />
                    </WithLink>
                </div>
            </div>
        );
    };
}

export default injectIntl(MenHvaHvis);
