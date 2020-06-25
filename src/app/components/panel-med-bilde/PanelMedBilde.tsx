import React, { ReactNode } from 'react';
import PanelBase from 'nav-frontend-paneler';
import TypografiBase from 'nav-frontend-typografi';
import { HoyreChevron } from 'nav-frontend-chevron';

import BEMHelper from '../../utils/bem';
import { FlexibleSvg } from '../../utils/CustomSVG';
import WithLink from '../with-link/WithLink';
import './panelMedBilde.less';
import MediaQuery from 'react-responsive';

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
    underArbeid,
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

    const toRender = (
        <WithLink
            className={disabled ? '' : cls.block}
            url={url}
            noStyling={true}
            noTabbing={disabled}
            bypassNavlab={bypassNavlab}
            urlIsExternal={urlIsExternal}
        >
            <div className={cls.element('imageOnPanel')}>
                <div className={cls.element('svgContainer')}>
                    <MediaQuery maxWidth={799}>
                        <FlexibleSvg className={cls.element('svg')} iconRef={svgFile} height={80} width="100%" />
                    </MediaQuery>
                    <MediaQuery minWidth={800}>
                        <FlexibleSvg className={cls.element('svg')} iconRef={svgFile} height={110} width="100%" />
                    </MediaQuery>
                </div>
            </div>
            <PanelBase border={false} className={cls.element('panelOnPanel')}>
                <div className={cls.element(disabled ? 'textOnPanel disabled' : 'textOnPanel')}>
                    <TypografiBase type="undertittel">{title}</TypografiBase>
                    {children}
                </div>
                <HoyreChevron className={cls.element('panelChevron')} />
            </PanelBase>
        </WithLink>
    );

    return disabled ? (
        <div tabIndex={0} className={stopSign ? cls.block + ' stop-sign' : cls.block}>
            <div className={cls.element('underArbeid')}>{underArbeid}</div>
            <div className={disabled ? '' + ' disabled' : ''}>{toRender}</div>
        </div>
    ) : (
        toRender
    );
};

export default PanelMedBilde;
