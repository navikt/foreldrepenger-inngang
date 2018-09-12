import React, { ReactNode } from 'react';
import translate from '../../utils/translate';
import PanelBase from 'nav-frontend-paneler';
import BEMHelper from '../../utils/bem';

import './informasjonstavle.less';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import { HoyreChevron } from 'nav-frontend-chevron';

const cls = BEMHelper('informasjonstavle');
const merInformasjonCls = BEMHelper('merInformasjon');

const Informasjonstavle = () => {
    return (
        <div className={cls.className}>
            <div className={cls.element('content')}>
                <div className={cls.element('hovedlenker')}>
                    <PanelMedBilde
                        svgName="a"
                        title={translate('hvor_lenge_kan_du_få_permisjon')}
                        urlIsExternal={true}
                        url={'www.nav.no'}>
                        <Tekstomrade>
                            {translate('hvor_lenge_kan_du_få_permisjon_body')}
                        </Tekstomrade>
                    </PanelMedBilde>
                    <PanelMedBilde
                        svgName="b"
                        title={translate('gå_rett_til_søknaden')}
                        url={'www.nav.no'}>
                        <Tekstomrade>
                            {translate('gå_rett_til_søknaden_body')}
                        </Tekstomrade>
                    </PanelMedBilde>
                </div>
                <MerInformasjon />
            </div>
        </div>
    );
};

const PanelMedBilde = ({
    svgName,
    title,
    urlIsExternal,
    children
}: {
    svgName: any;
    title: string;
    urlIsExternal?: boolean;
    url: string;
    children: ReactNode;
}) => {
    return (
        <div className={cls.element('panelMedBilde')}>
            <div className={cls.element('imageOnPanel')}>Bilde kommer!</div>
            <PanelBase border={false} className={cls.element('panelOnPanel')}>
                <div className={cls.element('textOnPanel')}>
                    <TypografiBase type="undertittel">{title}</TypografiBase>
                    {children}
                </div>
                <HoyreChevron className={cls.element('panelChevron')} />
            </PanelBase>
        </div>
    );
};

const MerInformasjon = () => {
    return (
        <div className={merInformasjonCls.className}>
            <div className={merInformasjonCls.element('title')}>
                <TypografiBase type="undertittel">
                    {translate('mer_informasjon_tittel')}
                </TypografiBase>
            </div>
            <div className={merInformasjonCls.element('links')}>
                <MerInformasjonLink
                    title={translate('foreldrepenger')}
                    body={translate('mer_informasjon_foreldrepenger')}
                />
                <MerInformasjonLink
                    title={translate('engangsstønad')}
                    body={translate('mer_informasjon_engangsstønad')}
                />
                <MerInformasjonLink
                    title={translate('svangerskapspenger')}
                    body={translate('mer_informasjon_svangerskapspenger')}
                />
            </div>
        </div>
    );
};

const MerInformasjonLink = ({
    title,
    body
}: {
    title: string;
    body: string;
}) => {
    return (
        <div className={merInformasjonCls.element('link')}>
            <div>
                <TypografiBase type="element">{title}</TypografiBase>
                <Tekstomrade>{body}</Tekstomrade>
            </div>
            <HoyreChevron className={merInformasjonCls.element('chevron')} />
        </div>
    );
};

export default Informasjonstavle;
