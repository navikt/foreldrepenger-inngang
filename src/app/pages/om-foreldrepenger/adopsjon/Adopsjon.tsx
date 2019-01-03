import * as React from 'react';
import { getContent } from '../../../utils/getContent';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import LesMer from '../../../components/les-mer/LesMer';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
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
            <StrukturertTekst tekst={getContent('om-foreldrepenger/adopsjon/adopsjon', intl)} />
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.når_starter', intl)}>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/adopsjon/når-starter', intl)}
                />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.hvor_lenge', intl)}>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/adopsjon/hvor-lenge', intl)}
                />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.flere_barn', intl)}>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/adopsjon/flere-barn', intl)}
                />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.ikke_rett', intl)}>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/adopsjon/ikke-rett', intl)}
                />
            </LesMer>
            <LesMer
                intro={getTranslation('om_foreldrepenger.adopsjon.tidlig_stebarnsadopsjon', intl)}>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/adopsjon/tidlig-stebarnsadopsjon', intl)}
                />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(Adopjson);
