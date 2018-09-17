import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';
import PanelMedIllustrasjon from './panel-med-illustrasjon/PanelMedIllustrasjon';

import './allInformasjon.less';

const cls = BEMHelper('allInformasjon');

interface Props {
    location: any;
}

const foreldrepengerSvg = require('../../assets/familier/familie-3.svg')
    .default;

const AllInformasjon: React.StatelessComponent<Props> = ({ location }) => {
    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <TypografiBase type="undertittel">
                    {translate('all_informasjon_foreldrepenger')}
                </TypografiBase>
            </div>
            <div className={cls.element('body')}>
                <div className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <Foreldrepengekrav />
                </div>
            </div>
        </div>
    );
};

const Foreldrepengekrav = () => {
    return (
        <PanelMedIllustrasjon
            title={translate('for_å_få_foreldrepenger')}
            svg={foreldrepengerSvg}
            maskSvg={true}>
            <div className={cls.element('alignLeft')}>
                <TypografiBase type="ingress">
                    {translate('for_å_få_foreldrepenger_body')}
                </TypografiBase>
                <TypografiBase type="ingress">
                    {translate('for_å_få_foreldrepenger_body2')}
                </TypografiBase>
            </div>
        </PanelMedIllustrasjon>
    );
};

export default AllInformasjon;
