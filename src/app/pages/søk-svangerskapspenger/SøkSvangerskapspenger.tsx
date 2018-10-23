import React, { Component } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import { getTranslation, IntlProps, withIntl } from '../../intl/intl';
import PanelMedTittel from '../../components/panel-med-tittel/PanelMedTittel';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';
import classnames from 'classnames';
import './søkSvangerskapspenger.less';

const hvaSøkerDuCls = BEMHelper('hvaSøkerDu');
const svangerskapspengerCls = BEMHelper('søkSvangerskapspenger');

interface Props {
    route: any;
}

class SøkForeldrepenger extends Component<Props & IntlProps> {
    render = () => (
        <div className={classnames(hvaSøkerDuCls.className, svangerskapspengerCls.className)}>
            <Sidebanner text={getTranslation('hva_søker_du.tittel', this.props.lang)} />
            <main className={hvaSøkerDuCls.element('body')}>
                <div className={hvaSøkerDuCls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedTittel title={getTranslation('svangerskapspenger', this.props.lang)}>
                        <StrukturertTekst
                            tekst={getContent(
                                'hva-vil-du-søke-om/søk-svangerskapspenger',
                                this.props.lang
                            )}
                        />
                    </PanelMedTittel>
                </div>
            </main>
        </div>
    );
}

export default withIntl(SøkForeldrepenger);
