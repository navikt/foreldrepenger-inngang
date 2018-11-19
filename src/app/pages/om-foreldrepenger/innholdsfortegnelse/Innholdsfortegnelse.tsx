import * as React from 'react';
import BEMHelper from 'app/utils/bem';
import { Panel } from 'nav-frontend-paneler';
import { Normaltekst } from 'nav-frontend-typografi';
import { WithLink } from 'app/utils/withLink';
import { getTranslation, withIntl, Language } from 'app/intl/intl';
import { Hovedknapp } from 'nav-frontend-knapper';
import { ForeldrepengerSection } from '../OmForeldrepenger';
import classnames from 'classnames';
import './innholdsfortegnelse.less';
import SvgMask from 'app/components/svg-mask/SvgMask';
import throttle from 'lodash/throttle';
import { Cancelable } from 'lodash';

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

interface Props {
    sections: ForeldrepengerSection[];
    lang: Language;
}

interface State {
    currentSection?: number;
    sectionOffsets?: number[];
    documentHeight: number;
}

class Innholdsfortegnelse extends React.Component<Props, State> {
    debouncedOnScroll: (() => void) & Cancelable;

    constructor(props: Props) {
        super(props);
        this.state = {
            documentHeight: this.getDocumentHeight()
        };

        this.debouncedOnScroll = throttle(this.onScroll, 100);
    }

    componentDidMount = () => {
        document.addEventListener('scroll', this.debouncedOnScroll);

        this.setState({
            sectionOffsets: this.getSectionOffsets()
        });
    };

    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.debouncedOnScroll);
    };

    getDocumentHeight = () => document.body.scrollHeight;
    getDocumentScroll = () => window.scrollY || window.pageYOffset;
    getSectionOffsets = () =>
        this.props.sections
            .map((section) => document.getElementById(section))
            .map((sectionNode) => (sectionNode ? sectionNode.offsetTop : 0));

    onScroll = () => {
        const nextState: any = {
            currentSection: undefined
        };

        const currentDocumentHeight = this.getDocumentHeight();
        const currentScrollHeight = this.getDocumentScroll();
        let currentSectionOffsets = this.state.sectionOffsets;

        if (currentDocumentHeight !== this.state.documentHeight) {
            currentSectionOffsets = this.getSectionOffsets();
            nextState.documentHeight = currentDocumentHeight;
            nextState.sectionOffsets = currentSectionOffsets;
        }

        if (currentSectionOffsets) {
            nextState.currentSection = getFirstNumberAfter(
                currentScrollHeight,
                currentSectionOffsets
            );
        }

        this.setState(nextState);
    };

    render = () => (
        <Panel className={classnames(cls.className)}>
            <div className={cls.element('icon')}>
                <SvgMask small={true} svg={icon} />
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
