import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import '../infosider/infosider.less';
import BEMHelper from 'app/utils/bem';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import Breadcrumbs from 'app/components/breadcrumbs/Breadcrumbs';
import { RouteProps } from 'react-router';

const cls = BEMHelper('infosider');
const svg = require('../../assets/ark/ark-hjelp.svg').default;

const Regelendringer = ({ intl, location }: InjectedIntlProps & RouteProps) => (
    <div className={cls.className}>
        <Sidebanner text={getTranslation('regelendringer.banner', intl)} />
        <div className={cls.element('container')}>
            <article className={cls.element('article')}>
                <Breadcrumbs path={location ? location.pathname : ''} />
                <PanelMedIllustrasjon
                    className={cls.className}
                    svg={svg}
                    title={getTranslation('regelendringer.tittel', intl)}>
                    <Innhold source={getSource('regelendringer/regelendringer', intl)} />
                </PanelMedIllustrasjon>
            </article>
        </div>
    </div>
);

export default injectIntl(Regelendringer);
