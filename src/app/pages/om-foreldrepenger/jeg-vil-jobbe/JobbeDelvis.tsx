import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
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
import getTranslation from 'app/utils/i18nUtils';
const firstPanelContent = 'om-foreldrepenger/jeg-vil-jobbe/heltidsjobb';
const secondPanelContent = 'om-foreldrepenger/jeg-vil-jobbe/deltidsjobb';
const cls = BEMHelper('jegVilJobbe');

class JobbeDelvis extends React.Component<InjectedIntlProps> {
    state: {
        svgList: object[];
        message: string;
        width: string;
        height: string;
    };

    constructor(props: InjectedIntlProps) {
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
                    tekst={getContent(
                        'om-foreldrepenger/jeg-vil-jobbe/deltid-fane',
                        this.props.intl
                    )}
                />
                <div
                    className={cls.element('mainIcon')}
                    role="button"
                    onClick={this.expandJegVilJobbe}>
                    <JegVilJobbeDeltid width={this.state.width} height={this.state.height} />
                    <TypografiBase type={'normaltekst'}>
                        {getTranslation(this.state.message, this.props.intl)}
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
                    intro={getTranslation('om_foreldrepenger.jobbe.heltidsjobb', this.props.intl)}>
                    <StrukturertTekst tekst={getContent(firstPanelContent, this.props.intl)} />
                </LesMer>
            </div>
            <LesMer intro={getTranslation('om_foreldrepenger.jobbe.deltidsjobb', this.props.intl)}>
                <StrukturertTekst tekst={getContent(secondPanelContent, this.props.intl)} />
            </LesMer>
        </div>
    );
}
export default injectIntl(JobbeDelvis);
