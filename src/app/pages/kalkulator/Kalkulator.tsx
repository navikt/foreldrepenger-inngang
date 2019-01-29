import * as React from 'react';
import { CheckboksPanelGruppe } from 'nav-frontend-skjema';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import {
    tjenerOverUtbetalingsgrensen,
    tjenerForLiteForForeldrepenger
} from 'app/utils/beregningUtils';
import BEMHelper from 'app/utils/bem';
import Breadcrumbs from 'app/components/breadcrumbs/Breadcrumbs';
import classnames from 'classnames';
import getTranslation from 'app/utils/i18nUtils';
import IkkeStøttet from './IkkeStøttet';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import SvgMask from 'app/components/svg-mask/SvgMask';
import TypografiBase from 'nav-frontend-typografi';
import Utregning from './Utregning';
import './kalkulator.less';

const infosiderCls = BEMHelper('infosider');
const cls = BEMHelper('kalkulator');

export type Arbeidssituasjon =
    | 'arbeidstaker_eller_frilanser'
    | 'utbetaling_fra_nav'
    | 'selvstendig_næringsdrivende';

const muligeSituasjoner: Arbeidssituasjon[] = [
    'arbeidstaker_eller_frilanser',
    'utbetaling_fra_nav',
    'selvstendig_næringsdrivende'
];

const pengerIcon = require('../../assets/icons/penger.svg').default;

export interface Resultater {
    snittlønnPerMåned: number;
    tjenerOverUtbetalingsgrensen: boolean;
    tjenerForLite: boolean;
    nedreAvviksgrense: number;
    øvreAvviksgrense: number;
}

interface State {
    valgteSituasjoner: Arbeidssituasjon[];
    results?: Resultater;
}

class Kalkulator extends React.Component<InjectedIntlProps, State> {
    constructor(props: InjectedIntlProps) {
        super(props);
        this.state = {
            valgteSituasjoner: []
        };
    }

    onSituasjonToggle = (_: React.SyntheticEvent<EventTarget>, situasjon: Arbeidssituasjon) => {
        const valgteSituasjoner = this.state.valgteSituasjoner.includes(situasjon)
            ? this.state.valgteSituasjoner.filter((vs) => vs !== situasjon)
            : [...this.state.valgteSituasjoner, situasjon];

        this.setState({
            valgteSituasjoner
        });
    };

    onSnittlønnChange = (snittlønn?: number) => {
        if (snittlønn) {
            const årslønn = snittlønn * 12;
            const avviksgrense = årslønn * 0.25;
            const tjenerOverGrensen = tjenerOverUtbetalingsgrensen(snittlønn);
            const tjenerForLite = tjenerForLiteForForeldrepenger(snittlønn);

            this.setState({
                results: {
                    snittlønnPerMåned: snittlønn,
                    nedreAvviksgrense: årslønn - avviksgrense,
                    øvreAvviksgrense: årslønn + avviksgrense,
                    tjenerOverUtbetalingsgrensen: tjenerOverGrensen,
                    tjenerForLite
                }
            });
        } else {
            this.setState({
                results: undefined
            });
        }
    };

    getCheckboxes = () =>
        muligeSituasjoner.map((situasjon) => ({
            checked: this.state.valgteSituasjoner.includes(situasjon),
            label: getTranslation(`kalkulator.situasjon.${situasjon}`, this.props.intl),
            id: situasjon,
            value: situasjon
        }));

    render = () => {
        const { intl } = this.props;

        const checkboxesForSituasjoner = this.getCheckboxes();
        const harValgtSituasjon = this.state.valgteSituasjoner.length > 0;
        const kombinasjonIkkeStøttet = this.state.valgteSituasjoner.includes(
            'selvstendig_næringsdrivende'
        );

        return (
            <div className={classnames(cls.className, infosiderCls.className)}>
                <Sidebanner text={getTranslation('kalkulator.bannertekst', intl)} />
                <div className={infosiderCls.element('container')}>
                    <article className={infosiderCls.element('article')}>
                        <Breadcrumbs path={location.pathname} />
                        <PanelMedIllustrasjon
                            title={getTranslation('kalkulator.tittel', intl)}
                            svg={<SvgMask svg={pengerIcon} />}>
                            <Innhold
                                className="blokk-s"
                                source={getSource('kalkulator/ingress', intl)}
                            />
                            <TypografiBase type="undertittel">
                                {getTranslation('kalkulator.valg.tittel', intl)}
                            </TypografiBase>
                            <CheckboksPanelGruppe
                                legend={getTranslation('kalkulator.valg.ingress', intl)}
                                checkboxes={checkboxesForSituasjoner}
                                onChange={this.onSituasjonToggle}
                            />

                            {harValgtSituasjon &&
                                (kombinasjonIkkeStøttet ? (
                                    <IkkeStøttet />
                                ) : (
                                    <Utregning
                                        valgteSituasjoner={this.state.valgteSituasjoner}
                                        onSnittlønnChange={this.onSnittlønnChange}
                                        results={this.state.results}
                                    />
                                ))}
                        </PanelMedIllustrasjon>
                    </article>
                </div>
            </div>
        );
    };
}

export default injectIntl(Kalkulator);
