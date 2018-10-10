import React from 'react';
import './innholdsfaner.less';
import BEMHelper from '../../utils/bem';
import Fane, { Innholdsfane } from './fane/Fane';
import MediaQuery from 'react-responsive';
import { getTranslation, IntlProps, withIntl } from '../../intl/intl';
import Select from './select/Select';
import TypografiBase from 'nav-frontend-typografi';

const cls = BEMHelper('innholdsfaner');

interface TabProps {
    tabs: Innholdsfane[];
}

interface Section {
    section?: string;
}

type Props = TabProps & Section & IntlProps;

function calcBeforeWidth(width: number, index: number) {
    return width / 2 + width * index + 32;
}
function calcAfterWidth(width: number, index: number) {
    return 588 + 32 - (width / 2 + width * index);
}

class Innholdsfaner extends React.Component<Props> {
    state: {
        currentTab: number;
        componentToRender: React.ReactNode;
        tabWidth: number;
        beforeWidth: number;
        afterWidth: number;
    };

    constructor(props: Props) {
        super(props);

        const width = document.querySelector('.'+this.props.section+' .fane');

        this.state = {
            currentTab: 0,
            componentToRender: props.tabs[0].component,
            tabWidth: 100,
            beforeWidth: calcBeforeWidth(120, 0),
            afterWidth: calcAfterWidth(120, 0)
        };
        if (width) {
            this.state.beforeWidth = calcBeforeWidth((this.state.tabWidth = width.scrollWidth), 0);
            this.state.afterWidth = calcAfterWidth((this.state.tabWidth = width.scrollWidth), 0);
        }
    }

    onTabSelect = (tabIndex: number) => {
        const componentToRender = this.props.tabs[tabIndex].component;
        const currentClass = document.querySelector('.'+this.props.section+' .fane');
        if (currentClass) {
            this.state.tabWidth = currentClass.scrollWidth;
            this.state.beforeWidth = calcBeforeWidth(this.state.tabWidth, tabIndex);
            this.state.afterWidth = calcAfterWidth(this.state.tabWidth, tabIndex);
        }

        this.setState({
            currentTab: tabIndex,
            componentToRender
        });
    };

    render = () => (
        <div className={cls.className}>
            <MediaQuery query="(max-width: 799px)">
                <div className={cls.element('faner')}>
                    <TypografiBase className={cls.element('fanetittel')} type="element">
                        {getTranslation('om_foreldrepenger.faner.label', this.props.lang)}
                    </TypografiBase>
                    <Select
                        selected={this.props.tabs[this.state.currentTab]}
                        choices={this.props.tabs}
                        onChoiceSelect={(index: number) => {
                            this.onTabSelect(index);
                        }}
                    />
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 800px)">
                <div role="tablist" className={cls.element('faner')}>
                    {this.props.tabs.map((tab, index) => (
                        <Fane
                            tab={tab}
                            key={tab.label}
                            mos={this.props.tabs.length > 5}
                            isSelected={index === this.state.currentTab}
                            before={this.state.beforeWidth}
                            after={this.state.afterWidth}
                            onSelect={() => {
                                this.onTabSelect(index);
                            }}
                        />
                    ))}
                </div>
            </MediaQuery>
            <div role="tabpanel">{this.state.componentToRender}</div>
        </div>
    );
}

export default withIntl(Innholdsfaner);
