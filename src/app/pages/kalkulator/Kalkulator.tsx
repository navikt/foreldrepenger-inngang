import * as React from 'react';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import { withIntl, IntlProps, getTranslation } from 'app/intl/intl';
import Breadcrumbs from 'app/components/breadcrumbs/Breadcrumbs';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { CheckboksPanelGruppe } from 'nav-frontend-skjema';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';
import Lønnskalkulator from './lønnskalkulator/Lønnskalkulator';
import Resultat from './resultat/Resultat';
import {
    Periode,
    tjenerOverUtbetalingsgrensen,
    tjenerForLiteForForeldrepenger,
    getLastYear,
    getUtbetalingsgrense,
    getEnHalvG
} from 'app/utils/beregningUtils';
import Veileder from 'app/components/veileder/Veileder';
import './kalkulator.less';
import Veiledermelding from './Veiledermelding';
import SvgMask from 'app/components/svg-mask/SvgMask';

const infosiderCls = BEMHelper('infosider');
const cls = BEMHelper('kalkulator');

type Situasjon =
    | 'arbeidstaker_eller_frilanser'
    | 'utbetaling_fra_nav'
    | 'selvstendig_næringsdrivende';

const muligeSituasjoner: Situasjon[] = [
    'arbeidstaker_eller_frilanser',
    'utbetaling_fra_nav',
    'selvstendig_næringsdrivende'
];

const pengerIcon = require('../../assets/icons/penger.svg').default;
const mindrePengerIcon = require('../../assets/icons/mindre-penger.svg').default;

interface State {
    kalkulatorperiode?: Periode;
    valgteSituasjoner: Situasjon[];
    results?: {
        snittlønnPerMåned: number;

        // Brukeren tjener over 6G
        tjenerOverUtbetalingsgrensen: boolean;

        // Brukeren tjener under 1/2G
        tjenerForLite: boolean;

        // Hva er et for stort avvik i lønn i fjor?
        forStortAvvik: number;
    };
}

class Planlegger extends React.Component<IntlProps, State> {
    constructor(props: IntlProps) {
        super(props);
        this.state = {
            valgteSituasjoner: []
        };
    }

    onSituasjonToggle = (event: React.SyntheticEvent<EventTarget>, situasjon: Situasjon) => {
        const valgteSituasjoner = this.state.valgteSituasjoner.includes(situasjon)
            ? this.state.valgteSituasjoner.filter((vs) => vs !== situasjon)
            : [...this.state.valgteSituasjoner, situasjon];

        const kalkulatorperiode =
            valgteSituasjoner.length === 0
                ? undefined
                : valgteSituasjoner.includes('selvstendig_næringsdrivende')
                    ? 'år'
                    : 'måned';

        this.setState({
            valgteSituasjoner,
            kalkulatorperiode
        });
    };

    onSnittlønnChange = (snittlønn: number) => {
        const avviksgrense = snittlønn * 12 * 0.25;
        const tjenerOverGrensen = tjenerOverUtbetalingsgrensen(snittlønn);
        const tjenerForLite = tjenerForLiteForForeldrepenger(snittlønn);

        this.setState({
            results: {
                snittlønnPerMåned: snittlønn,
                forStortAvvik: avviksgrense,
                tjenerOverUtbetalingsgrensen: tjenerOverGrensen,
                tjenerForLite
            }
        });
    };

    fårUtbetaling = () => this.state.valgteSituasjoner.includes('utbetaling_fra_nav');
    fårLønn = () =>
        this.state.valgteSituasjoner.includes('arbeidstaker_eller_frilanser') ||
        this.state.valgteSituasjoner.includes('selvstendig_næringsdrivende');

    getCheckboxes = () =>
        muligeSituasjoner.map((situasjon) => ({
            checked: this.state.valgteSituasjoner.includes(situasjon),
            label: getTranslation(`kalkulator.situasjon.${situasjon}`),
            id: situasjon,
            value: situasjon
        }));

    getTitleForChoices = () =>
        `${
            this.fårUtbetaling()
                ? getTranslation('kalkulator.skriv_inn_utbetaling', this.props.lang)
                : getTranslation('kalkulator.skriv_inn_lønn', this.props.lang)
        } ${
            this.state.kalkulatorperiode === 'måned'
                ? getTranslation('månedene', this.props.lang)
                : getTranslation('årene', this.props.lang)
        }?`;

    getAvviksvariabler = () =>
        this.state.results && {
            ÅRLIG_SNITTLØNN: (this.state.results.snittlønnPerMåned * 12).toLocaleString(
                this.props.lang
            ),
            ÅRET_I_FJOR: getLastYear(),
            AVVIKSGRENSE: this.state.results.forStortAvvik.toLocaleString(this.props.lang)
        };

    getUtbetalingsgrensevariabler = () =>
        this.state.results &&
        this.state.results.tjenerOverUtbetalingsgrensen && {
            UTBETALINGSGRENSE: getUtbetalingsgrense().toLocaleString(this.props.lang)
        };

    getForLavLønnvariabler = () =>
        this.state.results &&
        this.state.results.tjenerForLite && {
            ÅRLIG_SNITTLØNN: (this.state.results.snittlønnPerMåned * 12).toLocaleString(
                this.props.lang
            ),
            EN_HALV_G: getEnHalvG().toLocaleString(this.props.lang)
        };

    render = () => {
        const { lang } = this.props;

        const checkboxes = this.getCheckboxes();
        const fårLønn = this.fårLønn();
        const valgTittel = this.getTitleForChoices();
        const avviksvariabler = this.getAvviksvariabler() || undefined;
        const utbetalingsgrensevariabler = this.getUtbetalingsgrensevariabler() || undefined;
        const forLavLønnvariabler = this.getForLavLønnvariabler() || undefined;
        const kombinasjonIkkeStøttet =
            this.state.valgteSituasjoner.includes('selvstendig_næringsdrivende') &&
            this.state.valgteSituasjoner.length > 1;

        return (
            <div className={classnames(cls.className, infosiderCls.className)}>
                <Sidebanner text={getTranslation('kalkulator.bannertekst', lang)} />
                <div className={infosiderCls.element('body')}>
                    <main className={infosiderCls.element('content')}>
                        <Breadcrumbs path={location.pathname} />

                        <PanelMedIllustrasjon
                            title={getTranslation('kalkulator.tittel')}
                            svg={<SvgMask svg={pengerIcon} />}>
                            <StrukturertTekst tekst={getContent('kalkulator/kalkulator', lang)} />

                            <TypografiBase type="undertittel">
                                {getTranslation('kalkulator.valg.tittel', lang)}
                            </TypografiBase>
                            <CheckboksPanelGruppe
                                legend={getTranslation('kalkulator.valg.ingress', lang)}
                                checkboxes={checkboxes}
                                onChange={this.onSituasjonToggle}
                            />

                            {this.state.kalkulatorperiode &&
                                (kombinasjonIkkeStøttet ? (
                                    <div className={cls.element('ikkeStøttet')}>
                                        <Veileder
                                            fargetema="advarsel"
                                            ansikt="undrende"
                                            kompakt={true}>
                                            <StrukturertTekst
                                                tekst={getContent('kalkulator/ikke-støttet', lang)}
                                            />
                                        </Veileder>
                                    </div>
                                ) : (
                                    <div className={cls.element('flexDownwards')}>
                                        <TypografiBase type="undertittel">
                                            {valgTittel}
                                        </TypografiBase>
                                        {fårLønn && (
                                            <TypografiBase type="normaltekst">
                                                {getTranslation(
                                                    'kalkulator.skriv_inn_lønn_ingress',
                                                    lang
                                                )}
                                            </TypografiBase>
                                        )}
                                        <Lønnskalkulator
                                            lang={this.props.lang}
                                            periode={this.state.kalkulatorperiode}
                                            onChange={this.onSnittlønnChange}
                                        />

                                        {this.state.results && (
                                            <div className={cls.element('flexDownwards')}>
                                                <TypografiBase type="undertittel">
                                                    {getTranslation(
                                                        'kalkulator.resultat.tittel',
                                                        lang
                                                    )}
                                                </TypografiBase>

                                                <Veileder
                                                    fargetema="normal"
                                                    ansikt="glad"
                                                    kompakt={true}>
                                                    <Veiledermelding
                                                        avviksvariabler={
                                                            forLavLønnvariabler
                                                                ? undefined
                                                                : avviksvariabler
                                                        }
                                                        forLavLønnvariabler={forLavLønnvariabler}
                                                        utbetalingsgrensevariabler={
                                                            utbetalingsgrensevariabler
                                                        }
                                                        lang={lang}
                                                    />
                                                </Veileder>

                                                <output className={cls.element('resultater')}>
                                                    <Resultat
                                                        cls={cls}
                                                        lang={this.props.lang}
                                                        percentage={100}
                                                        icon={pengerIcon}
                                                        monthlyWage={
                                                            this.state.results.snittlønnPerMåned
                                                        }
                                                    />
                                                    <Resultat
                                                        cls={cls}
                                                        lang={this.props.lang}
                                                        percentage={80}
                                                        icon={mindrePengerIcon}
                                                        monthlyWage={
                                                            this.state.results.snittlønnPerMåned
                                                        }
                                                    />
                                                </output>
                                                <div className={cls.element('disclaimer')}>
                                                    <StrukturertTekst
                                                        tekst={getContent(
                                                            'kalkulator/disclaimer',
                                                            lang
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </PanelMedIllustrasjon>
                    </main>
                </div>
            </div>
        );
    };
}

export default withIntl(Planlegger);
