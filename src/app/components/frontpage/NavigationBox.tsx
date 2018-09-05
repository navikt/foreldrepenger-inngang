import React, { ReactNode } from 'react';
import PanelBase from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';

const NavigationBox = ({
    title,
    children
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <PanelBase border={true}>
            <div className="title-wrapper">
                <TypografiBase type="innholdstittel">{title}</TypografiBase>
            </div>
            {children}
        </PanelBase>
    );
};

export default NavigationBox;
