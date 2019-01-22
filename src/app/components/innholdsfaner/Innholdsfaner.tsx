import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import BEMHelper from '../../utils/bem';
import Fane, { Innholdsfane } from './fane/Fane';
import getTranslation from 'app/utils/i18nUtils';
import MediaQuery from 'react-responsive';
import Select from './select/Select';
import TypografiBase from 'nav-frontend-typografi';
import './innholdsfaner.less';

const cls = BEMHelper('innholdsfaner');

interface OwnProps {
    tabs: Innholdsfane[];
    onSelect?: (selectedTab: string) => void;
}

type Props = OwnProps & InjectedIntlProps;

interface State {
    currentTab: number;
    componentToRender: React.ReactNode;
}

class Innholdsfaner extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            currentTab: 0,
            componentToRender: props.tabs[0].component
        };
    }

    onTabSelect = (tabIndex: number) => {
        const componentToRender = this.props.tabs[tabIndex].component;

        if (this.props.onSelect) {
            this.props.onSelect(this.props.tabs[tabIndex].label);
        }

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
                        {getTranslation('om_foreldrepenger.faner.label', this.props.intl)}
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

export default injectIntl(Innholdsfaner);
