import React, { Component } from 'react';
import classnames from 'classnames';
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
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';
import NAVLAB from 'app/utils/navlab';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
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
                <SøkForeldrepengerHeader />
                <Sidebanner text={getTranslation('hva_søker_du.tittel', this.props.lang)} />
                <main className={hvaSøkerDuCls.element('body')}>
                    <div className={hvaSøkerDuCls.element('content')}>
                        <Breadcrumbs path={location.pathname} />
                        <SvgBanner />
                        <PanelMedTittel title={getTranslation('foreldrepenger', this.props.lang)}>
                            <StrukturertTekst
                                tekst={getContent(
                                    'hva-vil-du-søke-om/søk-foreldrepenger',
                                    this.props.lang
                                )}
                            />
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
                                    href={
                                        NAVLAB
                                            ? '/under-arbeid'
                                            : externalUrls.søk_foreldrepenger_eller_engangsstønad
                                    }>
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

const SøkForeldrepengerHeader = () => {
    return (
        <HeaderInformasjon
            title={'foreldrepenger - www.nav.no'}
            siteDescription={'nav.no Søk om foreldrepenger'}
            propTitle={'nav.no foreldrepenger'}
            propDescription={'nav.no Søk om foreldrepenger'}
            imageUrl={'/dist/assets/tmp_hva-soker-du/sokForeldrepenger.png'}
            siteUrl={'https://familie.nav.no/hva-soker-du/foreldrepenger'}
            imageLargeUrl={'/dist/assets/tmp_hva-soker-du/sokForeldrepenger-large.png'}
        />
    );
};

export default withIntl(SøkForeldrepenger);
