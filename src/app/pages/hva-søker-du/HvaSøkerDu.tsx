import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';

import Foreldrepenger from './Foreldrepenger';
import Engangsstonad from './Engangsstonad';
import Svangerskapspenger from './Svangerskapspenger';
import translate from '../../utils/translate';
import SvgBanner from '../../components/svg-banner/SvgBanner';

import './hvaSøkerDu.less';

const cls = BEMHelper('hvaSøkerDu');

interface Props {
    location: any;
}

const HvaSøkerDu: React.StatelessComponent<Props> = ({ location }) => {
    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <TypografiBase type="undertittel">
                    {translate('hva_vil_du_søke_om')}
                </TypografiBase>
            </div>
            <div className={cls.element('content')}>
                <Breadcrumbs path={location.pathname} />
                <SvgBanner />
                <Foreldrepenger parentCls={cls} />
                <Engangsstonad parentCls={cls} />
                <Svangerskapspenger parentCls={cls} />
            </div>
        </div>
    );
};

export default HvaSøkerDu;
