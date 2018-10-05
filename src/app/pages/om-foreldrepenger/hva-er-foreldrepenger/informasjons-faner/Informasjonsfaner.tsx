import React, { ReactNode } from 'react';
import Tabs from 'nav-frontend-tabs';
import BEMHelper from '../../../../utils/bem';
import InformasjonsFanerLabel from './InformasjonsFanerLabel';
import InformasjonsFanerBody from './InformasjonFanerBody';
import CakeSvg from './CakeSvg';
import CakeFellesSvg from './CakeFellesSvg';

import './informasjonsfaner.less';
import { getTranslation, IntlProps, withIntl } from '../../../../intl/intl';

const cls = BEMHelper('informasjonsfaner');

interface Fane {
    faneLabel: string;
    faneIcon: ReactNode;
    // flere props

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
                {this.props.tabs.length > 1
                    ? getTranslation(
                          'om_foreldrepenger.hvor_lenge.fordeling.tittel',
                          this.props.lang
                      )
                    : getTranslation(
                          'om_foreldrepenger.hvor_lenge.fordeling.tittel_alene',
                          this.props.lang
                      )}
            </div>
            {this.props.tabs.length > 1 && (
                <Tabs
                    tabs={this.props.tabs.map((tab, index) => {
                        const Cake = tab.faneIcon ? CakeSvg : CakeFellesSvg;
                        const color = index === this.state.currentTab ? '#3e3832' : '#0067c5';

                        return {
                            label: (
                                <InformasjonsFanerLabel
                                    label={tab.faneLabel}
                                    icon={<Cake color={color} />}
                                />
                            )
                        };
                    })}
                    onChange={this.onTabChange}
                />
            )}
            <InformasjonsFanerBody {...this.props.tabs[this.state.currentTab].bodyProps} />
        </div>
    );
}

export default withIntl(Informasjonsfaner);
