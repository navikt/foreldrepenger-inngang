import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import translate, { Language } from '../../../intl/translate';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import LesMer from '../../../components/les-mer/LesMer';
import { getContent } from '../../../utils/getContent';
import { withLang } from '../../../intl/intl-context';

const pageSvg = require('../../../assets/page.svg').default;

const Adopjson = ({ id, lang }: { id: string; lang: Language }) => {
    return (
        <PanelMedIllustrasjon id={id} title={translate('adopsjon')} svg={pageSvg}>
            <StrukturertTekst tekst={getContent('all-informasjon/adopsjon/adopsjon', lang)} />
            <LesMer intro={translate('om_foreldrepenger.adopsjon.når_starter')}>
                <StrukturertTekst
                    tekst={getContent('all-informasjon/adopsjon/når-starter', lang)}
                />
            </LesMer>
            <LesMer intro={translate('om_foreldrepenger.adopsjon.hvor_lenge')}>
                <StrukturertTekst tekst={getContent('all-informasjon/adopsjon/hvor-lenge', lang)} />
            </LesMer>
            <LesMer intro={translate('om_foreldrepenger.adopsjon.flere_barn')}>
                <StrukturertTekst tekst={getContent('all-informasjon/adopsjon/flere-barn', lang)} />
            </LesMer>
            <LesMer intro={translate('om_foreldrepenger.adopsjon.ikke_rett')}>
                <StrukturertTekst tekst={getContent('all-informasjon/adopsjon/ikke-rett', lang)} />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default withLang(Adopjson);
