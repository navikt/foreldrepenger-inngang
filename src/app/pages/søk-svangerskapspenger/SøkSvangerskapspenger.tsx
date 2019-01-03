import React, { Component } from 'react';
import { getContent } from 'app/utils/getContent';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import BEMHelper from '../../utils/bem';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import classnames from 'classnames';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import './søkSvangerskapspenger.less';

const hvaSøkerDuCls = BEMHelper('hvaSøkerDu');
const svangerskapspengerCls = BEMHelper('søkSvangerskapspenger');

interface Props {
    route: any;
}

const infoSvg = require('../../assets/ark/ark-info.svg').default;

class SøkForeldrepenger extends Component<Props & InjectedIntlProps> {
    render = () => (
        <div className={classnames(hvaSøkerDuCls.className, svangerskapspengerCls.className)}>
            <Sidebanner text={getTranslation('hva_søker_du.tittel', this.props.intl)} />
            <div role="main" className={hvaSøkerDuCls.element('body')}>
                <div className={hvaSøkerDuCls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedIllustrasjon
                        svg={infoSvg}
                        title={getTranslation('svangerskapspenger', this.props.intl)}>
                        <StrukturertTekst
                            tekst={getContent(
                                'hva-søker-du/søk-svangerskapspenger',
                                this.props.intl
                            )}
                        />
                    </PanelMedIllustrasjon>
                </div>
            </div>
        </div>
    );
}

export default injectIntl(SøkForeldrepenger);
