import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';

import './allInformasjon.less';

const cls = BEMHelper('allInformasjon');

interface Props {
    location: any;
}

const AllInformasjon: React.StatelessComponent<Props> = ({ location }) => {
    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <TypografiBase type="undertittel">
                    {translate('all_informasjon_foreldrepenger')}
                </TypografiBase>
            </div>
            <div className={cls.element('content')}>
                <Breadcrumbs path={location.pathname} />
            </div>
        </div>
    );
};

export default AllInformasjon;
