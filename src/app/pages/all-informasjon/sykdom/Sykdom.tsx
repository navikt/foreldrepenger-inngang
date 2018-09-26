import * as React from 'react';
import PanelMedIllustrasjon from '../panel-med-illustrasjon/PanelMedIllustrasjon';
import BEMHelper from '../../../utils/bem';
import translate from '../../../utils/translate';
import CustomSVG from '../../../utils/CustomSVG';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import Lesmerpanel from 'nav-frontend-lesmerpanel';
import TypografiBase from 'nav-frontend-typografi';

const pageSvg = require('../../../assets/page.svg').default;
const cls = BEMHelper('jegVilJobbe');
const barn = require('../../../assets/barn/barn1.svg').default;
const barnetErInnlagt = require('../../../../content/all-informasjon/sykdom/barnet-er-innlagt/barnet-er-innlagt');
const barnetErInnlagtForts = require('../../../../content/all-informasjon/sykdom/barnet-er-innlagt/barnet-er-innlagt-fortsettelse');
const utsette = require('../../../../content/all-informasjon/sykdom/barnet-er-innlagt/utsette');

const BarnetErInnlagt = () => (
    <div>
        <StrukturertTekst tekst={barnetErInnlagt} />
        <Lesmerpanel
            border={true}
            intro={
                <TypografiBase type="element">
                    {translate('slik_går_du_frem_for_å_utsette')}
                </TypografiBase>
            }>
            <StrukturertTekst tekst={utsette} />
        </Lesmerpanel>
        <StrukturertTekst tekst={barnetErInnlagtForts} />
    </div>
);

const tabs = [
    {
        label: 'barnet_er_innlagt',
        component: <BarnetErInnlagt />,
        icon: <CustomSVG iconRef={barn} size={48} />
    },
    {
        label: 'en_av_foreldrene_er_syk',
        component: null,
        icon: <Foreldrepar firstParent="far1" secondParent="mor1" />
    }
];

const Sykdom = ({ id }: { id: string }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            className={cls.className}
            svg={pageSvg}
            title={translate('sykdom')}>
            <Innholdsfaner tabs={tabs} />
        </PanelMedIllustrasjon>
    );
};

export default Sykdom;
