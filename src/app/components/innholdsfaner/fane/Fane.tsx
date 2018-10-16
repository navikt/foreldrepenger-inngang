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
    before: any;
    after: any;
}

const Fane: React.StatelessComponent<Props & IntlProps> = ({
    tab,
    isSelected,
    onSelect,
    mos,
    before,
    after,
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
            <div className={cls.element('background')} />
            <div className={cls.element('inner')}>
                {tab.icon}
                <TypografiBase type="normaltekst">{getTranslation(tab.label, lang)}</TypografiBase>
            </div>
            {isSelected && (
                <div className={cls.element('point-wrapper')}>
                    <div className={cls.element('indicator')}>
                        <div className={cls.element('pointer')}>
                            <span
                                className={cls.element('pointerBefore')}
                                style={{
                                    width: before,
                                    left: -1 * (before - 2)
                                }}
                            />
                            <Chevron />
                            <span
                                className={cls.element('pointerAfter')}
                                style={{
                                    width: after
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const Chevron = () => (
    <span>
        <svg width="13px" height="9px" viewBox="0 0 13 8" version="1.1">
            <title>Chevron</title>
            <defs />
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon
                    fill="#FFFFFF"
                    points="6.5 2.82842712 11.4497475 7.77817459 1.55025253 7.77817459"
                />
                <polygon
                    fill="#EFEFEF"
                    points="6.5 1.64757097e-13 12.863961 6.36396103 11.4497475 7.77817459 6.5 2.82842712 1.55025253 7.77817459 0.136038969 6.36396103"
                />
            </g>
        </svg>
    </span>
);

export default withIntl(Fane);
