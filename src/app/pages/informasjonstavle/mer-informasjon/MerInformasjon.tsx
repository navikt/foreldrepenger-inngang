import React, { ReactNode, StatelessComponent } from 'react';
import Tekstomrade from 'nav-frontend-tekstomrade';
import TypografiBase from 'nav-frontend-typografi';
import { HoyreChevron } from 'nav-frontend-chevron';

import { getTranslation, IntlProps, withIntl } from '../../../intl/intl';
import BEMHelper from '../../../utils/bem';
import externalUrls from '../../../utils/externalUrls';
import { WithLink } from '../../../utils/withLink';

import './merInformasjon.less';
import UnderProduksjon from '../UnderProduksjon';

const cls = BEMHelper('merInformasjon');

const MerInformasjon: StatelessComponent<IntlProps> = ({ lang }) => {
    return (
        <div className={cls.className}>
            <div className={cls.element('title')}>
                <TypografiBase type="undertittel">
                    {getTranslation('informasjonstavle.mer_informasjon.tittel', lang)}
                </TypografiBase>
            </div>
            <nav className={cls.element('links')}>
                <MerInformasjonLink
                    title={getTranslation('foreldrepenger', lang)}
                    body={getTranslation('informasjonstavle.mer_informasjon.foreldrepenger', lang)}
                    url="/om-foreldrepenger"
                    urlIsExternal={false}
                    underArbeid={false}
                />
                <MerInformasjonLink
                    title={getTranslation('engangsstønad', lang)}
                    body={getTranslation('informasjonstavle.mer_informasjon.engangsstønad', lang)}
                    url="/om-engangsstonad"
                    urlIsExternal={false}
                    underArbeid={false}
                />
                <MerInformasjonLink
                    title={getTranslation('svangerskapspenger', lang)}
                    body={getTranslation(
                        'informasjonstavle.mer_informasjon.svangerskapspenger',
                        lang
                    )}
                    url={externalUrls.les_mer_svangerskapspenger}
                    urlIsExternal={true}
                    underArbeid={true}
                    arbeidIkon={<UnderProduksjon group={'_secTable'} />}
                />
            </nav>
        </div>
    );
};

const MerInformasjonLink = ({
    title,
    body,
    url,
    urlIsExternal,
    underArbeid,
    arbeidIkon
}: {
    title: string;
    body: string;
    url: string;
    urlIsExternal?: boolean;
    underArbeid?: boolean;
    arbeidIkon?: ReactNode;
}) => {
    return (
        <div className={cls.element(underArbeid ? 'link stop-sign' : 'link')}>
            <div className={cls.element('underArbeid')}>{arbeidIkon}</div>
            <WithLink
                url={url}
                urlIsExternal={urlIsExternal}
                noStyling={true}
                className={cls.element(underArbeid ? 'inner disabled' : 'inner')}>
                <div>
                    <TypografiBase type="undertittel">{title}</TypografiBase>
                    <Tekstomrade>{body}</Tekstomrade>
                </div>
                <div className={cls.element('chevron')}>
                    <HoyreChevron />
                </div>
            </WithLink>
        </div>
    );
};

export default withIntl(MerInformasjon);
