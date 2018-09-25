import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../utils/bem';
import translate from '../../../utils/translate';
import Fane, { Innholdsfane } from './fane/Fane';
import FarOgMor from './FarOgMor';
import TabIndicator from './tabIndicator/TabIndicator';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';

import './hvaErForeldrepenger.less';

const cls = BEMHelper('hvaErForeldrepenger');

const tabs: Innholdsfane[] = [
    {
        label: 'farOgMor',
        icon: <Foreldrepar firstParent="far1" secondParent="mor1" />,
        component: <FarOgMor />
    },
    // {
    //     label: 'farOgMedfar',
    //     firstParent: 'far4',
    //     secondParent: 'far2',
    //     component: null
    // },
    {
        label: 'morOgMedmor',
        icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" />,
        component: null
    },
    {
        label: 'bareFarHarRett',
        icon: (
            <Foreldrepar
                firstParent="far3"
                secondParent="medmor1"
                variant={1}
            />
        ),
        component: null
    },
    {
        label: 'bareMorHarRett',
        icon: (
            <Foreldrepar firstParent="far2" secondParent="mor1" variant={2} />
        ),
        component: null
    },
    {
        label: 'aleneomsorg',
        icon: (
            <Foreldrepar
                firstParent="far1"
                secondParent="medmor1"
                variant={3}
            />
        ),
        component: null
    }
];

interface Props {}

class HvaErForeldrepenger extends React.Component<Props> {
    state: {
        currentTab: number;
        componentToRender: React.ReactNode;
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            currentTab: 0,
            componentToRender: tabs[0].component
        };
    }

    onTabSelect = (tabIndex: number) => {
        const componentToRender = tabs[tabIndex].component;

        this.setState({
            currentTab: tabIndex,
            componentToRender
        });
    };

    render = () => (
        <div className={cls.className}>
            <TypografiBase type="ingress">
                {translate('hva_er_foreldrepenger_ingress')}
            </TypografiBase>
            <div className={cls.element('selectTab')}>
                {tabs.map((tab, index) => (
                    <Fane
                        tab={tab}
                        key={tab.label}
                        isSelected={index === this.state.currentTab}
                        onSelect={() => {
                            this.onTabSelect(index);
                        }}
                    />
                ))}
            </div>
            <TabIndicator
                classTab={this.state.currentTab}
                totalNumberOfTabs={tabs.length}
            />

            <div>{this.state.componentToRender}</div>
        </div>
    );
}

export default HvaErForeldrepenger;
