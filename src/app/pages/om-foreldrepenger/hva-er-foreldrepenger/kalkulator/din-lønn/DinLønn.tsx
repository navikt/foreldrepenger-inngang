import * as React from 'react';

import BEMHelper, { BEMWrapper } from '../../../../../utils/bem';
import Prosentvalg from './Prosentvalg';

import './dinLønn.less';
import { getTranslation, withIntl, IntlProps } from '../../../../../intl/intl';

const cls = BEMHelper('dinLønn');

interface Props {
    grandParentCls: BEMWrapper;
    selectedPercentage: number;
    onPercentageSelect: (p: number) => void;
}

const DinLønn: React.StatelessComponent<Props & IntlProps> = ({
    grandParentCls,
    selectedPercentage,
    onPercentageSelect,
    lang
}) => {
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
                {`${getTranslation(
                    'om_foreldrepenger.hvor_lenge.eksempel',
                    lang
                )} ${monthlyWage},– kr`}
            </div>
        </div>
    );
};

export default withIntl(DinLønn);
