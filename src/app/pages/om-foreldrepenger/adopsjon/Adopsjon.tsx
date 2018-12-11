import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import LesMer from '../../../components/les-mer/LesMer';
import { getContent } from '../../../utils/getContent';

const adopsjonSvg = require('../../../assets/ark/ark-adopsjon.svg').default;

interface Props {
    id: string;
}

const Adopjson: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.adopsjon.tittel', lang)}
            svg={adopsjonSvg}>
            <StrukturertTekst tekst={getContent('om-foreldrepenger/adopsjon/adopsjon', lang)} />
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.når_starter', lang)}>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/adopsjon/når-starter', lang)}
                />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.hvor_lenge', lang)}>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/adopsjon/hvor-lenge', lang)}
                />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.flere_barn', lang)}>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/adopsjon/flere-barn', lang)}
                />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.ikke_rett', lang)}>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/adopsjon/ikke-rett', lang)}
                />
            </LesMer>
            <LesMer
                intro={getTranslation('om_foreldrepenger.adopsjon.tidlig_stebarnsadopsjon', lang)}>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/adopsjon/tidlig-stebarnsadopsjon', lang)}
                />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default withIntl(Adopjson);
