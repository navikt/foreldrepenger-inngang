import React, { Component } from 'react';
import classnames from 'classnames';

import TypografiBase from 'nav-frontend-typografi';
import Tekstomrade from 'nav-frontend-tekstomrade';
import KnappBase from 'nav-frontend-knapper';

import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';
import SvgBanner from '../../components/svgBanner/SvgBanner';
import NavigationBox from '../../components/frontpage/navigation-box/NavigationBox';
import { dateIsInLessThanSixWeeks } from '../../utils/dateUtils';
import VeilederMessage from './VeilederMessage';
import DatePicker from './DatePicker';

import './foreldrepengerEntrance.less';

// TODO: Hent fra state etter routing er implementert
const tempRoute = [
    {
        label: 'Foreldrepenger, engangsstønad og svangerskapspenger',
        url: '/hva-vil-du-soke-om'
    },
    {
        label: 'Hva vil du søke om',
        url: '/hva-vil-du-soke-om'
    },
    {
        label: 'Foreldrepenger',
        url: '/hva-vil-du-soke-om/foreldrepenger'
    }
];

const frontpageCls = BEMHelper('frontpage');
const foreldrepengerCls = BEMHelper('foreldrepengerEntrance');

class ForeldrepengerEntrance extends Component {
    state: {
        selectedDate?: Date;
        dateIsValid: boolean;
    } = {
        selectedDate: undefined,
        dateIsValid: true
    };

    setDate = (selectedDate: Date) => {
        const dateIsValid = dateIsInLessThanSixWeeks(selectedDate);

        this.setState({
            selectedDate,
            dateIsValid
        });
    };

    render = () => {
        return (
            <div
                className={classnames(
                    frontpageCls.className,
                    foreldrepengerCls.className
                )}>
                <div className={frontpageCls.element('header')}>
                    <TypografiBase type="undertittel">
                        {translate('hva_vil_du_søke_om')}
                    </TypografiBase>
                </div>
                <div className={frontpageCls.element('content')}>
                    <Breadcrumbs route={tempRoute} />
                    <SvgBanner svgName="family" />
                    <NavigationBox title={translate('foreldrepenger')}>
                        <Tekstomrade>
                            {translate('foreldrepenger_inngang')}
                        </Tekstomrade>
                        <DatePicker
                            date={this.state.selectedDate}
                            onChange={(date: Date) => this.setDate(date)}
                        />
                        {this.state.selectedDate &&
                            !this.state.dateIsValid && (
                                <VeilederMessage
                                    selectedDate={this.state.selectedDate}
                                />
                            )}
                        {this.state.selectedDate && (
                            <KnappBase
                                className={frontpageCls.element('knapp')}
                                type="hoved">
                                {translate('begynn_søknad_om_foreldrepenger')}
                            </KnappBase>
                        )}
                    </NavigationBox>
                </div>
            </div>
        );
    };
}

export default ForeldrepengerEntrance;
