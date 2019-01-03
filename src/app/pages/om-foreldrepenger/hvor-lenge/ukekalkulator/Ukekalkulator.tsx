import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Utbetalingsalternativ } from './utils';
import AntallBarn from './AntallBarn';
import AntallUker from './AntallUker';
import BEMHelper from '../../../../utils/bem';
import DinLønn from './din-lønn/DinLønn';
import getTranslation from 'app/utils/i18nUtils';
import TypografiBase from 'nav-frontend-typografi';
import './ukekalkulator.less';

const cls = BEMHelper('ukekalkulator');

interface KalkulatorProps {
    antallUtbetalingsuker: Utbetalingsalternativ[];
}

type Props = KalkulatorProps & InjectedIntlProps;

interface State {
    selectedNumberOfWeeks: number;
    selectedNumberOfChildren: 1 | 2 | 3;
    selectedPercentage: number;
}

class Ukekalkulator extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            selectedNumberOfWeeks: props.antallUtbetalingsuker[0][100],
            selectedNumberOfChildren: 1,
            selectedPercentage: 100
        };
    }

    componentWillReceiveProps = (nextProps: Props) => {
        if (nextProps.antallUtbetalingsuker !== this.props.antallUtbetalingsuker) {
            this.setState({
                selectedNumberOfWeeks:
                    nextProps.antallUtbetalingsuker[this.state.selectedNumberOfChildren - 1][
                        this.state.selectedPercentage
                    ]
            });
        }
    };

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
        const selectedNumberOfWeeks = this.props.antallUtbetalingsuker[
            this.state.selectedNumberOfChildren - 1
        ][selectedPercentage];

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
                    <TypografiBase type="normaltekst">100 %</TypografiBase>
                    <TypografiBase type="normaltekst">80 %</TypografiBase>
                    <AntallBarn
                        parentCls={cls}
                        childCount={1}
                        label={getTranslation('ett_barn', this.props.intl)}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={this.props.antallUtbetalingsuker[0][100]}
                        numberOfChildren={1}
                        percentage={100}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={this.props.antallUtbetalingsuker[0][80]}
                        numberOfChildren={1}
                        percentage={80}
                    />
                    <AntallBarn
                        parentCls={cls}
                        childCount={2}
                        label={getTranslation('tvillinger', this.props.intl)}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={this.props.antallUtbetalingsuker[1][100]}
                        numberOfChildren={2}
                        percentage={100}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={this.props.antallUtbetalingsuker[1][80]}
                        numberOfChildren={2}
                        percentage={80}
                    />
                    <AntallBarn
                        parentCls={cls}
                        childCount={3}
                        label={getTranslation('flere_barn', this.props.intl)}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={this.props.antallUtbetalingsuker[2][100]}
                        numberOfChildren={3}
                        percentage={100}
                    />
                    <AntallUkerWrapper
                        numberOfWeeks={this.props.antallUtbetalingsuker[2][80]}
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
    onSelect: (numberOfWeeks: number, numberOfChildren: number, percentage: number) => void
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

export default injectIntl(Ukekalkulator);
