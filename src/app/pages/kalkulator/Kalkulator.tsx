import * as React from 'react';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import Breadcrumbs from 'app/components/breadcrumbs/Breadcrumbs';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { CheckboksPanelGruppe } from 'nav-frontend-skjema';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

import Lønnskalkulator from './lønnskalkulator/Lønnskalkulator';
import {
    tjenerOverUtbetalingsgrensen,
    tjenerForLiteForForeldrepenger
} from 'app/utils/beregningUtils';
import Veileder from 'app/components/veileder/Veileder';
import SvgMask from 'app/components/svg-mask/SvgMask';
import './kalkulator.less';
import Resultat from './resultat/Resultat';
import UtvidetInformasjon from './utvidetinformasjon/UtvidetInformasjon';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';

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

class Planlegger extends React.Component<InjectedIntlProps, State> {
    constructor(props: InjectedIntlProps) {
        super(props);
        this.state = {
            valgteSituasjoner: []
        };
    }

    onSituasjonToggle = (event: React.SyntheticEvent<EventTarget>, situasjon: Arbeidssituasjon) => {
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

    fårUtbetaling = () => this.state.valgteSituasjoner.includes('utbetaling_fra_nav');

    fårLønn = () =>
        this.state.valgteSituasjoner.includes('arbeidstaker_eller_frilanser') ||
        this.state.valgteSituasjoner.includes('selvstendig_næringsdrivende');

    getCheckboxes = () =>
        muligeSituasjoner.map((situasjon) => ({
            checked: this.state.valgteSituasjoner.includes(situasjon),
            label: getTranslation(`kalkulator.situasjon.${situasjon}`, this.props.intl),
            id: situasjon,
            value: situasjon
        }));

    getTitleForChoices = () =>
        `${
            this.fårUtbetaling()
                ? getTranslation('kalkulator.skriv_inn_utbetaling', this.props.intl)
                : getTranslation('kalkulator.skriv_inn_lønn', this.props.intl)
        } ${
            this.state.valgteSituasjoner.includes('selvstendig_næringsdrivende')
                ? getTranslation('årene', this.props.intl)
                : getTranslation('månedene', this.props.intl)
        }?`;

    render = () => {
        const { intl } = this.props;

        const checkboxes = this.getCheckboxes();
        const ingressTilUtbetaling = this.state.valgteSituasjoner.includes('utbetaling_fra_nav')
            ? this.state.valgteSituasjoner.length > 1
                ? 'kalkulator.skriv_inn_utbetaling_og_lønn_ingress'
                : 'kalkulator.skriv_inn_utbetaling_ingress'
            : 'kalkulator.skriv_inn_lønn_ingress';

        const valgTittel = this.getTitleForChoices();
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
                                checkboxes={checkboxes}
                                onChange={this.onSituasjonToggle}
                            />

                            {this.state.valgteSituasjoner.length > 0 &&
                                (kombinasjonIkkeStøttet ? (
                                    <div className={cls.element('ikkeStøttet')}>
                                        <Veileder
                                            fargetema="advarsel"
                                            ansikt="undrende"
                                            kompakt={true}>
                                            <Innhold
                                                source={getSource('kalkulator/ikke-støttet', intl)}
                                            />
                                        </Veileder>
                                    </div>
                                ) : (
                                    <div className={cls.element('flexDownwards')}>
                                        <TypografiBase type="undertittel">
                                            {valgTittel}
                                        </TypografiBase>

                                        {this.state.valgteSituasjoner.includes(
                                            'utbetaling_fra_nav'
                                        ) && (
                                            <UtvidetInformasjon
                                                apneLabel={getTranslation(
                                                    'kalkulator.ytelser_som_gir_rett_tittel',
                                                    intl
                                                )}
                                                lukkLabel={getTranslation(
                                                    'kalkulator.lukk_info',
                                                    intl
                                                )}>
                                                <Innhold
                                                    source={getSource(
                                                        'kalkulator/ytelser-som-gir-rett',
                                                        intl
                                                    )}
                                                />
                                            </UtvidetInformasjon>
                                        )}
                                        <TypografiBase type="normaltekst">
                                            {getTranslation(ingressTilUtbetaling, intl)}
                                        </TypografiBase>
                                        <Lønnskalkulator
                                            situasjoner={this.state.valgteSituasjoner}
                                            onChange={this.onSnittlønnChange}
                                        />

                                        {this.state.results && (
                                            <Resultat
                                                results={this.state.results}
                                                fårUtbetaling={this.fårUtbetaling()}
                                            />
                                        )}
                                    </div>
                                ))}
                        </PanelMedIllustrasjon>
                    </article>
                </div>
            </div>
        );
    };
}

export default injectIntl(Planlegger);
