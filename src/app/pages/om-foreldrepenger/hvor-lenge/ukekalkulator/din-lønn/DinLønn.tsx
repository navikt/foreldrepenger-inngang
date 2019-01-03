import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper, { BEMWrapper } from '../../../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import Prosentvalg from './Prosentvalg';
import TypografiBase from 'nav-frontend-typografi';
import './dinLønn.less';

const cls = BEMHelper('dinLønn');

interface Props {
    grandParentCls: BEMWrapper;
    selectedPercentage: number;
    onPercentageSelect: (p: number) => void;
}

const DinLønn: React.StatelessComponent<Props & InjectedIntlProps> = ({
    grandParentCls,
    selectedPercentage,
    onPercentageSelect,
    intl
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
            <TypografiBase type="normaltekst" className={cls.element('eksempeltekst')}>
                {getTranslation('om_foreldrepenger.hvor_lenge.eksempel', intl)}
            </TypografiBase>
        </div>
    );
};

export default injectIntl(DinLønn);
