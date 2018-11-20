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
    constructor(props: Props) {
        super(props);

        this.state = {
            expanded: false
        };
    }

    handleSectionChange = (section: string) => {
        this.setState({
            currentSection: section
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
            <Panel
                onClick={this.handleToggle}
                className={classnames(classnames(cls.className), {
                    [cls.element('hidden')]: !this.state.currentSection
                })}>
                <div
                    className={cls.element('header', this.state.expanded ? 'expanded' : undefined)}>
                    <div className={cls.element('flexLeft')}>
                        <div className={cls.element('icon')}>
                            <SvgMask smaller={true} svg={icon} />
                        </div>
                        <Element>{tittel}</Element>
                    </div>
                    <NavFrontendChevron stor={true} type={this.state.expanded ? 'opp' : 'ned'} />
                </div>
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
        );
    };
}

export default withIntl(Mobilmeny);
