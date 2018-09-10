import React, { Component } from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Tekstomrade from 'nav-frontend-tekstomrade';
import KnappBase from 'nav-frontend-knapper';
import classnames from 'classnames';
import NavDatovelger from 'nav-datovelger';

import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';
import SvgBanner from '../../components/svgBanner/SvgBanner';
import NavigationBox from '../../components/frontpage/navigation-box/NavigationBox';

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
    } = {
        selectedDate: undefined
    };

    setDate = (selectedDate: Date) => {
        this.setState({
            selectedDate
        });
    };

    render = () => (
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
                    <KnappBase
                        className={frontpageCls.element('knapp')}
                        type="hoved">
                        {translate('begynn_søknad_om_foreldrepenger')}
                    </KnappBase>
                </NavigationBox>
            </div>
        </div>
    );
}

const DatePicker = ({
    date,
    onChange
}: {
    date: any;
    onChange: (date: Date) => void;
}) => {
    return (
        <div className={foreldrepengerCls.element('datovelger')}>
            <TypografiBase type="element">
                {translate('når_starter_du')}
            </TypografiBase>
            <NavDatovelger.Datovelger
                id="foreldrepenger-startdato"
                locale="no"
                dato={date}
                onChange={(newDate: Date) => onChange(newDate)}
                input={{
                    placeholder: 'dd.mm.åååå'
                }}
            />
        </div>
    );
};

export default ForeldrepengerEntrance;
