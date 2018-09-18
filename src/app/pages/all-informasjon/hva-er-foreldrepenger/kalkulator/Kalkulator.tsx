import * as React from 'react';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import { Input } from 'nav-frontend-skjema';

import BEMHelper from '../../../../utils/bem';
import translate from '../../../../utils/translate';
import './kalkulator.less';

const cls = BEMHelper('kalkulator');

class Kalkulator extends React.Component {
    state: {
        selectedNumberOfWeeks: number;
        selectedPercentage: number;
        monthlyWage: number | null;
    };

    constructor(props: {}) {
        super(props);

        this.state = {
            selectedNumberOfWeeks: 49,
            selectedPercentage: 100,
            monthlyWage: 22000
        };
    }

    onNumberOfWeeksSelect = (selectedNumberOfWeeks: number) => {
        this.setState({
            selectedNumberOfWeeks
        });
    };

    onMonthlyWageChange = (event: any) => {
        // TODO: Valider månedslønn og sett evt. en feilmelding-state.
        const sum = parseInt(event.currentTarget.value);
        let monthlyWage = null;

        if (!isNaN(sum)) {
            monthlyWage = sum;
        }

        this.setState({
            monthlyWage
        });
    };

    onPercentageSelect = (selectedPercentage: number) => {
        this.setState({
            selectedPercentage
        });
    };

    render = () => {
        const AntallUkerWrapper = addAntallUkerAttributes(
            this.state.selectedNumberOfWeeks,
            this.onNumberOfWeeksSelect
        );

        return (
            <div className={cls.className}>
                <div className={cls.element('antallUkerOgBarn')}>
                    <div />
                    <TypografiBase type="normaltekst">100%</TypografiBase>
                    <TypografiBase type="normaltekst">80%</TypografiBase>
                    <AntallBarn childCount={1} label={translate('ett_barn')} />
                    <AntallUkerWrapper
                        numberOfWeeks={49}
                        percentage={100}
                        numberOfChildren={1}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={59}
                        percentage={80}
                        numberOfChildren={1}
                    />
                    <AntallBarn
                        childCount={2}
                        label={translate('tvillinger')}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={54}
                        percentage={100}
                        numberOfChildren={2}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={66}
                        percentage={80}
                        numberOfChildren={2}
                    />
                    <AntallBarn
                        childCount={3}
                        label={translate('flere_barn')}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={95}
                        percentage={100}
                        numberOfChildren={3}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={115}
                        percentage={80}
                        numberOfChildren={3}
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
                            sum={this.state.monthlyWage}
                        />
                        <DinMånedslønnOption
                            percentage={80}
                            onSelect={this.onPercentageSelect}
                            isSelected={this.state.selectedPercentage === 80}
                            sum={this.state.monthlyWage}
                        />
                    </div>
                    <div className={cls.element('dinLønn__inputContainer')}>
                        <Input
                            bredde="L"
                            type="number"
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
    isSelected
}: {
    percentage: number;
    onSelect: (percentage: number) => void;
    sum: number | null;
    isSelected: boolean;
}) => {
    const sumToShow = sum == null ? 0 : Math.round(sum);

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
            <TypografiBase type="element">{`${sumToShow},–`}</TypografiBase>
        </div>
    );
};

const addAntallUkerAttributes = (
    selectedNumberOfWeeks: number,
    onSelect: (numberOfWeeks: number) => void
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
                onSelect(numberOfWeeks);
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
