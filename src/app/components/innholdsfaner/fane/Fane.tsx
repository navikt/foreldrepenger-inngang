import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import classnames from 'classnames';
import getTranslation from 'app/utils/i18nUtils';
import TypografiBase from 'nav-frontend-typografi';
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

const Fane: React.StatelessComponent<Props & InjectedIntlProps> = ({
    tab,
    isSelected,
    onSelect,
    mos,
    intl
}) => {
    return (
        <button
            tabIndex={0}
            role="tab"
            aria-selected={isSelected}
            onClick={onSelect}
            onKeyPress={onSelect}
            className={classnames(cls.block, {
                [cls.modifier('selected')]: isSelected,
                [cls.modifier('most')]: mos
            })}>
            <div className={cls.element('inner')}>
                {tab.icon}
                <TypografiBase type="normaltekst">{getTranslation(tab.label, intl)}</TypografiBase>
            </div>
            <div className={cls.element('selector')} />
        </button>
    );
};

export default injectIntl(Fane);
