import * as React from 'react';
import { useIntl } from 'react-intl';
import BEMHelper from '../../utils/bem';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import Engangsstonad from './Engangsstonad';
import Foreldrepenger from './Foreldrepenger';
import getTranslation from 'app/utils/i18nUtils';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import Svangerskapspenger from './Svangerskapspenger';
import SvgBanner from '../../components/svg-banner/SvgBanner';
import './hvaSøkerDu.less';
import { useLocation } from 'react-router-dom';

const cls = BEMHelper('hvaSøkerDu');

const HvaSøkerDu: React.FunctionComponent = () => {
    const intl = useIntl();
    const location = useLocation();

    return (
        <div>
            <div className={cls.block}>
                <Sidebanner text={getTranslation('hva_søker_du.tittel', intl)} />
                <div role="main" className={cls.element('body')}>
                    <article className={cls.element('content')}>
                        <Breadcrumbs path={location.pathname} />
                        <SvgBanner />
                        <Foreldrepenger />
                        <Engangsstonad />
                        <Svangerskapspenger />
                    </article>
                </div>
            </div>
        </div>
    );
};

export default HvaSøkerDu;
