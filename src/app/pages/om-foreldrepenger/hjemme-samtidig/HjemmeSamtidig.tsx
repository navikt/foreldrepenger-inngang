import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import './hjemmeSamtidig.less';

const cls = BEMHelper('hjemmeSamtidig');
const hjemmeSamtidigSvg = require('../../../assets/ark/ark-hjemme-samtidig.svg').default;
const ingress = 'om-foreldrepenger/hjemme-samtidig/ingress';

interface Props {
    id: string;
}

const HjemmeSamtidig: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            className={cls.className}
            id={id}
            title={getTranslation('om_foreldrepenger.hjemme_samtidig.tittel', intl)}
            svg={hjemmeSamtidigSvg}>
            <Innhold source={getSource(ingress, intl)} />
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(HjemmeSamtidig);
