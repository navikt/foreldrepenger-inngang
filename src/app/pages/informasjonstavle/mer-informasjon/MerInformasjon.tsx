import React from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import { HoyreChevron } from 'nav-frontend-chevron';

import translate from '../../../utils/translate';
import BEMHelper from '../../../utils/bem';
import externalUrls from '../../../utils/externalUrls';
import { WithLink } from '../../../utils/withLink';

import './merInformasjon.less';

const cls = BEMHelper('merInformasjon');

const MerInformasjon = () => {
    return (
        <div className={cls.className}>
            <div className={cls.element('title')}>
                <TypografiBase type="undertittel">
                    {translate('informasjonstavle.mer_informasjon.tittel')}
                </TypografiBase>
            </div>
            <div role="navigation" className={cls.element('links')}>
                <MerInformasjonLink
                    title={translate('foreldrepenger')}
                    body={translate('informasjonstavle.mer_informasjon.foreldrepenger')}
                    url="/om-foreldrepenger"
                    urlIsExternal={false}
                />
                <MerInformasjonLink
                    title={translate('engangsstønad')}
                    body={translate('informasjonstavle.mer_informasjon.engangsstønad')}
                    url="/om-engangsstonad"
                    urlIsExternal={false}
                />
                <MerInformasjonLink
                    title={translate('svangerskapspenger')}
                    body={translate('informasjonstavle.mer_informasjon.svangerskapspenger')}
                    url={externalUrls.les_mer_svangerskapspenger}
                    urlIsExternal={true}
                />
            </div>
        </div>
    );
};

const MerInformasjonLink = ({
    title,
    body,
    url,
    urlIsExternal
}: {
    title: string;
    body: string;
    url: string;
    urlIsExternal?: boolean;
}) => {
    return (
        <WithLink
            url={url}
            urlIsExternal={urlIsExternal}
            noStyling={true}
            className={cls.element('link')}>
            <div>
                <TypografiBase type="undertittel">{title}</TypografiBase>
                <Tekstomrade>{body}</Tekstomrade>
            </div>
            <div className={cls.element('chevron')}>
                <HoyreChevron />
            </div>
        </WithLink>
    );
};

export default MerInformasjon;
