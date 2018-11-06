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
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';
import FarOgFar from './FarOgFar';
import { Foreldresituasjon } from 'app/utils/foreldresituasjon';
import Ukekalkulator from './ukekalkulator/Ukekalkulator';
import { getAntallUtbetalingsuker, Utbetalingsalternativ } from './ukekalkulator/utils';

const infoSvg = require('../../../assets/ark/ark-info.svg').default;

const cls = BEMHelper('hvaErForeldrepenger');
const tabs: Innholdsfane[] = [
    {
        label: 'far_og_mor',
        icon: <Foreldrepar firstParent="far1" secondParent="mor2" />,
        component: <FarOgMor />
    },
    {
        label: 'bare_far_har_rett',
        icon: <Foreldrepar firstParent="far3" secondParent="medmor1" variant={1} />,
        component: <BareFarHarRett />
    },
    {
        label: 'bare_mor_har_rett',
        icon: <Foreldrepar firstParent="far2" secondParent="mor1" variant={2} />,
        component: <BareMorHarRett />
    },
    {
        label: 'aleneomsorg',
        icon: <Foreldrepar firstParent="far1" secondParent="medmor1" variant={3} />,
        component: <Aleneomsorg />
    },
    {
        label: 'mor_og_mor',
        icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" />,
        component: <MorOgMor />
    },
    {
        label: 'far_og_far',
        icon: <Foreldrepar firstParent="far4" secondParent="far2" />,
        component: <FarOgFar />
    }
];

const section = 'hvaErForeldrepenger';

interface HvaErForeldrepengerProps {
    id: string;
}

type Props = HvaErForeldrepengerProps & IntlProps;

interface State {
    antallUtbetalingsuker?: Utbetalingsalternativ[];
}

class HvaErForeldrepenger extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            antallUtbetalingsuker: getAntallUtbetalingsuker('far_og_mor')
        };
    }

    onTabSelect = (valgtSituasjon: Foreldresituasjon, undersituasjon?: string) => {
        this.setState({
            antallUtbetalingsuker: getAntallUtbetalingsuker(valgtSituasjon, undersituasjon)
        });
    };

    render = () => {
        const { id, lang } = this.props;

        return (
            <PanelMedIllustrasjon
                id={id}
                title={getTranslation('om_foreldrepenger.hvor_lenge.tittel', lang)}
                svg={infoSvg}>
                <div className={cls.className}>
                    <StrukturertTekst
                        tekst={getContent(
                            'all-informasjon/hva-er-foreldrepenger/hva-er-foreldrepenger',
                            lang
                        )}
                    />
                    <Innholdsfaner tabs={tabs} section={section} onSelect={this.onTabSelect} />
                    <Ukekalkulator antallUtbetalingsuker={this.state.antallUtbetalingsuker} />
                    <MenHvaHvis />
                </div>
            </PanelMedIllustrasjon>
        );
    };
}

export default withIntl(HvaErForeldrepenger);
