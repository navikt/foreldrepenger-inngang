import * as React from 'react';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../utils/bem';
import translate from '../../../utils/translate';

import './fane.less';

const cls = BEMHelper('fane');

export interface Innholdsfane {
    label: string;
    icon: React.ReactNode;
    component: React.ReactNode;
}

const Fane = ({
    tab,
    isSelected,
    onSelect,
    mos
}: {
    tab: Innholdsfane;
    isSelected: boolean;
    onSelect: () => void;
    mos?: boolean;
}) => {
    return (
        <div
            tabIndex={0}
            role="button"
            onClick={onSelect}
            onKeyPress={onSelect}
            className={classnames(cls.className, {
                [cls.modifier('selected')]: isSelected,
                [cls.modifier('most')]: mos
            })}>
            <div className={cls.element('background')} />
            <div className={cls.element('inner')}>
                {tab.icon}
                <TypografiBase type="normaltekst">
                    {translate(tab.label)}
                </TypografiBase>
            </div>
            {isSelected && (
                <div className={cls.element('indicator')}>
                    <div className={cls.element('pointer')}>
                        <Chevron />
                    </div>
                </div>
            )}
        </div>
    );
};

const Chevron = () => (

    <span>
                 <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill="#efefef" />
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

        { /*
        <svg width="13px" height="9px" viewBox="0 0 13 8" version="1.1">
            <title>Chevron</title>
            <defs />
            <g
                id="Chevron"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <polygon
                    id="Background"
                    fill="#FFFFFF"
                    points="6.5 2.82842712 11.4497475 7.77817459 1.55025253 7.77817459"
                />
                <polygon
                    id="Arrow"
                    fill="#EFEFEF"
                    points="6.5 1.64757097e-13 12.863961 6.36396103 11.4497475 7.77817459 6.5 2.82842712 1.55025253 7.77817459 0.136038969 6.36396103"
                />
            </g>
        </svg>

        */ }
    </span>
);

export default Fane;
