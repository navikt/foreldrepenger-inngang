import * as React from 'react';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import { withIntl, IntlProps, getTranslation } from 'app/intl/intl';
import Breadcrumbs from 'app/components/breadcrumbs/Breadcrumbs';
import BEMHelper from 'app/utils/bem';
import externalUrls from 'app/utils/externalUrls';
import Lenkepanel from 'nav-frontend-lenkepanel';
import { Link } from 'react-router-dom';

const cls = BEMHelper('infosider');

const Tjenester = ({ lang }: IntlProps) => {
    const reactRouterLink = (props: any) => <Link to={props.href} {...props} />;

    return (
        <div className={cls.className}>
            <Sidebanner text={getTranslation('tjenester.tittel', lang)} />
            <div className={cls.element('body')}>
                <main className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />

                    <Lenkepanel
                        tittelProps="undertittel"
                        href="/tjenester/kalkulator"
                        linkCreator={reactRouterLink}>
                        {getTranslation('tjenester.lenke_beregning')}
                    </Lenkepanel>

                    <Lenkepanel
                        tittelProps="undertittel"
                        href={externalUrls.foreldrepengeplanlegger}>
                        {getTranslation('tjenester.lenke_planlegger')}
                    </Lenkepanel>
                </main>
            </div>
        </div>
    );
};

export default withIntl(Tjenester);
