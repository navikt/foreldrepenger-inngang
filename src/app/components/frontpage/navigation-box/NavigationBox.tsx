import React, { ReactNode } from 'react';
import PanelBase from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';
import './navigationBox.less';

const NavigationBox = ({
    title,
    children
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <div className="navigationBox">
            <PanelBase border={true}>
                <div className="navigationBox__title">
                    <TypografiBase type="innholdstittel">{title}</TypografiBase>
                </div>
                {children}
            </PanelBase>
        </div>
    );
};

export default NavigationBox;
