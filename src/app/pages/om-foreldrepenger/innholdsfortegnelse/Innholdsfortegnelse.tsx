import * as React from 'react';
import BEMHelper from 'app/utils/bem';
import { Panel } from 'nav-frontend-paneler';
import { Normaltekst } from 'nav-frontend-typografi';
import { WithLink } from 'app/utils/withLink';
import { getTranslation, withIntl, IntlProps } from 'app/intl/intl';
import { Hovedknapp } from 'nav-frontend-knapper';
import { ForeldrepengerSection } from '../OmForeldrepenger';
import './innholdsfortegnelse.less';
import SvgMask from 'app/components/svg-mask/SvgMask';

const cls = BEMHelper('innholdsfortegnelse');

const icon = require('../../../assets/icons/rakett.svg').default;

const getFirstNumberAfter = (n: number, numbers: number[]) => {
    for (let i = 0; i < numbers.length; i++) {
        if (n < numbers[i] - 100) {
            return i - 1;
        }
    }

    return numbers.length - 1;
};

interface OwnProps {
    sections: ForeldrepengerSection[];
}

type Props = OwnProps & IntlProps;

interface State {
    currentSection: number;
    sectionOffsets?: number[];
}

class Innholdsfortegnelse extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentSection: 0
        };
    }

    componentDidMount = () => {
        document.addEventListener('scroll', this.onScroll);

        const sectionOffsets = this.props.sections
            .map((section) => document.getElementById(section))
            .map((sectionNode) => (sectionNode ? sectionNode.offsetTop : 0));

        this.setState({
            sectionOffsets
        });
    };

    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.onScroll);
    };

    onScroll = () => {
        let currentSection = 0;
        if (this.state.sectionOffsets && window.pageYOffset > this.state.sectionOffsets[0]) {
            currentSection = getFirstNumberAfter(window.pageYOffset, this.state.sectionOffsets);
        }

        this.setState({
            currentSection
        });
    };

    render = () => (
        <Panel className={cls.className}>
            <div className={cls.element('icon')}>
                <SvgMask svg={icon} />
            </div>
            {this.props.sections.map((section, index) => {
                const stringToTranslate = section.replace(new RegExp('-', 'g'), '_');

                return (
                    <Normaltekst className={cls.element('lenke')} key={section}>
                        <WithLink
                            url={`#${section}`}
                            className={
                                this.state.currentSection === index
                                    ? cls.element('currentSection')
                                    : ''
                            }>
                            {getTranslation(`hurtiglenke.${stringToTranslate}`, this.props.lang)}
                        </WithLink>
                    </Normaltekst>
                );
            })}
            <WithLink url="/hva-soker-du/foreldrepenger" noStyling={true}>
                <Hovedknapp className={cls.element('søkNå')}>
                    {getTranslation('innholdsfortegnelse.søk_nå', this.props.lang)}
                </Hovedknapp>
            </WithLink>
        </Panel>
    );
}

export default withIntl(Innholdsfortegnelse);
