import * as React from 'react';
import { useIntl } from 'react-intl';
import BEMHelper from '../../utils/bem';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import getTranslation from 'app/utils/i18nUtils';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import SvgMask from 'app/components/svg-mask/SvgMask';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import { useLocation } from 'react-router-dom';

const infosiderCls = BEMHelper('infosider');
const pageSvg = require('./../../assets/icons/brev.svg').default;

const Dokumentasjon: React.FunctionComponent = () => {
    const intl = useIntl();
    const location = useLocation();

    return (
        <div className={infosiderCls.block}>
            <DokumentasjonHeader />
            <Sidebanner text={getTranslation('dokumentasjon.banner', intl)} />
            <div className={infosiderCls.element('container')}>
                <article className={infosiderCls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedIllustrasjon
                        title={getTranslation('dokumentasjon.tittel', intl)}
                        svg={<SvgMask svg={pageSvg} />}
                    >
                        <Innhold source={getSource('dokumentasjon/dokumentasjon', intl)} />
                    </PanelMedIllustrasjon>
                </article>
            </div>
        </div>
    );
};

const DokumentasjonHeader = () => {
    return (
        <HeaderInformasjon
            title="Dokumentasjon - www.nav.no"
            description="Les om dokumentasjon som må legges ved søknaden."
            siteUrl="https://familie.nav.no/dokumentasjon"
        />
    );
};

export default Dokumentasjon;
