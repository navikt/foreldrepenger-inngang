import React, { ReactNode } from 'react';
import PanelBase from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../utils/bem';
import './navigationBox.less';

const cls = BEMHelper('navigationBox');

const NavigationBox = ({
    title,
    children
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <div className={cls.className}>
            <PanelBase border={true}>
                <div className={cls.element('title')}>
                    <TypografiBase type="innholdstittel">{title}</TypografiBase>
                </div>
                {children}
            </PanelBase>
        </div>
    );
};

export default NavigationBox;
