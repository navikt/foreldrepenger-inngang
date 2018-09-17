import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../utils/bem';
import translate from '../../../utils/translate';
import Fane, { FaneType } from './fane/Fane';

import './hvaErForeldrepenger.less';

const cls = BEMHelper('hvaErForeldrepenger');

const FarOgMor = () => {
    return <div>Heisann</div>;
};

const tabs: FaneType[] = [
    {
        label: 'farOgMor',
        firstParent: 'far1',
        secondParent: 'medmor1',
        component: <FarOgMor />
    },
    {
        label: 'morOgMedmor',
        firstParent: 'mor2',
        secondParent: 'medmor2',
        component: null
    },
    {
        label: 'bareFarHarRett',
        firstParent: 'far3',
        secondParent: 'medmor1',
        variant: 1,
        component: null
    },
    {
        label: 'bareMorHarRett',
        firstParent: 'far2',
        secondParent: 'mor1',
        variant: 2,
        component: null
    },
    {
        label: 'aleneomsorg',
        firstParent: 'far1',
        secondParent: 'mor1',
        variant: 3,
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
            <div className={cls.element('tabIndicator')} />
            <div className="dhsla">{this.state.componentToRender}</div>
        </div>
    );
}

export default HvaErForeldrepenger;
