import React, { ReactNode } from 'react';
import { getTranslation, IntlProps, withIntl } from '../../../../intl/intl';
import BEMHelper from '../../../../utils/bem';
import InformasjonsfanerBody from './InformasjonsfanerBody';
import Tabs from 'nav-frontend-tabs';
import TypografiBase from 'nav-frontend-typografi';
import './informasjonsfaner.less';

const cls = BEMHelper('informasjonsfaner');

interface Fane {
    value: string;
    label: string;
    icon: ReactNode;
    body: {
        tittel: string;
        icon: string | React.ReactNode;
        antallUker: string;
        punktliste: string[];
        component: ReactNode;
    };
}

interface TabProps {
    tabs: Fane[];
    title?: string;
    onTabSelected?: (tab: string) => void;
}

type Props = TabProps & IntlProps;

class Informasjonsfaner extends React.Component<Props> {
    state: {
        currentTab: number;
        color: any;
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            currentTab: 0,
            color: 'blue'
        };
    }

    onTabChange = (_: any, index: number) => {
        if (this.props.onTabSelected) {
            this.props.onTabSelected(this.props.tabs[index].value);
        }

        this.setState({
            currentTab: index,
            color: 'red'
        });
    };

    render = () => (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <TypografiBase type="element">
                    {this.props.title
                        ? this.props.title
                        : this.props.tabs.length > 1
                        ? getTranslation(
                              'om_foreldrepenger.hvor_lenge.fordeling.tittel',
                              this.props.lang
                          )
                        : getTranslation(
                              'om_foreldrepenger.hvor_lenge.fordeling.tittel_alene',
                              this.props.lang
                          )}
                </TypografiBase>
            </div>
            {this.props.tabs.length > 1 && (
                <Tabs
                    kompakt={true}
                    tabs={this.props.tabs.map((tab) => ({
                        label: tab.label
                    }))}
                    onChange={this.onTabChange}
                />
            )}
            <InformasjonsfanerBody {...this.props.tabs[this.state.currentTab].body} />
        </div>
    );
}

export default withIntl(Informasjonsfaner);
