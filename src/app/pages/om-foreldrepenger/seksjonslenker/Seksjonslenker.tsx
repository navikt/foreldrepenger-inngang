import * as React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import throttle from 'lodash/throttle';
import { Cancelable } from 'lodash';

import BEMHelper from 'app/utils/bem';
import WithLink from 'app/components/with-link/WithLink';
import { getTranslation, withIntl, Language } from 'app/intl/intl';
import { ForeldrepengerSection } from '../OmForeldrepenger';
import './seksjonslenker.less';

const cls = BEMHelper('seksjonslenker');

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
    onSectionChange?: (section: string) => void;
}

interface State {
    currentSection?: number;
    sectionOffsets?: number[];
    documentHeight: number;
    sectionNames: string[];
}

class Innholdsfortegnelse extends React.Component<Props, State> {
    debouncedOnScroll: (() => void) & Cancelable;

    constructor(props: Props) {
        super(props);

        const convertToTranslatable = (s: string) => s.replace(new RegExp('-', 'g'), '_');
        const sectionNames = this.props.sections.map((section) =>
            getTranslation(`hurtiglenke.${convertToTranslatable(section)}`, this.props.lang)
        );

        this.state = {
            documentHeight: this.getDocumentHeight(),
            sectionNames
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
        const nextState: any = {};

        const currentDocumentHeight = this.getDocumentHeight();
        const currentScrollHeight = this.getDocumentScroll();
        let currentSectionOffsets = this.state.sectionOffsets;

        if (currentDocumentHeight !== this.state.documentHeight) {
            currentSectionOffsets = this.getSectionOffsets();
            nextState.documentHeight = currentDocumentHeight;
            nextState.sectionOffsets = currentSectionOffsets;
        }

        if (currentSectionOffsets) {
            const nextSection = getFirstNumberAfter(currentScrollHeight, currentSectionOffsets);

            const didSectionChange = this.state.currentSection !== nextSection;
            if (didSectionChange) {
                nextState.currentSection = nextSection;

                if (this.props.onSectionChange) {
                    this.props.onSectionChange(this.state.sectionNames[nextSection]);
                }
            }
        }

        this.setState(nextState);
    };

    render = () =>
        this.props.sections.map((section, index) => {
            return (
                <Normaltekst className={cls.element('lenke')} key={section}>
                    <WithLink
                        url={`#${section}`}
                        className={
                            this.state.currentSection === index ? cls.element('currentSection') : ''
                        }>
                        {this.state.sectionNames[index]}
                    </WithLink>
                </Normaltekst>
            );
        });
}

export default withIntl(Innholdsfortegnelse);
