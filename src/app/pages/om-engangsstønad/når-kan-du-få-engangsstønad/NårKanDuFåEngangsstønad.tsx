import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import translate, { Language } from '../../../intl/translate';
import { getContent } from '../../../utils/getContent';
import { withLang } from '../../../intl/intl-context';

const nårKanDuFåEngangsstønadContent =
    'om-engangsstønad/når-kan-du-få-engangsstønad/når-kan-du-få-engangsstønad';
const adopsjonContent = 'om-engangsstønad/når-kan-du-få-engangsstønad/adopsjon';
const fødselContent = 'om-engangsstønad/når-kan-du-få-engangsstønad/fødsel';

const pageSvg = require('../../../assets/page.svg').default;

const getTabs = (lang: Language) => [
    {
        label: 'fødsel',
        icon: null,
        component: <StrukturertTekst tekst={getContent(fødselContent, lang)} />
    },
    {
        label: 'adopsjon',
        icon: null,
        component: <StrukturertTekst tekst={getContent(adopsjonContent, lang)} />
    }
];

const NårKanDuFåEngangsstønad = ({ lang }: { lang: Language }) => (
    <PanelMedIllustrasjon title={translate('om_engangsstønad.krav_tittel')} svg={pageSvg}>
        <div>
            <StrukturertTekst tekst={getContent(nårKanDuFåEngangsstønadContent, lang)} />
            <Innholdsfaner tabs={getTabs(lang)} />
        </div>
    </PanelMedIllustrasjon>
);

export default withLang(NårKanDuFåEngangsstønad);
