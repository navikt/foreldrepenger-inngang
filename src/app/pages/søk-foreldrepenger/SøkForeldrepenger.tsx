import React, { Component } from 'react';
import classnames from 'classnames';

import TypografiBase from 'nav-frontend-typografi';
import Tekstomrade from 'nav-frontend-tekstomrade';
import KnappBase from 'nav-frontend-knapper';

import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import { getTranslation, IntlProps, withIntl } from '../../intl/intl';
import SvgBanner from '../../components/svg-banner/SvgBanner';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import { datoErOmMindreEnnSeksUker } from '../../utils/datoUtils';
import VeilederMessage from './Veiledermelding';
import Datovelger from './Datovelger';
import externalUrls from '../../utils/externalUrls';
import MediaQuery from 'react-responsive';

import './søkForeldrepenger.less';

const hvaSøkerDuCls = BEMHelper('hvaSøkerDu');
const foreldrepengerCls = BEMHelper('søkForeldrepenger');

interface Props {
    route: any;
}

class SøkForeldrepenger extends Component<Props & IntlProps> {
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
            <div className={classnames(hvaSøkerDuCls.className, foreldrepengerCls.className)}>
                <header className={hvaSøkerDuCls.element('header')}>
                    <TypografiBase type="undertittel">
                        {getTranslation('søk_foreldrepenger.tittel', this.props.lang)}
                    </TypografiBase>
                </header>
                <main className={hvaSøkerDuCls.element('body')}>
                    <div className={hvaSøkerDuCls.element('content')}>
                        <Breadcrumbs path={location.pathname} />
                        <SvgBanner />
                        <PanelMedTittel title={getTranslation('foreldrepenger', this.props.lang)}>
                            <Tekstomrade>
                                {getTranslation('søk_foreldrepenger.informasjon', this.props.lang)}
                            </Tekstomrade>
                            <Datovelger
                                date={this.state.selectedDate}
                                dateIsValid={this.state.selectedDate && this.state.dateIsValid}
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
                                <a
                                    tabIndex={-1}
                                    href={externalUrls.søk_foreldrepenger_eller_engangsstønad}>
                                    <KnappBase type="hoved" role="link">
                                        <MediaQuery query="(max-width: 575px)">
                                            {getTranslation(
                                                'søk_foreldrepenger.knappMobil',
                                                this.props.lang
                                            )}
                                        </MediaQuery>
                                        <MediaQuery query="(min-width: 576px)">
                                            {getTranslation(
                                                'søk_foreldrepenger.knapp',
                                                this.props.lang
                                            )}
                                        </MediaQuery>
                                    </KnappBase>
                                </a>
                            )}
                        </PanelMedTittel>
                    </div>
                </main>
            </div>
        );
    };
}

export default withIntl(SøkForeldrepenger);
