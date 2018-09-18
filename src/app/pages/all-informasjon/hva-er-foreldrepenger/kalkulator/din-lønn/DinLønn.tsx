import * as React from 'react';
import { Input } from 'nav-frontend-skjema';

import BEMHelper, { BEMWrapper } from '../../../../../utils/bem';
import translate from '../../../../../utils/translate';
import Prosentvalg from '../Prosentvalg';

import './dinLønn.less';

const cls = BEMHelper('dinLønn');

interface Props {
    grandParentCls: BEMWrapper;
    selectedPercentage: number;
    onPercentageSelect: (p: number) => void;
    onMonthlyWageChange: (e: any) => void;
    monthlyWage: number | null;
    maximumWage: number;
    wageError: { feilmelding: string } | undefined;
}

const DinLønn = ({
    grandParentCls,
    selectedPercentage,
    onPercentageSelect,
    onMonthlyWageChange,
    monthlyWage,
    maximumWage,
    wageError
}: Props) => {
    return (
        <div className={cls.className}>
            <div className={cls.element('prosentvalgContainer')}>
                <Prosentvalg
                    parentCls={cls}
                    grandParentCls={grandParentCls}
                    percentage={100}
                    onSelect={onPercentageSelect}
                    isSelected={selectedPercentage === 100}
                    maksForeldrepenger={maximumWage}
                    sum={monthlyWage}
                />
                <Prosentvalg
                    parentCls={cls}
                    grandParentCls={grandParentCls}
                    percentage={80}
                    onSelect={onPercentageSelect}
                    isSelected={selectedPercentage === 80}
                    maksForeldrepenger={maximumWage}
                    sum={monthlyWage}
                />
            </div>
            <div className={cls.element('inputContainer')}>
                <Input
                    bredde="L"
                    type="number"
                    placeholder="0"
                    feil={wageError}
                    onChange={onMonthlyWageChange}
                    label={translate('din_lønn_per_mnd_ca')}
                    value={monthlyWage === null ? '' : monthlyWage}
                />
            </div>
        </div>
    );
};

export default DinLønn;
