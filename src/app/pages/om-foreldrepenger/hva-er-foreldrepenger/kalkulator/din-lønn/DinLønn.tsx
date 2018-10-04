import * as React from 'react';

import BEMHelper, { BEMWrapper } from '../../../../../utils/bem';
import Prosentvalg from './Prosentvalg';

import './dinLønn.less';
import translate from '../../../../../intl/translate';

const cls = BEMHelper('dinLønn');

interface Props {
    grandParentCls: BEMWrapper;
    selectedPercentage: number;
    onPercentageSelect: (p: number) => void;
}

const DinLønn = ({ grandParentCls, selectedPercentage, onPercentageSelect }: Props) => {
    const monthlyWage = 22000;

    return (
        <div className={cls.className}>
            <div className={cls.element('prosentvalgContainer')}>
                <Prosentvalg
                    parentCls={cls}
                    grandParentCls={grandParentCls}
                    percentage={100}
                    onSelect={onPercentageSelect}
                    isSelected={selectedPercentage === 100}
                    sum={monthlyWage}
                />
                <Prosentvalg
                    parentCls={cls}
                    grandParentCls={grandParentCls}
                    percentage={80}
                    onSelect={onPercentageSelect}
                    isSelected={selectedPercentage === 80}
                    sum={monthlyWage}
                />
            </div>
            <div className={cls.element('inputContainer')}>
                {`${translate('om_foreldrepenger.hvor_lenge.eksempel')} ${monthlyWage},– kr`}
            </div>
        </div>
    );
};

export default DinLønn;
