import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import { Innholdsfane } from '../../../components/innholdsfaner/fane/Fane';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import translate from '../../../utils/translate';

const nårKanDuFåEngangsstønadContent = require('../../../../content/om-engangsstønad/når-kan-du-få-engangsstønad/når-kan-du-få-engangsstønad');
const adopsjonContent = require('../../../../content/om-engangsstønad/når-kan-du-få-engangsstønad/adopsjon');
const fødselContent = require('../../../../content/om-engangsstønad/når-kan-du-få-engangsstønad/fødsel');

const pageSvg = require('../../../assets/page.svg').default;

const tabs: Innholdsfane[] = [
    {
        label: 'fødsel',
        icon: null,
        component: <StrukturertTekst tekst={fødselContent} />
    },
    {
        label: 'adopsjon',
        icon: null,
        component: <StrukturertTekst tekst={adopsjonContent} />
    }
];

const NårKanDuFåEngangsstønad = () => (
    <PanelMedIllustrasjon title={translate('om_engangsstønad.krav_tittel')} svg={pageSvg}>
        <div>
            <StrukturertTekst tekst={nårKanDuFåEngangsstønadContent} />
            <Innholdsfaner tabs={tabs} />
        </div>
    </PanelMedIllustrasjon>
);

export default NårKanDuFåEngangsstønad;
