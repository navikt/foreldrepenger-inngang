import React from 'react';
import BEMHelper from '../../utils/bem';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { getTranslation, IntlProps, withIntl } from '../../intl/intl';
import Valg from './komponenter/valg/Valg';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
// import Header from './komponenter/header/Header';

import './veiviser.less';

const moneySVG = require('../../assets/ark/ark-money.svg').default;

const cls = BEMHelper('veiviser');

interface Props {
    location: any;
}

const Veiviser: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <Sidebanner text={getTranslation('veiviser.sidebanner.tittel', lang)} />
            </div>
            <div className={cls.element('body')}>
                <div className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedIllustrasjon title={getTranslation('', lang)} svg={moneySVG}>
                        <Valg />
                    </PanelMedIllustrasjon>
                </div>
            </div>
        </div>
    );
};

export default withIntl(Veiviser);
