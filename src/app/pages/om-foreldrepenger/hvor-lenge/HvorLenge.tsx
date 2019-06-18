import * as React from 'react';
import { Foreldresituasjon, Kvote } from 'app/utils/foreldresituasjon';
import { getAntallUtbetalingsuker, Utbetalingsalternativ } from './ukekalkulator/utils';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Innholdsfane } from '../../../components/innholdsfaner/fane/Fane';
import { Normaltekst } from 'nav-frontend-typografi';
import Aleneomsorg from './situasjoner/Aleneomsorg';
import BareFarHarRett from './situasjoner/BareFarHarRett';
import BareMorHarRett from './situasjoner/BareMorHarRett';
import BEMHelper from '../../../utils/bem';
import FarOgFar from './situasjoner/FarOgFar';
import FarOgMor from './situasjoner/FarOgMor';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import MorOgMor from './situasjoner/MorOgMor';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Ukekalkulator from './ukekalkulator/Ukekalkulator';
import WithLink from 'app/components/with-link/WithLink';
import './hvorLenge.less';
import { Page } from 'app/types/Page';
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

type Props = HvorLengeProps & InjectedIntlProps;

interface State {
    valgtSituasjon: Foreldresituasjon;
    valgtKvote?: Kvote;
    antallUtbetalingsuker: Utbetalingsalternativ[];
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
        const { id, intl } = this.props;

        return (
            <PanelMedIllustrasjon
                id={id}
                title={getTranslation('om_foreldrepenger.hvor_lenge.tittel', intl)}
                svg={infoSvg}>
                <div className={cls.block}>
                    <Innhold source={getSource('om-foreldrepenger/hvor-lenge/ingress', intl)} />
                    <Innholdsfaner
                        tabs={getTabs(this.onKvoteSelected)}
                        onSelect={this.onSituasjonSelected}
                    />
                    <Ukekalkulator antallUtbetalingsuker={this.state.antallUtbetalingsuker} />
                    <Normaltekst>
                        <WithLink url={Page.Regelendringer}>
                            {getTranslation(
                                'om_foreldrepenger.hvor_lenge.regelendringer_lenke',
                                intl
                            )}
                        </WithLink>
                        <UtvidetInformasjon
                            lukkLabel={getTranslation('om_foreldrepenger.prematuruker.lesmer.lukk', intl)}
                            apneLabel={getTranslation('om_foreldrepenger.prematuruker.lesmer', intl)}
                        >
                                {getTranslation('om_foreldrepenger.prematuruker.lesmer.innhold', intl)}
                        </UtvidetInformasjon>
                    </Normaltekst>
                </div>
            </PanelMedIllustrasjon>
        );
    };
}

export default injectIntl(HvorLenge);
