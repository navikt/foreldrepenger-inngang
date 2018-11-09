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

class Innholdsfaner extends React.Component<Props> {
    state: {
        currentTab: number;
        componentToRender: React.ReactNode;
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            currentTab: 0,
            componentToRender: props.tabs[0].component
        };
    }

    onTabSelect = (tabIndex: number) => {
        const componentToRender = this.props.tabs[tabIndex].component;

        this.setState({
            currentTab: tabIndex,
            componentToRender
        });
    };

    render = () => (
        <div className={cls.className}>
            <MediaQuery maxWidth={799}>
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
            <MediaQuery minWidth={800}>
                <div role="tablist" className={cls.element('faner')}>
                    {this.props.tabs.map((tab, index) => (
                        <Fane
                            tab={tab}
                            key={tab.label}
                            mos={this.props.tabs.length > 5}
                            isSelected={index === this.state.currentTab}
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
