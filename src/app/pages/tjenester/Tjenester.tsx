import * as React from 'react';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import { withIntl, IntlProps, getTranslation } from 'app/intl/intl';
import Breadcrumbs from 'app/components/breadcrumbs/Breadcrumbs';
import BEMHelper from 'app/utils/bem';
import externalUrls from 'app/utils/externalUrls';
import Lenkepanel from 'nav-frontend-lenkepanel';
import { Link } from 'react-router-dom';

const cls = BEMHelper('infosider');

const HvorMyeOgHvorLenge = ({ lang }: IntlProps) => {
    const reactRouterLink = (props: any) => <Link to={props.href} {...props} />;

    return (
        <div className={cls.className}>
            <Sidebanner text={getTranslation('planlegging.tittel', lang)} />
            <div className={cls.element('body')}>
                <div className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />

                    <Lenkepanel
                        tittelProps="undertittel"
                        href="/planlegging/beregning"
                        linkCreator={reactRouterLink}>
                        {getTranslation('planlegging.lenke_beregning')}
                    </Lenkepanel>

                    <Lenkepanel
                        tittelProps="undertittel"
                        href={externalUrls.foreldrepengeplanlegger}>
                        {getTranslation('planlegging.lenke_planlegger')}
                    </Lenkepanel>
                </div>
            </div>
        </div>
    );
};

export default withIntl(HvorMyeOgHvorLenge);
