import * as React from 'react';
import { Input } from 'nav-frontend-skjema';
import { getTranslation, Language, withIntl } from 'app/intl/intl';
import {
    forStortAvvik,
    lastThreeYears,
    lastThreeMonths,
    computeAverage,
    Periode,
    MAKS_ANTALL_SIFFER,
    getDefaultWage,
    getLastYear
} from 'app/utils/beregningUtils';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from 'app/utils/bem';
import './lønnskalkulator.less';

const cls = BEMHelper('lønnskalkulator');

interface Props {
    periode: Periode;
    onChange: (
        {
            monthlyAverage,
            forStortAvvik
        }: {
            monthlyAverage?: number;
            forStortAvvik: boolean;
        }
    ) => void;
    lang: Language;
}

interface State {
    monthlyAverage?: number;
    lastThreePeriods: string[];
    fieldValues: Array<number | undefined>;
    wageLastYear?: number;
}

class Lønnskalkulator extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = this.recomputeState(props.periode);
    }

    componentWillReceiveProps = (nextProps: Props) => {
        if (this.props.periode && this.props.periode !== nextProps.periode) {
            this.setState(this.recomputeState(nextProps.periode));
        }
    };

    recomputeState = (periode: Periode): State => {
        const fieldValues: undefined[] = new Array(3);
        const lastThreePeriods = periode === 'år' ? lastThreeYears() : lastThreeMonths();

        return {
            monthlyAverage: undefined,
            lastThreePeriods,
            fieldValues
        };
    };

    onFieldChange = (index: number, event: any) => {
        const newFieldValue = event.target.value
            ? parseInt(event.target.value.slice(0, MAKS_ANTALL_SIFFER), 10)
            : undefined;

        const newFieldValues = [...this.state.fieldValues];
        newFieldValues[index] = newFieldValue;

        let monthlyAverage;
        const isDefined = (value?: number) => value !== undefined;
        const withoutUndefinedValues: number[] = newFieldValues.filter(isDefined) as number[];

        if (withoutUndefinedValues.length > 0) {
            monthlyAverage = computeAverage(withoutUndefinedValues as number[]);

            if (this.props.periode === 'år') {
                monthlyAverage = monthlyAverage / 12;
            }
        }

        this.setState(
            {
                monthlyAverage,
                fieldValues: newFieldValues
            },
            this.onChange
        );
    };

    onÅrslønnChange = (event: any) => {
        const wageLastYear = event.target.value;

        this.setState(
            {
                wageLastYear
            },
            this.onChange
        );
    };

    onChange = () => {
        if (!this.state.fieldValues.includes(undefined) && this.state.wageLastYear) {
            const harForStortAvvik = forStortAvvik(this.state.wageLastYear / 12, this.state
                .fieldValues as number[]);

            this.props.onChange({
                monthlyAverage: this.state.monthlyAverage,
                forStortAvvik: harForStortAvvik
            });
        } else {
            this.props.onChange({
                monthlyAverage: undefined,
                forStortAvvik: false
            });
        }
    };

    render = () => {
        const { lang } = this.props;
        const monthlyAverage = this.state.monthlyAverage
            ? Math.round(this.state.monthlyAverage).toLocaleString(lang)
            : '–';

        const output = `${monthlyAverage} kr`;

        const fieldsHeader = `${getTranslation('kalkulator.skriv_inn_lønn', lang)} ${
            this.props.periode === 'måned'
                ? getTranslation('månedene', lang)
                : getTranslation('årene', lang)
        }?`;

        const årslønnTittel = `${getTranslation(
            'kalkulator.skriv_inn_årslønn',
            lang
        )} ${getLastYear()}?`;

        return (
            <div className={cls.className}>
                <TypografiBase type="undertittel">{fieldsHeader}</TypografiBase>
                <TypografiBase type="normaltekst">
                    {getTranslation('kalkulator.skriv_inn_lønn_ingress', lang)}
                </TypografiBase>
                <div className={cls.element('perioder')}>
                    {this.state.lastThreePeriods.map((period, index) => {
                        const value =
                            this.state.fieldValues[index] === undefined
                                ? ''
                                : this.state.fieldValues[index];

                        return (
                            <Input
                                key={period}
                                label={period}
                                type="number"
                                maxLength={MAKS_ANTALL_SIFFER}
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
                                {getTranslation('kalkulator.lønn.resultat', lang)}
                            </TypografiBase>
                        </label>
                        <TypografiBase type="ingress">{output}</TypografiBase>
                    </output>
                </div>
                {this.props.periode === 'måned' && (
                    <div className={cls.element('årslønn')}>
                        <TypografiBase type="undertittel">{årslønnTittel}</TypografiBase>
                        <Input
                            key="årslønn"
                            label=""
                            type="number"
                            maxLength={7}
                            value={this.state.wageLastYear || ''}
                            placeholder={getDefaultWage('år').toString()}
                            onChange={this.onÅrslønnChange}
                        />
                    </div>
                )}
            </div>
        );
    };
}

export default withIntl(Lønnskalkulator);
