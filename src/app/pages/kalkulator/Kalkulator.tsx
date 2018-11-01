import * as React from 'react';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import { withIntl, IntlProps, getTranslation, Language } from 'app/intl/intl';
import Breadcrumbs from 'app/components/breadcrumbs/Breadcrumbs';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import {
    forStortAvvik,
    lastThreeYears,
    lastThreeMonths,
    computeAverage
} from 'app/utils/beregningUtils';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { CheckboksPanelGruppe, Input } from 'nav-frontend-skjema';
import './kalkulator.less';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';

const infosiderCls = BEMHelper('infosider');
const cls = BEMHelper('kalkulator');

type Situasjon = 'arbeidstaker' | 'frilanser' | 'selvstendig_næringsdrivende';
type Periode = 'måned' | 'år';

const muligeSituasjoner: Situasjon[] = ['arbeidstaker', 'frilanser', 'selvstendig_næringsdrivende'];
const headerIcon = require('../../assets/ark/ark-info.svg').default;

interface State {
    kalkulatorversjon?: Periode;
    valgteSituasjoner: Situasjon[];
    snittlønnPerMåned: number;
}

class Planlegger extends React.Component<IntlProps, State> {
    constructor(props: IntlProps) {
        super(props);
        this.state = {
            kalkulatorversjon: undefined,
            valgteSituasjoner: [],
            snittlønnPerMåned: 0
        };
    }

    onSituasjonToggle = (event: React.SyntheticEvent<EventTarget>, situasjon: Situasjon) => {
        const valgteSituasjoner = this.state.valgteSituasjoner.includes(situasjon)
            ? this.state.valgteSituasjoner.filter((vs) => vs !== situasjon)
            : [...this.state.valgteSituasjoner, situasjon];

        const kalkulatorversjon =
            valgteSituasjoner.length === 0
                ? undefined
                : valgteSituasjoner.includes('selvstendig_næringsdrivende')
                    ? 'år'
                    : 'måned';

        this.setState({
            valgteSituasjoner,
            kalkulatorversjon
        });
    };

    onSnittlønnChange = (monthlyWage: number) => {
        this.setState({
            snittlønnPerMåned: monthlyWage
        });
    };

    render = () => {
        const { lang } = this.props;

        const checkboxes = muligeSituasjoner.map((situasjon) => ({
            checked: this.state.valgteSituasjoner.includes(situasjon),
            label: getTranslation(`kalkulator.situasjon.${situasjon}`),
            id: situasjon,
            value: situasjon
        }));

        const fieldsHeader = `${getTranslation('kalkulator.skriv_inn_lønn', lang)} ${
            this.state.kalkulatorversjon === 'måned'
                ? getTranslation('månedene', lang)
                : getTranslation('årene', lang)
        }?`;

        return (
            <div className={classnames(cls.className, infosiderCls.className)}>
                <Sidebanner text={getTranslation('kalkulator.bannertekst', lang)} />
                <div className={infosiderCls.element('body')}>
                    <main className={infosiderCls.element('content')}>
                        <Breadcrumbs path={location.pathname} />

                        <PanelMedIllustrasjon
                            maskSvg={true}
                            title={getTranslation('kalkulator.tittel')}
                            svg={headerIcon}>
                            <StrukturertTekst tekst={getContent('kalkulator/kalkulator', lang)} />

                            <TypografiBase type="undertittel">
                                {getTranslation('kalkulator.valg.tittel', lang)}
                            </TypografiBase>
                            <CheckboksPanelGruppe
                                legend={getTranslation('kalkulator.valg.ingress', lang)}
                                checkboxes={checkboxes}
                                onChange={this.onSituasjonToggle}
                            />

                            {this.state.kalkulatorversjon && (
                                <div className={cls.element('flexDownwards')}>
                                    <TypografiBase type="undertittel">{fieldsHeader}</TypografiBase>
                                    <TypografiBase type="normaltekst">
                                        {getTranslation('kalkulator.skriv_inn_lønn_ingress')}
                                    </TypografiBase>
                                    <Lønnskalkulator
                                        lang={this.props.lang}
                                        periode={this.state.kalkulatorversjon}
                                        onChange={this.onSnittlønnChange}
                                    />
                                </div>
                            )}
                        </PanelMedIllustrasjon>
                    </main>
                </div>
            </div>
        );
    };
}

interface LønnskalkulatorProps {
    periode: Periode;
    onChange: (monthlyAverage: number) => void;
    lang: Language;
}

interface LønnskalkulatorState {
    average: number;
    lastThreePeriods: string[];
    fieldValues: Array<number | undefined>;
    forStortAvvik: boolean;
}

const defaultMonthlyWage = 25000;
const defaultAnnualWage = 250000;

const getDefaultWage = (periode: Periode): number =>
    periode === 'måned' ? defaultMonthlyWage : defaultAnnualWage;

class Lønnskalkulator extends React.Component<LønnskalkulatorProps, LønnskalkulatorState> {
    constructor(props: LønnskalkulatorProps) {
        super(props);
        this.state = this.recomputeState(props.periode);
    }

    componentWillReceiveProps = (nextProps: LønnskalkulatorProps) => {
        if (this.props.periode !== nextProps.periode) {
            this.setState(this.recomputeState(nextProps.periode));
        }
    };

    recomputeState = (periode: Periode): LønnskalkulatorState => {
        const fieldValues: undefined[] = new Array(3);
        const lastThreePeriods = periode === 'år' ? lastThreeYears() : lastThreeMonths();
        const average = computeAverage(fieldValues, getDefaultWage(periode));

        return {
            average,
            lastThreePeriods,
            forStortAvvik: false,
            fieldValues
        };
    };

    onFieldChange = (index: number, event: any) => {
        const newFieldValues = [...this.state.fieldValues];
        newFieldValues[index] = event.target.value ? parseInt(event.target.value, 10) : undefined;

        const defaultWage = getDefaultWage(this.props.periode);
        const average = computeAverage(newFieldValues, defaultWage);
        this.setState({
            average,
            fieldValues: newFieldValues,
            forStortAvvik: forStortAvvik(average, newFieldValues, defaultWage)
        });
    };

    render = () => {
        const output = `${Math.round(this.state.average).toLocaleString(this.props.lang)} kr`;

        return (
            <div className={cls.element('lønnskalkulator')}>
                {this.state.lastThreePeriods.map((period, index) => {
                    const value =
                        this.state.fieldValues[index] === undefined
                            ? ''
                            : this.state.fieldValues[index];

                    return (
                        <Input
                            key={period}
                            bredde="S"
                            label={period}
                            type="number"
                            placeholder={getDefaultWage(this.props.periode).toString()}
                            value={value}
                            onChange={(event: any) => {
                                this.onFieldChange(index, event);
                            }}
                        />
                    );
                })}
                <output>
                    <label>
                        <TypografiBase type="element">
                            {getTranslation('kalkulator.lønn.resultat', this.props.lang)}
                        </TypografiBase>
                    </label>
                    <TypografiBase type="ingress">{output}</TypografiBase>
                </output>
            </div>
        );
    };
}

export default withIntl(Planlegger);
