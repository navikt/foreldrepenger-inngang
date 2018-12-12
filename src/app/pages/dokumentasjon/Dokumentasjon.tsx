import * as React from 'react';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../intl/intl';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../utils/getContent';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import SvgMask from 'app/components/svg-mask/SvgMask';

interface Props {
    location: any;
}

const infosiderCls = BEMHelper('infosider');
const pageSvg = require('./../../assets/icons/brev.svg').default;

const Dokumentasjon: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div className={infosiderCls.className}>
            <DokumentasjonHeader />
            <Sidebanner text={getTranslation('dokumentasjon.banner', lang)} />
            <div className={infosiderCls.element('container')}>
                <article className={infosiderCls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedIllustrasjon
                        title={getTranslation('dokumentasjon.tittel', lang)}
                        svg={<SvgMask svg={pageSvg} />}>
                        <StrukturertTekst tekst={getContent('dokumentasjon/dokumentasjon', lang)} />
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

export default withIntl(Dokumentasjon);
