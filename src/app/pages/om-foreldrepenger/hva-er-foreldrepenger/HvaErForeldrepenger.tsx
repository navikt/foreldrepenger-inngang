import * as React from 'react';
import BEMHelper from '../../../utils/bem';
import FarOgMor from './FarOgMor';
import MorOgMor from './MorOgMor';
import BareFarHarRett from './BareFarHarRett';
import BareMorHarRett from './BareMorHarRett';
import Aleneomsorg from './Aleneomsorg';
import MenHvaHvis from './menHvaHvis/MenHvaHvis';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import { Innholdsfane } from '../../../components/innholdsfaner/fane/Fane';
import './hvaErForeldrepenger.less';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import translate, { Language } from '../../../intl/translate';
import { getContent } from '../../../utils/getContent';
import { withLang } from '../../../intl/intl-context';

const pageSvg = require('../../../assets/page.svg').default;

const cls = BEMHelper('hvaErForeldrepenger');
const tabs: Innholdsfane[] = [
    {
        label: 'far_og_mor',
        icon: <Foreldrepar firstParent="far1" secondParent="mor1" />,
        component: <FarOgMor />
    },
    {
        label: 'far_og_far',
        icon: <Foreldrepar firstParent="far4" secondParent="far2" />,
        component: null
    },
    {
        label: 'mor_og_mor',
        icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" />,
        component: <MorOgMor />
    },
    {
        label: 'bareFarHarRett',
        icon: <Foreldrepar firstParent="far3" secondParent="medmor1" variant={1} />,
        component: <BareFarHarRett />
    },
    {
        label: 'bareMorHarRett',
        icon: <Foreldrepar firstParent="far2" secondParent="mor1" variant={2} />,
        component: <BareMorHarRett />
    },
    {
        label: 'aleneomsorg',
        icon: <Foreldrepar firstParent="far1" secondParent="medmor1" variant={3} />,
        component: <Aleneomsorg />
    }
];

interface Props {
    id: string;
    lang: Language;
}

const HvaErForeldrepenger: React.StatelessComponent<Props> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={translate('om_foreldrepenger.hvor_lenge.tittel')}
            svg={pageSvg}>
            <div className={cls.className}>
                <StrukturertTekst
                    tekst={getContent(
                        'all-informasjon/hva-er-foreldrepenger/hva-er-foreldrepenger',
                        lang
                    )}
                />
                <Innholdsfaner tabs={tabs} />
                <MenHvaHvis />
            </div>
        </PanelMedIllustrasjon>
    );
};

export default withLang(HvaErForeldrepenger);
