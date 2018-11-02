import * as React from 'react';
import { Input } from 'nav-frontend-skjema';
import { getTranslation, Language, withIntl } from 'app/intl/intl';
import {
    forStortAvvik,
    lastThreeYears,
    lastThreeMonths,
    computeAverage
} from 'app/utils/beregningUtils';
import TypografiBase from 'nav-frontend-typografi';
import './lønnskalkulator.less';
import BEMHelper from 'app/utils/bem';

const cls = BEMHelper('lønnskalkulator');
const MAX_WAGE_CHARS = 7;

export type Periode = 'måned' | 'år';

interface Props {
    periode: Periode;
    onChange: (monthlyAverage?: number) => void;
    lang: Language;
}

interface State {
    average?: number;
    lastThreePeriods: string[];
    fieldValues: Array<number | undefined>;
    forStortAvvik: boolean;
}

const defaultMonthlyWage = 25000;
const defaultAnnualWage = 250000;

const getDefaultWage = (periode: Periode): number =>
    periode === 'måned' ? defaultMonthlyWage : defaultAnnualWage;

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
            average: undefined,
            lastThreePeriods,
            forStortAvvik: false,
            fieldValues
        };
    };

    onFieldChange = (index: number, event: any) => {
        const newFieldValue = event.target.value
            ? parseInt(event.target.value.slice(0, MAX_WAGE_CHARS), 10)
            : undefined;

        const newFieldValues = [...this.state.fieldValues];
        newFieldValues[index] = newFieldValue;

        let average;
        let erForStortAvvik = false;

        const withoutUndefinedValues: number[] = newFieldValues.filter(
            (value) => value !== undefined
        ) as number[];
        const hasAtLeastOneValue = withoutUndefinedValues.length > 0;
        const hasNoUndefinedValues =
            withoutUndefinedValues.length === this.state.fieldValues.length;

        if (hasAtLeastOneValue) {
            average = computeAverage(withoutUndefinedValues as number[]);

            if (this.props.periode === 'år') {
                average = average / 12;
            }
        }

        if (hasNoUndefinedValues) {
            this.props.onChange(average);
            erForStortAvvik = forStortAvvik(average as number, newFieldValues as number[]);
        } else {
            this.props.onChange(undefined);
        }

        this.setState({
            average,
            fieldValues: newFieldValues,
            forStortAvvik: erForStortAvvik
        });
    };

    render = () => {
        const average = this.state.average
            ? Math.round(this.state.average).toLocaleString(this.props.lang)
            : '–';

        const output = `${average} kr`;

        return (
            <div className={cls.className}>
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
                            maxLength={MAX_WAGE_CHARS}
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

export default withIntl(Lønnskalkulator);
