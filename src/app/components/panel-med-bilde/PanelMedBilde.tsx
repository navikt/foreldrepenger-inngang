import React, { ReactNode } from 'react';
import PanelBase from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';
import { HoyreChevron } from 'nav-frontend-chevron';

import BEMHelper from '../../utils/bem';
import { FlexibleSvg } from '../../utils/CustomSVG';
import { WithLink } from '../../utils/withLink';
import './panelMedBilde.less';

const cls = BEMHelper('panelMedBilde');

const PanelMedBilde = ({
    svgName,
    title,
    url,
    urlIsExternal,
    children,
    disabled,
    stopSign,
    bypassNavlab,
    underArbeid
}: {
    svgName: any;
    title: string;
    urlIsExternal?: boolean;
    url: string;
    children: ReactNode;
    disabled?: boolean;
    stopSign?: boolean;
    bypassNavlab?: boolean;
    underArbeid?: ReactNode;
}) => {
    const svgFile = require(`./img/${svgName}.svg`).default;

    return (
        <div className={stopSign ? cls.className + ' stop-sign' : cls.className}>
            <div className={cls.element('underArbeid')}>{underArbeid}</div>
            <div className={disabled ? '' + ' disabled' : ''}>
                <WithLink
                    // className={cls.className}
                    url={url}
                    noStyling={true}
                    bypassNavlab={bypassNavlab}
                    urlIsExternal={urlIsExternal}>
                    <div className={cls.element('imageOnPanel')}>
                        <div className={cls.element('svgContainer')}>
                            <FlexibleSvg
                                className={cls.element('svg')}
                                iconRef={svgFile}
                                height={115}
                                width="100%"
                            />
                        </div>
                    </div>
                    <PanelBase border={false} className={cls.element('panelOnPanel')}>
                        <div
                            className={cls.element(
                                disabled ? 'textOnPanel disabled' : 'textOnPanel'
                            )}>
                            <TypografiBase type="undertittel">{title}</TypografiBase>
                            {children}
                        </div>
                        <HoyreChevron className={cls.element('panelChevron')} />
                    </PanelBase>
                </WithLink>
            </div>
        </div>
    );
};

export default PanelMedBilde;
