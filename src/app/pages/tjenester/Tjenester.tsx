import * as React from 'react';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import { withIntl, IntlProps, getTranslation } from 'app/intl/intl';
import Breadcrumbs from 'app/components/breadcrumbs/Breadcrumbs';
import BEMHelper from 'app/utils/bem';
import externalUrls from 'app/utils/externalUrls';
import Lenkepanel from 'nav-frontend-lenkepanel';
import { Link } from 'react-router-dom';
import { StrukturertTekst as StrukturertTekstType } from 'app/utils/strukturertTekst';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';
import './tjenester.less';
import SvgMask from 'app/components/svg-mask/SvgMask';

const infosiderCls = BEMHelper('infosider');
const cls = BEMHelper('tjenester');
const kalkulatorIcon = require('../../assets/icons/penger.svg').default;
const planleggerIcon = require('../../assets/icons/chat.svg').default;

const Tjenester = ({ lang }: IntlProps) => {
    const reactRouterLink = (props: any) => <Link to={props.href} {...props} />;

    return (
        <div className={infosiderCls.className}>
            <Sidebanner text={getTranslation('tjenester.tittel', lang)} />
            <div className={infosiderCls.element('body')}>
                <main className={infosiderCls.element('content')}>
                    <Breadcrumbs path={location.pathname} />

                    <div className={cls.className}>
                        <Lenkepanel
                            tittelProps="undertittel"
                            href="/tjenester/kalkulator"
                            linkCreator={reactRouterLink}>
                            <Lenkeinnhold
                                svg={kalkulatorIcon}
                                tekst={getContent('tjenester/kalkulatorlenke', lang)}
                            />
                        </Lenkepanel>

                        <Lenkepanel
                            tittelProps="undertittel"
                            href={externalUrls.foreldrepengeplanlegger}>
                            <Lenkeinnhold
                                svg={planleggerIcon}
                                tekst={getContent('tjenester/planleggerlenke', lang)}
                            />
                        </Lenkepanel>
                    </div>
                </main>
            </div>
        </div>
    );
};

const Lenkeinnhold = ({ svg, tekst }: { svg: any; tekst: StrukturertTekstType }) => (
    <div className={cls.element('linkContent')}>
        <SvgMask svg={svg} />
        <StrukturertTekst tekst={tekst} />
    </div>
);

export default withIntl(Tjenester);
