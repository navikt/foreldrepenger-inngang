import React, { Component } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import { getTranslation, IntlProps, withIntl } from '../../intl/intl';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';
import classnames from 'classnames';
import './søkSvangerskapspenger.less';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';

const hvaSøkerDuCls = BEMHelper('hvaSøkerDu');
const svangerskapspengerCls = BEMHelper('søkSvangerskapspenger');

interface Props {
    route: any;
}

const infoSvg = require('../../assets/ark/ark-info.svg').default;

class SøkForeldrepenger extends Component<Props & IntlProps> {
    render = () => (
        <div className={classnames(hvaSøkerDuCls.className, svangerskapspengerCls.className)}>
            <Sidebanner text={getTranslation('hva_søker_du.tittel', this.props.lang)} />
            <div role="main" className={hvaSøkerDuCls.element('body')}>
                <div className={hvaSøkerDuCls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedIllustrasjon
                        svg={infoSvg}
                        title={getTranslation('svangerskapspenger', this.props.lang)}>
                        <StrukturertTekst
                            tekst={getContent(
                                'hva-søker-du/søk-svangerskapspenger',
                                this.props.lang
                            )}
                        />
                    </PanelMedIllustrasjon>
                </div>
            </div>
        </div>
    );
}

export default withIntl(SøkForeldrepenger);
