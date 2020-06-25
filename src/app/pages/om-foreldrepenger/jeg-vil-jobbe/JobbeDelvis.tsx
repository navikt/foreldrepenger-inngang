import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { injectIntl, IntlShape } from 'react-intl';
import classnames from 'classnames';
import MediaQuery from 'react-responsive';
import TypografiBase from 'nav-frontend-typografi';

import BEMHelper from '../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import JegVilJobbeDeltid from './komponenter/JegVilJobbeDeltid';
import JegVilJobbeDeltidExpandert from './komponenter/JegVilJobbeDeltidExpandert';
import JegVilJobbeDeltidExpandertMobil from './komponenter/JegVilJobbeDeltidExpandertMobil';

const cls = BEMHelper('jegVilJobbe');

interface InjectedProps {
    intl: IntlShape;
}

class JobbeDelvis extends React.Component<InjectedProps> {
    state: {
        svgList: any[];
        message: string;
        width: string;
        height: string;
    };

    constructor(props: InjectedProps) {
        super(props);
        this.state = {
            svgList: [],
            message: 'om_foreldrepenger.jobbe.klikkForDetaljertInformasjon',
            width: '70%',
            height: '70%',
        };

        this.expandJegVilJobbe = this.expandJegVilJobbe.bind(this);
    }

    componentDidMount = () => {
        this.updateWindowSize();
        window.addEventListener('resize', this.updateWindowSize);
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowSize);
    };

    updateWindowSize = () => {
        if (window.innerWidth < 575) {
            this.setState({
                width: '100%',
                height: '100%',
            });
        } else if (window.innerWidth > 576) {
            this.setState({
                width: '70%',
                height: '70%',
            });
        }
    };

    expandJegVilJobbe() {
        const list = [...this.state.svgList];
        if (list.length === 1) {
            this.setState({
                svgList: [],
                message: 'om_foreldrepenger.jobbe.klikkForDetaljertInformasjon',
            });
        } else {
            list.push(
                <div>
                    <MediaQuery minWidth={576}>
                        <JegVilJobbeDeltidExpandert
                            height={'100%'}
                            width={'100%'}
                            dager={'om_foreldrepenger.jobbe.jobbDelvis.dropdownSvg.dager'}
                            jobbdag={'om_foreldrepenger.jobbe.jobbDelvis.dropdownSvg.jobbdag'}
                            uke={'om_foreldrepenger.jobbe.jobbDelvis.dropdownSvg.uke'}
                        />
                    </MediaQuery>
                    <MediaQuery maxWidth={575}>
                        <JegVilJobbeDeltidExpandertMobil
                            dag={'om_foreldrepenger.jobbe.jobbDelvis.dropdownSvg.dager'}
                            dager={'om_foreldrepenger.jobbe.jobbDelvis.dropdownSvg.dag'}
                            uke={'om_foreldrepenger.jobbe.jobbDelvis.dropdownSvg.uke'}
                        />
                    </MediaQuery>
                </div>
            );
            this.setState({
                svgList: list,
                message: 'om_foreldrepenger.jobbe.kikkForLukkDetaljertInformasjon',
            });
        }
    }

    render = () => (
        <div className={classnames('blokk-l', cls.element('jobbeDelvis'))}>
            <div className={cls.element('illustrasjon')}>
                <Innhold
                    className="blokk-s"
                    source={getSource('om-foreldrepenger/jeg-vil-jobbe/deltid-fane', this.props.intl)}
                />
                <div className={cls.element('mainIcon')} role="button" onClick={this.expandJegVilJobbe}>
                    <JegVilJobbeDeltid
                        width={this.state.width}
                        height={this.state.height}
                        foreldrepenger={'om_foreldrepenger.jobbe.jobbDelvis.statiskSvg.foreldrepenger'}
                        prosentAndelFra={'om_foreldrepenger.jobbe.jobbDelvis.statiskSvg.prosentAndelFra'}
                        prosentAndelTil={'om_foreldrepenger.jobbe.jobbDelvis.statiskSvg.prosentAndelTil'}
                    />
                    <TypografiBase type={'normaltekst'}>
                        {getTranslation(this.state.message, this.props.intl)}
                    </TypografiBase>
                </div>
                {this.state.svgList.map((item, index) => {
                    return (
                        <CSSTransition key={index} appear={true} classNames="fade" in={true} timeout={1000}>
                            <div key={index} className={' '}>
                                {item}
                            </div>
                        </CSSTransition>
                    );
                })}
            </div>
        </div>
    );
}
export default injectIntl(JobbeDelvis);
