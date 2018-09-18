import * as React from 'react';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import { Input } from 'nav-frontend-skjema';

import BEMHelper from '../../../../utils/bem';
import translate from '../../../../utils/translate';
import './kalkulator.less';

const cls = BEMHelper('kalkulator');

const validateMonthlyWage = (monthlyWage: number) => {
    if (monthlyWage < 5000) {
        return translate('for_lav_lønn_feilmelding');
    } else {
        return '';
    }
};

const antallUtbetalingsuker = {
    1: {
        100: 49,
        80: 59
    },
    2: {
        100: 54,
        80: 66
    },
    3: {
        100: 95,
        80: 115
    }
};

class Kalkulator extends React.Component {
    state: {
        selectedNumberOfWeeks: number;
        selectedNumberOfChildren: 1 | 2 | 3;
        selectedPercentage: number;
        monthlyWage: number | null;
        monthlyWageError: string;
        maksForeldrepenger: number;
    };

    constructor(props: {}) {
        super(props);

        this.state = {
            selectedNumberOfWeeks: 49,
            selectedNumberOfChildren: 1,
            selectedPercentage: 100,
            monthlyWage: 22000,
            monthlyWageError: '',

            // TODO: Hente grunnbeløpet (G) fra en ekstern kilde
            maksForeldrepenger: (6 * 96883) / 12
        };
    }

    onNumberOfWeeksSelect = (
        selectedNumberOfWeeks: number,
        selectedNumberOfChildren: 1 | 2 | 3,
        selectedPercentage: number
    ) => {
        this.setState({
            selectedNumberOfWeeks,
            selectedNumberOfChildren,
            selectedPercentage
        });
    };

    onPercentageSelect = (selectedPercentage: number) => {
        const selectedNumberOfWeeks =
            antallUtbetalingsuker[this.state.selectedNumberOfChildren][
                selectedPercentage
            ];

        this.setState({
            selectedPercentage,
            selectedNumberOfWeeks
        });
    };

    onMonthlyWageChange = (event: any) => {
        // TODO: Valider månedslønn og sett evt. en feilmelding-state.
        const sum = parseInt(event.currentTarget.value);
        let monthlyWage = null;
        let error = '';

        if (!isNaN(sum)) {
            error = validateMonthlyWage(sum);
            monthlyWage = sum;
        }

        this.setState({
            monthlyWage,
            monthlyWageError: error
        });
    };

    render = () => {
        const AntallUkerWrapper = addAntallUkerAttributes(
            this.state.selectedNumberOfWeeks,
            this.onNumberOfWeeksSelect
        );

        const wageError =
            this.state.monthlyWageError === ''
                ? undefined
                : {
                      feilmelding: this.state.monthlyWageError
                  };

        return (
            <div className={cls.className}>
                <div className={cls.element('antallUkerOgBarn')}>
                    <div />
                    <TypografiBase type="normaltekst">100%</TypografiBase>
                    <TypografiBase type="normaltekst">80%</TypografiBase>
                    <AntallBarn childCount={1} label={translate('ett_barn')} />
                    <AntallUkerWrapper
                        numberOfWeeks={antallUtbetalingsuker[1][100]}
                        numberOfChildren={1}
                        percentage={100}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={antallUtbetalingsuker[1][80]}
                        numberOfChildren={1}
                        percentage={80}
                    />
                    <AntallBarn
                        childCount={2}
                        label={translate('tvillinger')}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={antallUtbetalingsuker[2][100]}
                        numberOfChildren={2}
                        percentage={100}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={antallUtbetalingsuker[2][80]}
                        numberOfChildren={2}
                        percentage={80}
                    />
                    <AntallBarn
                        childCount={3}
                        label={translate('flere_barn')}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={antallUtbetalingsuker[3][100]}
                        numberOfChildren={3}
                        percentage={100}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={antallUtbetalingsuker[3][80]}
                        numberOfChildren={3}
                        percentage={80}
                    />
                </div>
                <div className={cls.element('dinLønn')}>
                    <div
                        className={cls.element(
                            'dinLønn__percentageOptionContainer'
                        )}>
                        <DinMånedslønnOption
                            percentage={100}
                            onSelect={this.onPercentageSelect}
                            isSelected={this.state.selectedPercentage === 100}
                            maksForeldrepenger={this.state.maksForeldrepenger}
                            sum={this.state.monthlyWage}
                        />
                        <DinMånedslønnOption
                            percentage={80}
                            onSelect={this.onPercentageSelect}
                            isSelected={this.state.selectedPercentage === 80}
                            maksForeldrepenger={this.state.maksForeldrepenger}
                            sum={this.state.monthlyWage}
                        />
                    </div>
                    <div className={cls.element('dinLønn__inputContainer')}>
                        <Input
                            bredde="L"
                            type="number"
                            placeholder="0"
                            feil={wageError}
                            onChange={this.onMonthlyWageChange}
                            value={
                                this.state.monthlyWage === null
                                    ? ''
                                    : this.state.monthlyWage
                            }
                            label={translate('din_lønn_per_mnd_ca')}
                        />
                    </div>
                </div>
            </div>
        );
    };
}

const DinMånedslønnOption = ({
    percentage,
    onSelect,
    sum,
    maksForeldrepenger,
    isSelected
}: {
    percentage: number;
    onSelect: (percentage: number) => void;
    sum: number | null;
    maksForeldrepenger: number;
    isSelected: boolean;
}) => {
    let monthlyPayment = 0;
    if (sum != null) {
        monthlyPayment = sum > maksForeldrepenger ? maksForeldrepenger : sum;

        monthlyPayment = Math.round(monthlyPayment * (percentage / 100));
    }

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => onSelect(percentage)}
            onKeyPress={() => onSelect(percentage)}
            className={classnames(
                cls.element('option'),
                cls.element('dinLønn__percentageOption'),
                {
                    [cls.element('option--selected')]: isSelected
                }
            )}>
            <TypografiBase type="normaltekst">{`${percentage}%`}</TypografiBase>
            <TypografiBase type="element">{`${monthlyPayment},–`}</TypografiBase>
        </div>
    );
};

const addAntallUkerAttributes = (
    selectedNumberOfWeeks: number,
    onSelect: (
        numberOfWeeks: number,
        numberOfChildren: number,
        percentage: number
    ) => void
) => ({
    numberOfWeeks,
    numberOfChildren,
    percentage
}: {
    numberOfWeeks: number;
    numberOfChildren: number;
    percentage: number;
}) => {
    return (
        <AntallUker
            numberOfWeeks={numberOfWeeks}
            numberOfChildren={numberOfChildren}
            percentage={percentage}
            isSelected={selectedNumberOfWeeks === numberOfWeeks}
            onSelect={() => {
                onSelect(numberOfWeeks, numberOfChildren, percentage);
            }}
        />
    );
};

const AntallBarn = ({
    childCount,
    label
}: {
    childCount: number;
    label: string;
}) => {
    const childCountIllustration = [];
    for (let i = 0; i < childCount; i++) {
        childCountIllustration.push(<span key={i}>👶</span>);
    }

    return (
        <div className={cls.element('centerItems')}>
            <div>{childCountIllustration}</div>
            <TypografiBase type="normaltekst">{label}</TypografiBase>
        </div>
    );
};

const AntallUker = ({
    numberOfWeeks,
    numberOfChildren,
    percentage,
    isSelected,
    onSelect
}: {
    numberOfWeeks: number;
    numberOfChildren: number;
    percentage: number;
    isSelected: boolean;
    onSelect: () => void;
}) => {
    const numberOfChildrenSpelled =
        numberOfChildren === 1
            ? translate('ett_barn')
            : numberOfChildren === 2
                ? translate('tvillinger')
                : translate('flere_barn');

    return (
        <div className={cls.element('centerItems')}>
            <div
                role="button"
                tabIndex={0}
                aria-label={`${numberOfChildrenSpelled}, ${numberOfWeeks} uker med ${percentage}% utbetaling.`}
                onClick={onSelect}
                onKeyPress={onSelect}
                className={classnames(
                    cls.element('flexDownwards'),
                    cls.element('option'),
                    cls.element('antallUker'),
                    {
                        [cls.element('option--selected')]: isSelected
                    }
                )}>
                <TypografiBase type="element">{numberOfWeeks}</TypografiBase>
                {isSelected && (
                    <TypografiBase type="undertekst">
                        {translate('uker')}
                    </TypografiBase>
                )}
            </div>
        </div>
    );
};

export default Kalkulator;
