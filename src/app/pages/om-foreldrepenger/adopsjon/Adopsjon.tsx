import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import translate from '../../../intl/translate';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import LesMer from '../../../components/les-mer/LesMer';

const content = require('../../../../content/all-informasjon/adopsjon/adopsjon.json');
const nårStarter = require('../../../../content/all-informasjon/adopsjon/når-starter.json');
const hvorLenge = require('../../../../content/all-informasjon/adopsjon/hvor-lenge.json');
const flereBarn = require('../../../../content/all-informasjon/adopsjon/flere-barn.json');
const ikkeRett = require('../../../../content/all-informasjon/adopsjon/ikke-rett.json');

const pageSvg = require('../../../assets/page.svg').default;

const Adopjson = ({ id }: { id: string }) => {
    return (
        <PanelMedIllustrasjon id={id} title={translate('adopsjon')} svg={pageSvg}>
            <StrukturertTekst tekst={content} />
            <LesMer intro={translate('om_foreldrepenger.adopsjon.når_starter')}>
                <StrukturertTekst tekst={nårStarter} />
            </LesMer>
            <LesMer intro={translate('om_foreldrepenger.adopsjon.hvor_lenge')}>
                <StrukturertTekst tekst={hvorLenge} />
            </LesMer>
            <LesMer intro={translate('om_foreldrepenger.adopsjon.flere_barn')}>
                <StrukturertTekst tekst={flereBarn} />
            </LesMer>
            <LesMer intro={translate('om_foreldrepenger.adopsjon.ikke_rett')}>
                <StrukturertTekst tekst={ikkeRett} />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default Adopjson;
