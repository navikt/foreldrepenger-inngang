import * as React from 'react';
import './innholdsfaner.less';
import BEMHelper from '../../utils/bem';
import Fane, { Innholdsfane } from './fane/Fane';
// import TabIndicator from './tabIndicator/TabIndicator';

const cls = BEMHelper('innholdsfaner');

interface Props {
    tabs: Innholdsfane[];
}

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
            <div className={cls.element('faner')}>
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
            <div className={cls.element('tabIndicator')} />
            <div>{this.state.componentToRender}</div>
        </div>
    );
}

export default Innholdsfaner;
