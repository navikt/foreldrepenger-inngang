import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import getTranslation from '../../../utils/i18nUtils';
import Innhold, { getSource } from '../../../utils/innhold/Innhold';
import BEMHelper from '../../../utils/bem';

const cls = BEMHelper('omplassereEllerTilretteleggeArbeidet');
const seksjonsBilde = require('../../../assets/ark/ark-beregning.svg').default;

interface Props {
    id: string;
}

const HvorMyeKanDuFa: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_svangerskapspenger.hvorMyeKanDuFa.tittel', intl)}
            svg={seksjonsBilde}>
            <div className={cls.element('alignLeft')}>
                <Innhold
                    source={getSource(
                        'svangerskapspenger/hvor-mye-kan-du-fa/informasjonstekst',
                        intl
                    )}
                />
            </div>
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(HvorMyeKanDuFa);
