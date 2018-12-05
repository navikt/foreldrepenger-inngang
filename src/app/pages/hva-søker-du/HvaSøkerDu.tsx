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

const cls = BEMHelper('hvaSøkerDu');

interface Props {
    location: any;
}

const HvaSøkerDu: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div>
            <div className={cls.className}>
                <Sidebanner text={getTranslation('hva_søker_du.tittel', lang)} />
                <div role="main" className={cls.element('body')}>
                    <article className={cls.element('content')}>
                        <Breadcrumbs path={location.pathname} />
                        <SvgBanner />
                        <Foreldrepenger parentCls={cls} />
                        <Engangsstonad parentCls={cls} />
                        <Svangerskapspenger parentCls={cls} />
                    </article>
                </div>
            </div>
        </div>
    );
};

export default withIntl(HvaSøkerDu);
