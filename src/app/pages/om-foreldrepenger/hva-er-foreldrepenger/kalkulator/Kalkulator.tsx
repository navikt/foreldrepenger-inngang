import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../../utils/bem';
import translate from '../../../../utils/translate';
import AntallBarn from './AntallBarn';
import AntallUker from './AntallUker';
import DinLønn from './din-lønn/DinLønn';
import { antallUtbetalingsuker } from './utils';
import './kalkulator.less';

const cls = BEMHelper('kalkulator');

class Kalkulator extends React.Component {
    state: {
        selectedNumberOfWeeks: number;
        selectedNumberOfChildren: 1 | 2 | 3;
        selectedPercentage: number;
    };

    constructor(props: {}) {
        super(props);

        this.state = {
            selectedNumberOfWeeks: 49,
            selectedNumberOfChildren: 1,
            selectedPercentage: 100
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

    render = () => {
        const AntallUkerWrapper = addAntallUkerAttributes(
            this.state.selectedNumberOfWeeks,
            this.onNumberOfWeeksSelect
        );

        return (
            <div
                role="section"
                aria-label="Kalkulator for foreldrepengeperiode"
                className={cls.className}>
                <div className={cls.element('antallUkerOgBarn')}>
                    <div />
                    <TypografiBase type="normaltekst">100%</TypografiBase>
                    <TypografiBase type="normaltekst">80%</TypografiBase>
                    <AntallBarn
                        parentCls={cls}
                        childCount={1}
                        label={translate('ett_barn')}
                    />
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
                        parentCls={cls}
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
                        parentCls={cls}
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
                <DinLønn
                    grandParentCls={cls}
                    selectedPercentage={this.state.selectedPercentage}
                    onPercentageSelect={this.onPercentageSelect}
                />
            </div>
        );
    };
}

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
            parentCls={cls}
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

export default Kalkulator;
