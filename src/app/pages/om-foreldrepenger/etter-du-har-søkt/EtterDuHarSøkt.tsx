import * as React from 'react';
import { detErJul } from 'app/utils/datoUtils';

import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import SvgMask from 'app/components/svg-mask/SvgMask';

const cls = BEMHelper('hvemKanFåForeldrepenger');
const foreldrepengerSvg = detErJul()
    ? require('../../../assets/familier/familie-sesong-1.svg').default
    : require('../../../assets/familier/familie-1.svg').default;

const kravTilForeldrepenger = [
    'om-foreldrepenger/hvem-kan-få/krav1',
    'om-foreldrepenger/hvem-kan-få/krav2',
    'om-foreldrepenger/hvem-kan-få/krav3'
];

interface Props {
    id: string;
}

const EtterDuHarSøkt: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.for_å_få.tittel', intl)}
            svg={<SvgMask svg={foreldrepengerSvg} anchorToBottom={true} />}>
            <Innhold source={getSource('om-foreldrepenger/hvem-kan-få/ingress', intl)} />
            <div className={cls.element('kravTilForeldrepenger')}>
                {kravTilForeldrepenger.map((krav) => krav)}
            </div>
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(EtterDuHarSøkt);
