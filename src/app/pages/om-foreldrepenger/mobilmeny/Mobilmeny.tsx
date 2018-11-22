import * as React from 'react';
import classnames from 'classnames';
import { Panel } from 'nav-frontend-paneler';
import { Hovedknapp } from 'nav-frontend-knapper';

import BEMHelper from 'app/utils/bem';
import Seksjonslenker from '../seksjonslenker/Seksjonslenker';
import SvgMask from 'app/components/svg-mask/SvgMask';
import { getTranslation, withIntl, Language } from 'app/intl/intl';
import { ForeldrepengerSection } from '../OmForeldrepenger';
import { WithLink } from 'app/utils/withLink';
import './mobilmeny.less';
import { Element } from 'nav-frontend-typografi';
import NavFrontendChevron from 'nav-frontend-chevron';

const cls = BEMHelper('mobilmeny');
const icon = require('../../../assets/icons/rakett.svg').default;

interface Props {
    sections: ForeldrepengerSection[];
    lang: Language;
}

interface State {
    currentSection?: string;
    expanded: boolean;
}

class Mobilmeny extends React.Component<Props, State> {
    menuRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);

        this.menuRef = React.createRef();
        this.state = {
            expanded: false
        };
    }

    componentWillMount = () => {
        document.addEventListener('click', this.handleClick);
    };

    componentWillUnmount = () => {
        document.removeEventListener('click', this.handleClick);
    };

    handleClick = (event: MouseEvent) => {
        if (this.menuRef.current) {
            const target = event.target as HTMLElement;
            const targetIsHref = target.tagName === 'A';
            const clickedOutsideMenu = !this.menuRef.current.contains(target);

            if (targetIsHref || clickedOutsideMenu) {
                this.closeMenu();
            }
        }
    };

    closeMenu = () => {
        this.setState({
            expanded: false
        });
    };

    handleSectionChange = (section: string) => {
        this.setState({
            currentSection: section,

            // Lukk menyen hvis brukeren har scrollet til toppen.
            expanded: section ? this.state.expanded : false
        });
    };

    handleToggle = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    render = () => {
        const tittel =
            this.state.currentSection ||
            getTranslation('om_foreldrepenger.tittel', this.props.lang);

        return (
            <div ref={this.menuRef}>
                <Panel
                    className={classnames(classnames(cls.className), {
                        [cls.element('hidden')]: !this.state.currentSection
                    })}>
                    <MobilMenyHeader
                        header={tittel}
                        expanded={this.state.expanded}
                        onClick={this.handleToggle}
                    />
                    <div
                        className={cls.element(
                            'expandable',
                            this.state.expanded ? 'expanded' : undefined
                        )}>
                        <div className={cls.element('lenker')}>
                            <Seksjonslenker
                                sections={this.props.sections}
                                onSectionChange={this.handleSectionChange}
                            />
                        </div>
                        <WithLink
                            className={cls.element('søkNå')}
                            url="/hva-soker-du/foreldrepenger"
                            noStyling={true}>
                            <Hovedknapp>
                                {getTranslation('innholdsfortegnelse.søk_nå', this.props.lang)}
                            </Hovedknapp>
                        </WithLink>
                    </div>
                </Panel>
            </div>
        );
    };
}

const MobilMenyHeader = ({
    onClick,
    expanded,
    header
}: {
    onClick: () => void;
    expanded: boolean;
    header: string;
}) => (
    <div onClick={onClick} className={cls.element('header', expanded ? 'expanded' : undefined)}>
        <div className={cls.element('flexLeft')}>
            <div className={cls.element('icon')}>
                <SvgMask smaller={true} svg={icon} />
            </div>
        </div>
        <Element>{header}</Element>
        <NavFrontendChevron stor={true} type={expanded ? 'opp' : 'ned'} />
    </div>
);

export default withIntl(Mobilmeny);
