import * as React from 'react';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import { BEMWrapper } from '../../../../utils/bem';

const Prosentvalg = ({
    parentCls,
    grandParentCls,
    percentage,
    onSelect,
    sum,
    maksForeldrepenger,
    isSelected
}: {
    parentCls: BEMWrapper;
    grandParentCls: BEMWrapper;
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

    const combinedClassnames = classnames(
        grandParentCls.element('option'),
        {
            [grandParentCls.element('option--selected')]: isSelected
        },
        parentCls.element('prosentvalg')
    );

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => onSelect(percentage)}
            onKeyPress={() => onSelect(percentage)}
            className={combinedClassnames}>
            <TypografiBase type="normaltekst">{`${percentage}%`}</TypografiBase>
            <TypografiBase type="element">{`${monthlyPayment},–`}</TypografiBase>
        </div>
    );
};

export default Prosentvalg;
