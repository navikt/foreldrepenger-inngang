import * as React from 'react';

import { injectIntl, InjectedIntlProps } from 'react-intl';
import LesMer from '../../../components/les-mer/LesMer';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import getTranslation from 'app/utils/i18nUtils';

const adopsjonSvg = require('../../../assets/ark/ark-adopsjon.svg').default;

interface Props {
    id: string;
}

const Adopjson: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.adopsjon.tittel', intl)}
            svg={adopsjonSvg}>
            <Innhold source={getSource('om-foreldrepenger/adopsjon/adopsjon', intl)} />
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.når_starter', intl)}>
                <Innhold
                    source={getSource('om-foreldrepenger/adopsjon/når-starter', intl)}
                />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.hvor_lenge', intl)}>
                <Innhold
                    source={getSource('om-foreldrepenger/adopsjon/hvor-lenge', intl)}
                />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.flere_barn', intl)}>
                <Innhold
                    source={getSource('om-foreldrepenger/adopsjon/flere-barn', intl)}
                />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.ikke_rett', intl)}>
                <Innhold
                    source={getSource('om-foreldrepenger/adopsjon/ikke-rett', intl)}
                />
            </LesMer>
            <LesMer
                intro={getTranslation('om_foreldrepenger.adopsjon.tidlig_stebarnsadopsjon', intl)}>
                <Innhold
                    source={getSource('om-foreldrepenger/adopsjon/tidlig-stebarnsadopsjon', intl)}
                />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(Adopjson);
