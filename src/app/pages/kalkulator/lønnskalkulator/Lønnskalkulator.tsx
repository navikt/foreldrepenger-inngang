import * as React from 'react';
import { Arbeidssituasjon } from '../Kalkulator';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Input } from 'nav-frontend-skjema';
import {
    lastThreeYears,
    lastThreeMonths,
    computeAverage,
    MAKS_ANTALL_SIFFER
} from 'app/utils/beregningUtils';
import BEMHelper from 'app/utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import TypografiBase from 'nav-frontend-typografi';
import './lønnskalkulator.less';

const cls = BEMHelper('lønnskalkulator');

interface OwnProps {
    situasjoner: Arbeidssituasjon[];
    onChange: (monthlyAverage?: number) => void;
}

type Props = OwnProps & InjectedIntlProps;

interface State {
    monthlyAverage?: number;
    lastThreePeriods: string[];
    fieldValues: Array<number | undefined>;
}

class Lønnskalkulator extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = this.recomputeState(props.situasjoner);
    }

    componentDidMount = () => {
        this.props.onChange(undefined);
    };

    componentWillReceiveProps = (nextProps: Props) => {
        if (this.props.situasjoner !== nextProps.situasjoner) {
            this.setState(this.recomputeState(nextProps.situasjoner));
            this.props.onChange(undefined);
        }
    };

    recomputeState = (situasjoner: Arbeidssituasjon[]): State => {
        const fieldValues: undefined[] = new Array(3);
        const lastThreePeriods = situasjoner.includes('selvstendig_næringsdrivende')
            ? lastThreeYears()
            : lastThreeMonths();

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
            // 0-verdier skal ikke medregnes i månedslønn
            monthlyAverage = computeAverage(withoutUndefinedValues.filter((value) => value !== 0));

            if (this.props.situasjoner.includes('selvstendig_næringsdrivende')) {
                monthlyAverage = monthlyAverage / 12;
            }
        }

        if (withoutUndefinedValues.length === 3) {
            this.props.onChange(monthlyAverage);
        }

        this.setState({
            fieldValues: newFieldValues,
            monthlyAverage
        });
    };

    render = () => {
        const { intl } = this.props;
        const monthlyAverage = this.state.monthlyAverage
            ? Math.round(this.state.monthlyAverage).toLocaleString(intl.locale)
            : '–';

        const output = `${monthlyAverage} kr`;

        return (
            <div className={cls.className}>
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
                                min={0}
                                step={1000}
                                maxLength={MAKS_ANTALL_SIFFER}
                                placeholder="kr"
                                value={value}
                                onChange={(event: any) => {
                                    this.onFieldChange(index, event);
                                }}
                            />
                        );
                    })}
                </div>
                <output>
                    <label>
                        <TypografiBase type="element">
                            {getTranslation('kalkulator.lønn.resultat', intl)}
                        </TypografiBase>
                    </label>
                    <TypografiBase type="ingress">{output}</TypografiBase>
                </output>
            </div>
        );
    };
}

export default injectIntl(Lønnskalkulator);
