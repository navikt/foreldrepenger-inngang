import React, { Component } from 'react';
import classnames from 'classnames';

import TypografiBase from 'nav-frontend-typografi';
import Tekstomrade from 'nav-frontend-tekstomrade';
import KnappBase from 'nav-frontend-knapper';

import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';
import SvgBanner from '../../components/svg-banner/SvgBanner';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import { datoErOmMindreEnnSeksUker } from '../../utils/datoUtils';
import VeilederMessage from './Veiledermelding';
import Datovelger from './Datovelger';

import './søkForeldrepenger.less';

const hvaSøkerDuCls = BEMHelper('hvaSøkerDu');
const foreldrepengerCls = BEMHelper('søkForeldrepenger');

interface Props {
    route: any;
}

class SøkForeldrepenger extends Component<Props> {
    state: {
        selectedDate?: Date;
        dateIsValid: boolean;
    } = {
        selectedDate: undefined,
        dateIsValid: true
    };

    setDate = (selectedDate: Date) => {
        const dateIsValid = datoErOmMindreEnnSeksUker(selectedDate);

        this.setState({
            selectedDate,
            dateIsValid
        });
    };

    render = () => {
        return (
            <div
                className={classnames(
                    hvaSøkerDuCls.className,
                    foreldrepengerCls.className
                )}>
                <div className={hvaSøkerDuCls.element('header')}>
                    <TypografiBase type="undertittel">
                        {translate('hva_vil_du_søke_om')}
                    </TypografiBase>
                </div>
                <div className={hvaSøkerDuCls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <SvgBanner svgName="family" />
                    <PanelMedTittel title={translate('foreldrepenger')}>
                        <Tekstomrade>
                            {translate('foreldrepenger_inngang')}
                        </Tekstomrade>
                        <Datovelger
                            date={this.state.selectedDate}
                            onChange={(date: Date) => this.setDate(date)}
                            parentCls={foreldrepengerCls}
                        />
                        {this.state.selectedDate &&
                            !this.state.dateIsValid && (
                                <VeilederMessage
                                    parentCls={foreldrepengerCls}
                                    selectedDate={this.state.selectedDate}
                                />
                            )}
                        {this.state.selectedDate && (
                            <KnappBase
                                className={hvaSøkerDuCls.element('knapp')}
                                type="hoved">
                                {translate('begynn_søknad_om_foreldrepenger')}
                            </KnappBase>
                        )}
                    </PanelMedTittel>
                </div>
            </div>
        );
    };
}

export default SøkForeldrepenger;
