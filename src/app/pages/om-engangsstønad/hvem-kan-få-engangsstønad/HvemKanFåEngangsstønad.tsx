import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from 'app/utils/bem';
import CustomSVGFromSprite from 'app/utils/CustomSVG';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import './hvemKanFåEngangsstønad.less';

const cls = BEMHelper('hvemKanFåEngangsstønad');
const engangsstønadSvg = require('../../../assets/engangsstønad.svg').default;
const checkmarkIcon = require('../../../assets/icons/checkmark.svg').default;

const hvaErEngangsstønadContent = 'om-engangsstønad/hvem-kan-få/hvem-kan-få';
const engangssumContent = 'om-engangsstønad/hvem-kan-få/krav1';
const utbetalingShortContent = 'om-engangsstønad/hvem-kan-få/krav2';

const HvemKanFåEngangsstønad: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => (
    <PanelMedIllustrasjon
        id={'hvem-kan-fa-engangsstonad'}
        title={getTranslation('om_engangsstønad.hva_er.tittel', intl)}
        svg={engangsstønadSvg}>
        <Innhold source={getSource(hvaErEngangsstønadContent, intl)} values={{ TALL: '42' }} />
        <div className={cls.element('kravContainer')}>
            <div className={cls.element('krav')}>
                <CustomSVGFromSprite iconRef={checkmarkIcon} size={24} />
                <Innhold source={getSource(engangssumContent, intl)} />
            </div>
            <div className={cls.element('krav')}>
                <CustomSVGFromSprite iconRef={checkmarkIcon} size={24} />
                <Innhold source={getSource(utbetalingShortContent, intl)} />
            </div>
        </div>
    </PanelMedIllustrasjon>
);

export default injectIntl(HvemKanFåEngangsstønad);
