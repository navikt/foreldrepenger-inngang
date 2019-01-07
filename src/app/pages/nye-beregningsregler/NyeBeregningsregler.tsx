import * as React from 'react';

import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../utils/bem';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

interface Props {
    location: any;
}

const infosiderCls = BEMHelper('infosider');
const headerSvg = require('./../../assets/ark/ark-info.svg').default;

const NyeBeregningsregler: React.StatelessComponent<Props & InjectedIntlProps> = ({
    location,
    intl
}) => {
    return (
        <div className={infosiderCls.className}>
            <Sidebanner text={getTranslation('om_foreldrepenger.tittel', intl)} />
            <div className={infosiderCls.element('container')}>
                <article className={infosiderCls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedIllustrasjon
                        title={getTranslation(
                            'om_foreldrepenger.nye_beregningsregler.header',
                            intl
                        )}
                        svg={headerSvg}>
                        <Innhold
                            source={getSource(
                                'om-foreldrepenger/nye-beregningsregler/nye-beregningsregler',
                                intl
                            )}
                        />
                    </PanelMedIllustrasjon>
                </article>
            </div>
        </div>
    );
};

export default injectIntl(NyeBeregningsregler);
