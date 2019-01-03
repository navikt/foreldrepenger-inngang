import * as React from 'react';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { BEMWrapper } from '../../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';

interface Props {
    parentCls: BEMWrapper;
    numberOfWeeks: number;
    numberOfChildren: number;
    percentage: number;
    isSelected: boolean;
    onSelect: () => void;
}

const AntallUker: React.StatelessComponent<Props & InjectedIntlProps> = ({
    parentCls,
    numberOfWeeks,
    numberOfChildren,
    percentage,
    isSelected,
    onSelect,
    intl
}) => {
    const numberOfChildrenSpelled =
        numberOfChildren === 1
            ? getTranslation('ett_barn', intl)
            : numberOfChildren === 2
            ? getTranslation('tvillinger', intl)
            : getTranslation('flere_barn', intl);

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
                    <TypografiBase type="undertekst">{getTranslation('uker', intl)}</TypografiBase>
                )}
            </div>
        </div>
    );
};

export default injectIntl(AntallUker);
