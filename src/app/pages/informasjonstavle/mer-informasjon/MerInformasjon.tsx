import React, { StatelessComponent } from 'react';
import { HoyreChevron } from 'nav-frontend-chevron';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import WithLink from '../../../components/with-link/WithLink';
import './merInformasjon.less';

const cls = BEMHelper('merInformasjon');

const MerInformasjon: StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <nav className={cls.className}>
            <MerInformasjonLink
                title={getTranslation('foreldrepenger', intl)}
                body={getTranslation('informasjonstavle.mer_informasjon.foreldrepenger', intl)}
                url="/om-foreldrepenger"
                urlIsExternal={false}
            />
            <MerInformasjonLink
                title={getTranslation('engangsstønad', intl)}
                body={getTranslation('informasjonstavle.mer_informasjon.engangsstønad', intl)}
                url="/om-engangsstonad"
                urlIsExternal={false}
            />
            <MerInformasjonLink
                title={getTranslation('svangerskapspenger', intl)}
                body={getTranslation('informasjonstavle.mer_informasjon.svangerskapspenger', intl)}
                url={'/om-svangerskapspenger'}
                urlIsExternal={false}
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

export default injectIntl(MerInformasjon);
