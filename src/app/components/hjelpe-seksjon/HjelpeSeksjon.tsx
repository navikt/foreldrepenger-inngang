import * as React from 'react';
import { useIntl } from 'react-intl';
import BEMHelper from 'app/utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedIllustrasjon from '../panel-med-illustrasjon/PanelMedIllustrasjon';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import Kontaktvalg from '../kontaktvalg/Kontaktvalg';
import './hjelpeSeksjon.less';

const svg = require('../../assets/ark/ark-hjelp.svg').default;

const content = 'om-foreldrepenger/hjelp/hjelp';
const cls = BEMHelper('hjelp');

const Ferie: React.FunctionComponent = () => {
    const intl = useIntl();

    return (
        <PanelMedIllustrasjon
            svg={svg}
            className={cls.block}
            title={getTranslation('om_foreldrepenger.hjelp.tittel', intl)}
        >
            <Innhold source={getSource(content, intl)} />
            <Kontaktvalg />
        </PanelMedIllustrasjon>
    );
};

export default Ferie;
