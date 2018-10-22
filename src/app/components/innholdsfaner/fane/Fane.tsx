import * as React from 'react';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../utils/bem';
import { getTranslation, IntlProps, withIntl } from '../../../intl/intl';

import './fane.less';

const cls = BEMHelper('fane');

export interface Innholdsfane {
    label: string;
    icon: React.ReactNode;
    component: React.ReactNode;
}

interface Props {
    tab: Innholdsfane;
    isSelected: boolean;
    onSelect: () => void;
    mos?: boolean;
}

const Fane: React.StatelessComponent<Props & IntlProps> = ({
    tab,
    isSelected,
    onSelect,
    mos,
    lang
}) => {
    return (
        <div
            tabIndex={0}
            role="tab"
            aria-selected={isSelected}
            onClick={onSelect}
            onKeyPress={onSelect}
            className={classnames(cls.className, {
                [cls.modifier('selected')]: isSelected,
                [cls.modifier('most')]: mos
            })}>
            <div className={cls.element('inner')}>
                {tab.icon}
                <TypografiBase type="normaltekst">{getTranslation(tab.label, lang)}</TypografiBase>
            </div>
            <div className={cls.element('selector')} />
        </div>
    );
};

export default withIntl(Fane);
