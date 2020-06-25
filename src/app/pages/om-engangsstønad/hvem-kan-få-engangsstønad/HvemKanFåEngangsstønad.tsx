import * as React from 'react';
import { EngangsstonadSectionProps } from '../OmEngangsstønad';
import { useIntl } from 'react-intl';
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

type Props = EngangsstonadSectionProps;

const HvemKanFåEngangsstønad: React.StatelessComponent<Props> = ({ id }) => {
    const intl = useIntl();

    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_engangsstønad.hva_er.tittel', intl)}
            svg={engangsstønadSvg}
        >
            <Innhold source={getSource(hvaErEngangsstønadContent, intl)} />
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
            <Innhold source={getSource('om-engangsstønad/hvem-kan-få/veiviser', intl)} />
        </PanelMedIllustrasjon>
    );
};

export default HvemKanFåEngangsstønad;
