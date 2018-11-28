import React, { StatelessComponent } from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import { HoyreChevron } from 'nav-frontend-chevron';

import { getTranslation, IntlProps, withIntl } from '../../../intl/intl';
import BEMHelper from '../../../utils/bem';
import externalUrls from '../../../utils/externalUrls';
import { WithLink } from '../../../utils/withLink';

import './merInformasjon.less';

const cls = BEMHelper('merInformasjon');

const MerInformasjon: StatelessComponent<IntlProps> = ({ lang }) => {
    return (
        <nav className={cls.className}>
            <MerInformasjonLink
                title={getTranslation('foreldrepenger', lang)}
                body={getTranslation('informasjonstavle.mer_informasjon.foreldrepenger', lang)}
                url="/om-foreldrepenger"
                urlIsExternal={false}
            />
            <MerInformasjonLink
                title={getTranslation('engangsstønad', lang)}
                body={getTranslation('informasjonstavle.mer_informasjon.engangsstønad', lang)}
                url="/om-engangsstonad"
                urlIsExternal={false}
            />
            <MerInformasjonLink
                title={getTranslation('svangerskapspenger', lang)}
                body={getTranslation('informasjonstavle.mer_informasjon.svangerskapspenger', lang)}
                url={externalUrls.les_mer_svangerskapspenger}
                urlIsExternal={true}
            />
        </nav>
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

export default withIntl(MerInformasjon);
