import * as React from 'react';
import { detErJul } from 'app/utils/datoUtils';

import { useIntl } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import CustomSVG from '../../../utils/CustomSVG';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import SvgMask from 'app/components/svg-mask/SvgMask';
import './hvemKanFåForeldrepenger.less';

const cls = BEMHelper('hvemKanFåForeldrepenger');
const foreldrepengerSvg = detErJul()
    ? require('../../../assets/familier/familie-sesong-1.svg').default
    : require('../../../assets/familier/familie-1.svg').default;

const checkmarkIcon = require('./checkmark.svg').default;

const kravTilForeldrepenger = [
    'om-foreldrepenger/hvem-kan-få/krav1',
    'om-foreldrepenger/hvem-kan-få/krav2',
    'om-foreldrepenger/hvem-kan-få/krav3',
];

interface Props {
    id: string;
}

const HvemKanFåForeldrepenger: React.StatelessComponent<Props> = ({ id }) => {
    const intl = useIntl();

    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.for_å_få.tittel', intl)}
            svg={<SvgMask svg={foreldrepengerSvg} anchorToBottom={true} />}
        >
            <Innhold source={getSource('om-foreldrepenger/hvem-kan-få/ingress', intl)} />
            <div className={cls.element('kravTilForeldrepenger')}>
                {kravTilForeldrepenger.map((krav) => (
                    <KravTilForeldrepenger key={krav} ingress={getSource(krav, intl)} />
                ))}
            </div>
        </PanelMedIllustrasjon>
    );
};

const KravTilForeldrepenger = ({ ingress }: { ingress: string }) => {
    return (
        <div className={cls.element('krav')}>
            <CustomSVG iconRef={checkmarkIcon} size={24} />
            <Innhold source={ingress} />
        </div>
    );
};

export default HvemKanFåForeldrepenger;
