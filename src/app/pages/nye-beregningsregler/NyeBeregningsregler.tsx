import * as React from 'react';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../intl/intl';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import StrukturertTekst from '../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../utils/getContent';

interface Props {
    location: any;
}

const infosiderCls = BEMHelper('infosider');
const headerSvg = require('./../../assets/ark/ark-info.svg').default;

const NyeBeregningsregler: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div className={infosiderCls.className}>
            <Sidebanner text={getTranslation('om_foreldrepenger.tittel', lang)} />
            <div className={infosiderCls.element('container')}>
                <article className={infosiderCls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedIllustrasjon
                        title={getTranslation(
                            'om_foreldrepenger.nye_beregningsregler.header',
                            lang
                        )}
                        svg={headerSvg}>
                        <StrukturertTekst
                            tekst={getContent(
                                'om-foreldrepenger/nye-beregningsregler/nye-beregningsregler',
                                lang
                            )}
                        />
                    </PanelMedIllustrasjon>
                </article>
            </div>
        </div>
    );
};

export default withIntl(NyeBeregningsregler);
