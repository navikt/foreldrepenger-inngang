import * as React from 'react';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import { getTranslation, IntlProps, withIntl } from '../../../../intl/intl';
import { BEMWrapper } from '../../../../utils/bem';

interface Props {
    parentCls: BEMWrapper;
    numberOfWeeks: number;
    numberOfChildren: number;
    percentage: number;
    isSelected: boolean;
    onSelect: () => void;
}

const AntallUker: React.StatelessComponent<Props & IntlProps> = ({
    parentCls,
    numberOfWeeks,
    numberOfChildren,
    percentage,
    isSelected,
    onSelect,
    lang
}) => {
    const numberOfChildrenSpelled =
        numberOfChildren === 1
            ? getTranslation('ett_barn', lang)
            : numberOfChildren === 2
                ? getTranslation('tvillinger', lang)
                : getTranslation('flere_barn', lang);

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
                    <TypografiBase type="undertekst">{getTranslation('uker', lang)}</TypografiBase>
                )}
            </div>
        </div>
    );
};

export default withIntl(AntallUker);
