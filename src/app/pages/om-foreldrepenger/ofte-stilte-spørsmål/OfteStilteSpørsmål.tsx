import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { ForeldrepengerSection } from 'app/types/Section';
import BEMHelper from 'app/utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import Kontaktvalg from 'app/components/kontaktvalg/Kontaktvalg';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import './ofteStilteSpørsmål.less';

const svg = require('../../../assets/ark/ark-hjelp.svg').default;
const content = 'om-foreldrepenger/ofte-stilte-spørsmål/ofte-stilte-spørsmål';
const cls = BEMHelper('ofteStilteSpørsmål');

interface OwnProps {
    id: ForeldrepengerSection;
}

type Props = OwnProps & InjectedIntlProps;

const OfteStilteSpørsmål: React.StatelessComponent<Props> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            svg={svg}
            className={cls.block}
            title={getTranslation('om_foreldrepenger.ofte_stilte_spørsmål.tittel', intl)}
        >
            <Innhold source={getSource(content, intl)} />
            <Kontaktvalg />
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(OfteStilteSpørsmål);
