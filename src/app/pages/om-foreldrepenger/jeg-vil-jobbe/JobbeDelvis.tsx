import * as React from 'react';
import { getTranslation, IntlProps, withIntl } from '../../../intl/intl';
import LesMer from '../../../components/les-mer/LesMer';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../utils/getContent';
import BEMHelper from '../../../utils/bem';
import { FlexibleSvg } from '../../../utils/CustomSVG';
const firstPanelContent = 'all-informasjon/jeg-vil-jobbe/heltidsjobb';
const secondPanelContent = 'all-informasjon/jeg-vil-jobbe/deltidsjobb';
const cls = BEMHelper('jegVilJobbe');

class JobbeDelvis extends React.Component<IntlProps> {
    state: {
        classAppend: string;
        svgList: object[];
        extendSvg: boolean;
    };

    constructor(props: IntlProps) {
        super(props);
        this.state = {
            classAppend: 'fade-out',
            svgList: [],
            extendSvg: false
        };

        this.expandJegVilJobbe = this.expandJegVilJobbe.bind(this);
    }

    expandJegVilJobbe() {
        let tmp = this.state.extendSvg;
        let list = [...this.state.svgList];
        tmp ? (tmp = false) : (tmp = true);
        tmp
            ? (list = [
                  <div className={cls.element('expandIcon ')}>
                      <FlexibleSvg
                          iconRef={
                              require('../../../assets/icons/jeg-vil-jobbe-deltid-expandert.svg')
                                  .default
                          }
                      />
                  </div>
              ])
            : (list = []);
        console.log(list);
        this.setState({
            extendSvg: tmp,
            svgList: list
        }, () => this.setEntrance());
    }

    setEntrance() {
        let classHolder = this.state.classAppend;
        console.log(classHolder);
        classHolder === 'fade-out' ? (classHolder = 'fade-enter') : (classHolder = 'fade-out');
        console.log(classHolder);
        this.setState({
            classAppend: classHolder,
        }, () => console.log(classHolder));
    }

    render = () => (
        <div className={cls.element('jobbeDelvis')}>
            <StrukturertTekst
                tekst={getContent(
                    'all-informasjon/jeg-vil-jobbe/heltid-fane-header',
                    this.props.lang
                )}
            />
            <div className={cls.element('mainIcon')} role="button" onClick={this.expandJegVilJobbe}>
                <FlexibleSvg
                    iconRef={require('../../../assets/icons/jeg-vil-jobbe-deltid.svg').default}
                />
            </div>
            {this.state.svgList.map((item) => {
                return(<div key={this.state.classAppend} className={this.state.classAppend}> { item }</div>);
            })}

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
