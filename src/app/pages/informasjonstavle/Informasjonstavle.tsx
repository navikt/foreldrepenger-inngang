import React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import { HoyreChevron } from 'nav-frontend-chevron';

import translate from '../../utils/translate';
import BEMHelper from '../../utils/bem';
import externalUrls from '../../utils/externalUrls';

import PanelMedBilde from '../../components/panel-med-bilde/PanelMedBilde';
import Header from './header/Header';
import './informasjonstavle.less';
import Veilederpanel from 'nav-frontend-veilederpanel';
import CustomSVG from '../../utils/CustomSVG';
import KnappBase from 'nav-frontend-knapper';

const cls = BEMHelper('informasjonstavle');
const merInformasjonCls = BEMHelper('merInformasjon');

const Informasjonstavle = () => {
    return (
        <div className={cls.className}>
            <Header />
            <VeilederMedInnlogging />
            <div className={cls.element('content')}>
                <div className={cls.element('bildepaneler')}>
                    <PanelMedBilde
                        svgName="se-over-søknad"
                        title={translate('hvor_lenge_kan_du_få_permisjon')}
                        urlIsExternal={true}
                        url={externalUrls.foreldrepengeplanlegger}>
                        <Tekstomrade>
                            {translate('hvor_lenge_kan_du_få_permisjon_body')}
                        </Tekstomrade>
                    </PanelMedBilde>
                    <PanelMedBilde
                        svgName="fylle-ut-søknad"
                        title={translate('gå_rett_til_søknaden')}
                        urlIsExternal={false}
                        url="/hva-soker-du/">
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

const VeilederMedInnlogging = () => {
    const saraSvg = require(`../../../assets/sara.svg`).default;
    const sara = <CustomSVG iconRef={saraSvg} size={64} />;

    return (
        <Veilederpanel kompakt={true} svg={sara} fargetema="normal">
            <div className={cls.element('veilederinnhold')}>
                <div>{translate('informasjonstavle_veileder')}</div>
                <KnappBase
                    className={cls.element('veilederknapp')}
                    type="standard">
                    {translate('logg_inn')}
                </KnappBase>
            </div>
        </Veilederpanel>
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
                    url={externalUrls.les_mer_foreldrepenger}
                />
                <MerInformasjonLink
                    title={translate('engangsstønad')}
                    body={translate('mer_informasjon_engangsstønad')}
                    url={externalUrls.les_mer_engangsstønad}
                />
                <MerInformasjonLink
                    title={translate('svangerskapspenger')}
                    body={translate('mer_informasjon_svangerskapspenger')}
                    url={externalUrls.les_mer_svangerskapspenger}
                />
            </div>
        </div>
    );
};

const MerInformasjonLink = ({
    title,
    body,
    url
}: {
    title: string;
    body: string;
    url: string;
}) => {
    return (
        <a href={url} className={merInformasjonCls.element('link')}>
            <div>
                <TypografiBase type="element">{title}</TypografiBase>
                <Tekstomrade>{body}</Tekstomrade>
            </div>
            <HoyreChevron className={merInformasjonCls.element('chevron')} />
        </a>
    );
};

export default Informasjonstavle;
