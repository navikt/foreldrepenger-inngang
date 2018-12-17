import React, { ReactNode } from 'react';
import { getTranslation, IntlProps, withIntl } from '../../../../intl/intl';
import BEMHelper from '../../../../utils/bem';
import Faneinnhold from './Faneinnhold';
import Tabs from 'nav-frontend-tabs';
import TypografiBase from 'nav-frontend-typografi';
import './informasjonsfaner.less';
import { Kvote } from 'app/utils/foreldresituasjon';

const cls = BEMHelper('informasjonsfaner');

export interface FaneinnholdProps {
    snakkeboble: {
        tittel: string;
        punkter: string[];
        icon: string | React.ReactNode;
    };
    component: ReactNode;
}

export interface InformasjonsfaneProps {
    kvote: Kvote;
    label: string;
    innhold: FaneinnholdProps;
}

interface OwnProps {
    title: string;
    tabs: InformasjonsfaneProps[];
    onTabSelected?: (tab: string) => void;
}

type Props = OwnProps & IntlProps;

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
            this.props.onTabSelected(this.props.tabs[index].kvote);
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
            <Faneinnhold {...this.props.tabs[this.state.currentTab].innhold} />
        </div>
    );
}

export default withIntl(Informasjonsfaner);
