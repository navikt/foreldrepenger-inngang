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
    maskSvg,
    className,
    children
}: {
    id?: string;
    title: string;
    svg: any;
    maskSvg?: boolean;
    className?: string;
    children: React.ReactNode;
}) => {
    let illustration = <CustomSVG size={100} iconRef={svg} />;
    if (maskSvg) {
        illustration = (
            <div className={cls.element('roundSvgMask')}>{illustration}</div>
        );
    }

    return (
        <div
            role="region"
            aria-label={`Seksjon: ${title}`}
            id={id}
            className={className}>
            <PanelBase className={cls.className}>
                {illustration}
                <TypografiBase type="systemtittel">{title}</TypografiBase>
                <div className={cls.element('divider')} />
                {children}
            </PanelBase>
        </div>
    );
};

export default PanelMedIllustrasjon;
