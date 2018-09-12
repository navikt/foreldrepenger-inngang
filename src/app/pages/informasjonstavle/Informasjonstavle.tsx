import React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import { HoyreChevron } from 'nav-frontend-chevron';

import translate from '../../utils/translate';
import BEMHelper from '../../utils/bem';

import PanelMedBilde from '../../components/panel-med-bilde/PanelMedBilde';
import './informasjonstavle.less';

const cls = BEMHelper('informasjonstavle');
const merInformasjonCls = BEMHelper('merInformasjon');

const Informasjonstavle = () => {
    return (
        <div className={cls.className}>
            <div className={cls.element('content')}>
                <div className={cls.element('bildepaneler')}>
                    <PanelMedBilde
                        svgName="se-over-søknad"
                        title={translate('hvor_lenge_kan_du_få_permisjon')}
                        urlIsExternal={true}
                        url={'www.nav.no'}>
                        <Tekstomrade>
                            {translate('hvor_lenge_kan_du_få_permisjon_body')}
                        </Tekstomrade>
                    </PanelMedBilde>
                    <PanelMedBilde
                        svgName="fylle-ut-søknad"
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
