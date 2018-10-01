import * as React from 'react';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import translate from '../../../../utils/translate';
import { BEMWrapper } from '../../../../utils/bem';

const AntallUker = ({
    parentCls,
    numberOfWeeks,
    numberOfChildren,
    percentage,
    isSelected,
    onSelect
}: {
    parentCls: BEMWrapper;
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

    const combinedClassnames = classnames(
        parentCls.element('flexDownwards'),
        parentCls.element('option'),
        parentCls.element('antallUker'),
        {
            [parentCls.element('option--selected')]: isSelected
        }
    );

    const ariaLabel = `${numberOfChildrenSpelled}, ${numberOfWeeks} uker med ${percentage}% utbetaling.`;

    return (
        <div className={parentCls.element('centerItems')}>
            <div
                role="button"
                tabIndex={0}
                aria-label={ariaLabel}
                onClick={onSelect}
                onKeyPress={onSelect}
                className={combinedClassnames}>
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

export default AntallUker;
