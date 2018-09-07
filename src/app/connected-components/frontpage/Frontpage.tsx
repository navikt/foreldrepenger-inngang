import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';

import Foreldrepenger from './Foreldrepenger';
import Engangsstonad from './Engangsstonad';
import Svangerskapspenger from './Svangerskapspenger';
import translate from '../../utils/translate';

import './frontpage.less';

// TODO: Hent fra state etter routing er implementert
const tempRoute = [
    {
        label: 'Foreldrepenger, engangsstønad og svangerskapspenger',
        url: 'www.nav.no'
    },
    {
        label: 'Hva vil du søke om',
        url: 'www.nav.no'
    }
];

const cls = BEMHelper('frontpage');

const Frontpage = () => {
    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <TypografiBase type="undertittel">
                    {translate('hva_vil_du_søke_om')}
                </TypografiBase>
            </div>
            <div className={cls.element('content')}>
                <Breadcrumbs route={tempRoute} />
                <CoverImage />
                <Foreldrepenger cls={cls} />
                <Engangsstonad cls={cls} />
                <Svangerskapspenger cls={cls} />
            </div>
        </div>
    );
};

const CoverImage = () => {
    return <div className={cls.element('cover-image')} />;
};

export default Frontpage;
