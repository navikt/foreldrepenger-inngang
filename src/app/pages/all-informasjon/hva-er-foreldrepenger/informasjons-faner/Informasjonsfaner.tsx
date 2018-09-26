import React, { ReactNode } from 'react';
import Tabs from 'nav-frontend-tabs';
import BEMHelper from '../../../../utils/bem';
import InformasjonsFanerLabel from './InformasjonsFanerLabel';
import InformasjonsFanerBody from './InformasjonFanerBody';
import CakeSvg from './CakeSvg';
import CakeFellesSvg from './CakeFellesSvg';
import Fane from '../fane/Fane';

import './informasjonsfaner.less';
import translate from '../../../../utils/translate';

const cls = BEMHelper('Informasjonsfaner');

interface Fane {
    faneLabel: string;
    faneIcon: ReactNode;
    // flere props

    bodyProps: {
        tittel: string;
        icon: string;
        punktliste: string[];
        component: ReactNode;
    };
}

interface Props {
    tabs: Fane[];
}

class Informasjonsfaner extends React.Component<Props> {
    state: {
        // TabBody: React.ReactNode;
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
                {translate('subFanerHeader')}
            </div>
            <Tabs
                tabs={this.props.tabs.map((tab, index) => {
                    const Cake = tab.faneIcon ? CakeSvg : CakeFellesSvg;
                    const color =
                        index === this.state.currentTab ? '#3e3832' : '#0067c5';

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
            <InformasjonsFanerBody
                {...this.props.tabs[this.state.currentTab].bodyProps}
            />
        </div>
    );
}

export default Informasjonsfaner;
