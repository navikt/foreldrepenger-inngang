import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';

import Foreldrepenger from './Foreldrepenger';
import Engangsstonad from './Engangsstonad';
import Svangerskapspenger from './Svangerskapspenger';
import { getTranslation, withIntl, IntlProps } from '../../intl/intl';
import SvgBanner from '../../components/svg-banner/SvgBanner';

import './hvaSøkerDu.less';

const cls = BEMHelper('hvaSøkerDu');

interface Props {
    location: any;
}

const HvaSøkerDu: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div className={cls.className}>
            <header className={cls.element('header')}>
                <TypografiBase type="undertittel">
                    {getTranslation('hva_søker_du.tittel', lang)}
                </TypografiBase>
            </header>
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
    );
};

export default withIntl(HvaSøkerDu);
