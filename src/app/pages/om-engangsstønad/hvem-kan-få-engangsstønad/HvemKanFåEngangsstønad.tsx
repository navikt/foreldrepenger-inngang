import * as React from 'react';
import { getContent } from 'app/utils/getContent';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from 'app/utils/bem';
import CustomSVGFromSprite from 'app/utils/CustomSVG';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import './hvemKanFåEngangsstønad.less';
import getTranslation from 'app/utils/i18nUtils';

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
        <StrukturertTekst tekst={getContent(hvaErEngangsstønadContent, intl)} />
        <div className={cls.element('kravContainer')}>
            <div className={cls.element('krav')}>
                <CustomSVGFromSprite iconRef={checkmarkIcon} size={24} />
                <StrukturertTekst tekst={getContent(engangssumContent, intl)} />
            </div>
            <div className={cls.element('krav')}>
                <CustomSVGFromSprite iconRef={checkmarkIcon} size={24} />
                <StrukturertTekst tekst={getContent(utbetalingShortContent, intl)} />
            </div>
        </div>
    </PanelMedIllustrasjon>
);

export default injectIntl(HvemKanFåEngangsstønad);
