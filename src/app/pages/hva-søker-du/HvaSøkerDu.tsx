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

// TODO: Hent fra state etter routing er implementert
const tempRoute = [
    {
        label: 'Foreldrepenger, engangsstønad og svangerskapspenger',
        url: '/hva-vil-du-soke-om'
    },
    {
        label: 'Hva vil du søke om',
        url: '/hva-vil-du-soke-om'
    }
];

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
                <Breadcrumbs route={tempRoute} />
                <SvgBanner svgName="family" />
                <Foreldrepenger parentCls={cls} />
                <Engangsstonad parentCls={cls} />
                <Svangerskapspenger parentCls={cls} />
            </div>
        </div>
    );
};

export default HvaSøkerDu;
