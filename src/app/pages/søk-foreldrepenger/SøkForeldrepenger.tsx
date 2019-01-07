import React, { Component } from 'react';
import classnames from 'classnames';
import KnappBase from 'nav-frontend-knapper';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import SvgBanner from '../../components/svg-banner/SvgBanner';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import { datoForUttakErGyldig } from '../../utils/datoUtils';
import VeilederMessage from './Veiledermelding';
import Datovelger from './Datovelger';
import MediaQuery from 'react-responsive';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import Environment from 'app/Environment';
import './søkForeldrepenger.less';
import getTranslation from 'app/utils/i18nUtils';

const hvaSøkerDuCls = BEMHelper('hvaSøkerDu');
const foreldrepengerCls = BEMHelper('søkForeldrepenger');

interface Props {
    route: any;
}

class SøkForeldrepenger extends Component<Props & InjectedIntlProps> {
    state: {
        selectedDate?: Date;
        dateIsValid: boolean;
    } = {
        selectedDate: undefined,
        dateIsValid: true
    };

    setDate = (selectedDate: Date) => {
        const dateIsValid = datoForUttakErGyldig(selectedDate);

        this.setState({
            selectedDate,
            dateIsValid
        });
    };

    render = () => {
        return (
            <div className={classnames(hvaSøkerDuCls.className, foreldrepengerCls.className)}>
                <SøkForeldrepengerHeader />
                <Sidebanner text={getTranslation('hva_søker_du.tittel', this.props.intl)} />
                <div role="main" className={hvaSøkerDuCls.element('body')}>
                    <div className={hvaSøkerDuCls.element('content')}>
                        <Breadcrumbs path={location.pathname} />
                        <SvgBanner />
                        <PanelMedTittel title={getTranslation('foreldrepenger', this.props.intl)}>
                            <Innhold
                                source={getSource(
                                    'hva-søker-du/søk-foreldrepenger',
                                    this.props.intl
                                )}
                            />
                            <Datovelger
                                date={this.state.selectedDate}
                                dateIsValid={!!this.state.selectedDate && this.state.dateIsValid}
                                onChange={(date: Date) => this.setDate(date)}
                                parentCls={foreldrepengerCls}
                            />
                            {this.state.selectedDate && !this.state.dateIsValid && (
                                <VeilederMessage
                                    parentCls={foreldrepengerCls}
                                    selectedDate={this.state.selectedDate}
                                />
                            )}
                            {this.state.selectedDate && (
                                <a tabIndex={-1} href={Environment.SOK_FORELDREPENGER_URL}>
                                    <KnappBase type="hoved" role="link">
                                        <MediaQuery maxWidth={575}>
                                            {getTranslation(
                                                'søk_foreldrepenger.knapp_mobil',
                                                this.props.intl
                                            )}
                                        </MediaQuery>
                                        <MediaQuery minWidth={576}>
                                            {getTranslation(
                                                'søk_foreldrepenger.knapp',
                                                this.props.intl
                                            )}
                                        </MediaQuery>
                                    </KnappBase>
                                </a>
                            )}
                        </PanelMedTittel>
                    </div>
                </div>
            </div>
        );
    };
}

const SøkForeldrepengerHeader = () => {
    return (
        <HeaderInformasjon
            title="Foreldrepenger"
            description="Søk om foreldrepenger, utsettelse eller endring av foreldrepengeperioden."
            siteUrl="https://familie.nav.no/hva-soker-du/foreldrepenger"
        />
    );
};

export default injectIntl(SøkForeldrepenger);
