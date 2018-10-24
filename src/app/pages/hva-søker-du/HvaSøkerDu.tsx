import * as React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';

import Foreldrepenger from './Foreldrepenger';
import Engangsstonad from './Engangsstonad';
import Svangerskapspenger from './Svangerskapspenger';
import { getTranslation, withIntl, IntlProps } from '../../intl/intl';
import SvgBanner from '../../components/svg-banner/SvgBanner';
import Sidebanner from 'app/components/sidebanner/Sidebanner';

import './hvaSøkerDu.less';
import {Helmet} from "react-helmet";

const cls = BEMHelper('hvaSøkerDu');

interface Props {
    location: any;
}

const HvaSøkerDu: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div>
            <Helmet>
                <title>Hva søker du - www.nav.no</title>
                <meta charSet="utf-8" />
                <meta name="description" content="velg stønad du vil søke etter" />

                <meta property="og:title" content="hva søker du"/>
                <meta property="og:description" content="velg stønad du vil søke etter"/>
                <meta property="og:image" content="/dist/assets/tmp_hvaSokerOm.png" />
                <meta property="og:url" content="https://familie.nav.no/hva-soker-du" />
                <meta name="twitter:card" content="/dist/assets/tmp_hvaSokerOm-large.png" />
            </Helmet>
            <div className={cls.className}>
                <Sidebanner text={getTranslation('hva_søker_du.tittel', lang)} />
                <main className={cls.element('body')}>
                    <article className={cls.element('content')}>
                        <Breadcrumbs path={location.pathname} />
                        <SvgBanner />
                        <Foreldrepenger parentCls={cls} />
                        <Engangsstonad parentCls={cls} />
                        <Svangerskapspenger parentCls={cls} />
                    </article>
                </main>
            </div>
        </div>
    );
};

export default withIntl(HvaSøkerDu);
