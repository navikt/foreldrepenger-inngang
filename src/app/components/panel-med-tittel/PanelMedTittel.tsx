import React, { ReactNode } from 'react';
import PanelBase from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../utils/bem';
import './panelMedTittel.less';

const cls = BEMHelper('panelMedTittel');

const PanelMedTittel = ({
    title,
    children
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <div
            role="region"
            aria-label={`Seksjon for ${title}`}
            className={cls.className}>
            <PanelBase>
                <div className={cls.element('title')}>
                    <TypografiBase type="systemtittel">{title}</TypografiBase>
                </div>
                {children}
            </PanelBase>
        </div>
    );
};

export default PanelMedTittel;
