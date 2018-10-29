import React, { ReactNode } from 'react';
import Tabs from 'nav-frontend-tabs';
import BEMHelper from '../../../../utils/bem';
import InformasjonsfanerBody from './InformasjonsfanerBody';

import './informasjonsfaner.less';
import { getTranslation, IntlProps, withIntl } from '../../../../intl/intl';
import TypografiBase from 'nav-frontend-typografi';

const cls = BEMHelper('informasjonsfaner');

interface Fane {
    faneLabel: string;
    faneIcon: ReactNode;
    bodyProps: {
        tittel: string;
        icon: string | React.ReactNode;
        antallUker: string;
        punktliste: string[];
        component: ReactNode;
    };
}

interface TabProps {
    tabs: Fane[];
    aleneforelder?: boolean;
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

    onTabChange = (event: any, index: number) => {
        this.setState({
            currentTab: index,
            color: 'red'
        });
    };

    render = () => (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <TypografiBase type="element">
                    {this.props.tabs.length > 1 && !this.props.aleneforelder
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
                        label: tab.faneLabel
                    }))}
                    onChange={this.onTabChange}
                />
            )}
            <InformasjonsfanerBody {...this.props.tabs[this.state.currentTab].bodyProps} />
        </div>
    );
}

export default withIntl(Informasjonsfaner);
