import * as React from 'react';
import BEMHelper from '../../../utils/bem';
import FarOgMor from './situasjoner/FarOgMor';
import MorOgMor from './situasjoner/MorOgMor';
import BareFarHarRett from './situasjoner/BareFarHarRett';
import BareMorHarRett from './situasjoner/BareMorHarRett';
import Aleneomsorg from './situasjoner/Aleneomsorg';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import { Innholdsfane } from '../../../components/innholdsfaner/fane/Fane';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import { getContent } from '../../../utils/getContent';
import FarOgFar from './situasjoner/FarOgFar';
import { Foreldresituasjon, Kvote } from 'app/utils/foreldresituasjon';
import Ukekalkulator from './ukekalkulator/Ukekalkulator';
import { getAntallUtbetalingsuker, Utbetalingsalternativ } from './ukekalkulator/utils';
import './hvorLenge.less';
import UtvidetInformasjon from 'app/pages/kalkulator/utvidetinformasjon/UtvidetInformasjon';

const infoSvg = require('../../../assets/ark/ark-info.svg').default;

const cls = BEMHelper('hvorLenge');
const getTabs = (onKvoteSelected: (undersituasjon: Kvote) => void): Innholdsfane[] => [
    {
        label: 'farOgMor',
        icon: <Foreldrepar firstParent="far1" secondParent="mor2" />,
        component: <FarOgMor />
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
        component: <Aleneomsorg onKvoteSelected={onKvoteSelected} />
    },
    {
        label: 'morOgMor',
        icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" />,
        component: <MorOgMor />
    },
    {
        label: 'farOgFar',
        icon: <Foreldrepar firstParent="far4" secondParent="far2" />,
        component: <FarOgFar />
    }
];

interface HvorLengeProps {
    id: string;
}

type Props = HvorLengeProps & IntlProps;

interface State {
    valgtSituasjon: Foreldresituasjon;
    valgtKvote?: Kvote;
    antallUtbetalingsuker?: Utbetalingsalternativ[];
}

class HvorLenge extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            valgtSituasjon: 'farOgMor',
            antallUtbetalingsuker: getAntallUtbetalingsuker('farOgMor')
        };
    }

    onSituasjonSelected = (valgtSituasjon: Foreldresituasjon) => {
        this.setState(
            {
                valgtSituasjon
            },
            this.setAntallUtbetalingsuker
        );
    };

    onKvoteSelected = (valgtKvote?: Kvote) => {
        this.setState(
            {
                valgtKvote
            },
            this.setAntallUtbetalingsuker
        );
    };

    setAntallUtbetalingsuker = () => {
        this.setState({
            antallUtbetalingsuker: getAntallUtbetalingsuker(
                this.state.valgtSituasjon,
                this.state.valgtKvote
            )
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
                        tekst={getContent('om-foreldrepenger/hvor-lenge/hvor-lenge', lang)}
                    />
                    <Innholdsfaner
                        tabs={getTabs(this.onKvoteSelected)}
                        onSelect={this.onSituasjonSelected}
                    />
                    <Ukekalkulator antallUtbetalingsuker={this.state.antallUtbetalingsuker} />
                    <UtvidetInformasjon
                        apneLabel={getTranslation(
                            'om_foreldrepenger.hvor_lenge.forslag.åpne',
                            lang
                        )}
                        lukkLabel={getTranslation(
                            'om_foreldrepenger.hvor_lenge.forslag.lukke',
                            lang
                        )}>
                        <StrukturertTekst
                            tekst={getContent('om-foreldrepenger/hvor-lenge/forslag-fra-bld', lang)}
                        />
                    </UtvidetInformasjon>
                </div>
            </PanelMedIllustrasjon>
        );
    };
}

export default withIntl(HvorLenge);
