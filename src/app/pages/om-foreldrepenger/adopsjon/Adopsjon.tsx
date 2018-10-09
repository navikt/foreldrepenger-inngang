import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import LesMer from '../../../components/les-mer/LesMer';
import { getContent } from '../../../utils/getContent';

const adopsjonSvg = require('../../../assets/ark/adopsjon.svg').default;

interface Props {
    id: string;
}

const Adopjson: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon id={id} title={getTranslation('adopsjon', lang)} svg={adopsjonSvg}>
            <StrukturertTekst tekst={getContent('all-informasjon/adopsjon/adopsjon', lang)} />
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.når_starter', lang)}>
                <StrukturertTekst
                    tekst={getContent('all-informasjon/adopsjon/når-starter', lang)}
                />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.hvor_lenge', lang)}>
                <StrukturertTekst tekst={getContent('all-informasjon/adopsjon/hvor-lenge', lang)} />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.flere_barn', lang)}>
                <StrukturertTekst tekst={getContent('all-informasjon/adopsjon/flere-barn', lang)} />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.adopsjon.ikke_rett', lang)}>
                <StrukturertTekst tekst={getContent('all-informasjon/adopsjon/ikke-rett', lang)} />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default withIntl(Adopjson);
