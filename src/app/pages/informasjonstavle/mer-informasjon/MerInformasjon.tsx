import React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import { HoyreChevron } from 'nav-frontend-chevron';

import translate from '../../../utils/translate';
import BEMHelper from '../../../utils/bem';
import externalUrls from '../../../utils/externalUrls';
import './merInformasjon.less';

const cls = BEMHelper('merInformasjon');

const MerInformasjon = () => {
    return (
        <div className={cls.className}>
            <div className={cls.element('title')}>
                <TypografiBase type="undertittel">
                    {translate('mer_informasjon_tittel')}
                </TypografiBase>
            </div>
            <div className={cls.element('links')}>
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
        <a role="link" className={cls.element('linkContainer')} href={url}>
            <div className={cls.element('link')}>
                <div>
                    <TypografiBase type="element">{title}</TypografiBase>
                    <Tekstomrade>{body}</Tekstomrade>
                </div>
                <div className={cls.element('chevron')}>
                    <HoyreChevron />
                </div>
            </div>
        </a>
    );
};

export default MerInformasjon;
