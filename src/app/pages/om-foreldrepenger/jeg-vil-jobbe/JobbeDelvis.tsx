import * as React from 'react';
import { getTranslation, IntlProps, withIntl } from '../../../intl/intl';
import LesMer from '../../../components/les-mer/LesMer';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../utils/getContent';
import BEMHelper from '../../../utils/bem';
import { JegVilJobbeDeltid } from './komponenter/JegVilJobbeDeltid';
import { JegVilJobbeDeltidExpandert } from './komponenter/JegVilJobbeDeltidExpandert';
import { CSSTransition } from 'react-transition-group';
import TypografiBase from 'nav-frontend-typografi';
import MediaQuery from 'react-responsive';
import { JegVilJobbeDeltidExpandertMobil } from './komponenter/JegVilJobbeDeltidExpandertMobil';
const firstPanelContent = 'all-informasjon/jeg-vil-jobbe/heltidsjobb';
const secondPanelContent = 'all-informasjon/jeg-vil-jobbe/deltidsjobb';
const cls = BEMHelper('jegVilJobbe');

class JobbeDelvis extends React.Component<IntlProps> {
    state: {
        svgList: object[];
        message: string;
        width: string;
        height: string;
    };

    constructor(props: IntlProps) {
        super(props);
        this.state = {
            svgList: [],
            message: 'om_foreldrepenger.jobbe.klikkForDetaljertInformasjon',
            width: '70%',
            height: '70%'
        };

        this.expandJegVilJobbe = this.expandJegVilJobbe.bind(this);
    }

    componentWillMount = () => {
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
                height: '100%'
            });
        } else if (window.innerWidth > 576) {
            this.setState({
                width: '70%',
                height: '70%'
            });
        }
    };

    expandJegVilJobbe() {
        const list = [...this.state.svgList];
        if (list.length === 1) {
            this.setState({
                svgList: [],
                message: 'om_foreldrepenger.jobbe.klikkForDetaljertInformasjon'
            });
        } else {
            list.push(
                <div>
                    <MediaQuery minWidth={576}>
                        <JegVilJobbeDeltidExpandert height={'100%'} width={'100%'} />
                    </MediaQuery>
                    <MediaQuery maxWidth={575}>
                        <JegVilJobbeDeltidExpandertMobil />
                    </MediaQuery>
                </div>
            );
            this.setState({
                svgList: list,
                message: 'om_foreldrepenger.jobbe.kikkForLukkDetaljertInformasjon'
            });
        }
    }

    render = () => (
        <div className={cls.element('jobbeDelvis')}>
            <div className={cls.element('illustrasjon')}>
                <StrukturertTekst
                    tekst={getContent('all-informasjon/jeg-vil-jobbe/deltid-fane', this.props.lang)}
                />
                <div
                    className={cls.element('mainIcon')}
                    role="button"
                    onClick={this.expandJegVilJobbe}>
                    <JegVilJobbeDeltid width={this.state.width} height={this.state.height} />
                    <TypografiBase type={'normaltekst'}>
                        {getTranslation(this.state.message, this.props.lang)}
                    </TypografiBase>
                </div>
                {this.state.svgList.map((item, index) => {
                    return (
                        <CSSTransition
                            key={index}
                            appear={true}
                            classNames="fade"
                            in={true}
                            timeout={1000}>
                            <div key={index} className={' '}>
                                {item}
                            </div>
                        </CSSTransition>
                    );
                })}
            </div>
            <div className={cls.element('firstDropdown')}>
                <LesMer
                    intro={getTranslation('om_foreldrepenger.jobbe.heltidsjobb', this.props.lang)}>
                    <StrukturertTekst tekst={getContent(firstPanelContent, this.props.lang)} />
                </LesMer>
            </div>
            <LesMer intro={getTranslation('om_foreldrepenger.jobbe.deltidsjobb', this.props.lang)}>
                <StrukturertTekst tekst={getContent(secondPanelContent, this.props.lang)} />
            </LesMer>
        </div>
    );
}
export default withIntl(JobbeDelvis);
