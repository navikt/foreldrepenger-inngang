import React from 'react';
import { injectIntl, IntlShape } from 'react-intl';
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

interface InjectedProps {
    intl: IntlShape;
}

type Props = OwnProps & InjectedProps;

interface State {
    currentTab: number;
}

class Innholdsfaner extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            currentTab: 0,
        };
    }

    onTabSelect = (tabIndex: number) => {
        if (this.props.onSelect) {
            this.props.onSelect(this.props.tabs[tabIndex].label);
        }

        this.setState({
            currentTab: tabIndex,
        });
    };

    render = () => (
        <div className={cls.block}>
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
            <div role="tabpanel">{this.props.tabs[this.state.currentTab].component}</div>
        </div>
    );
}

export default injectIntl(Innholdsfaner);
