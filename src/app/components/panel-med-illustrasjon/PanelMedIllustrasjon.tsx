import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import PanelBase from 'nav-frontend-paneler';
import CustomSVG from '../../utils/CustomSVG';
import BEMHelper from '../../utils/bem';

import './panelMedIllustrasjon.less';

const cls = BEMHelper('panelMedIllustrasjon');

const PanelMedIllustrasjon = ({
    id,
    title,
    svg,
    className,
    children
}: {
    id?: string;
    title: string;
    svg: any;
    className?: string;
    children: React.ReactNode;
}) => {
    const illustration = svg.viewBox ? <CustomSVG size={100} iconRef={svg} /> : svg;

    return (
        <section aria-label={title} id={id} className={className}>
            <PanelBase className={cls.block}>
                {illustration}
                <TypografiBase type="innholdstittel">{title}</TypografiBase>
                <div className={cls.element('divider')} />
                {children}
            </PanelBase>
        </section>
    );
};

export default PanelMedIllustrasjon;
