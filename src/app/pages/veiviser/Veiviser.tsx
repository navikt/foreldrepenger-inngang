import React from 'react';
import BEMHelper from '../../utils/bem';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Valg from './komponenter/valg/Valg';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';

import './veiviser.less';
import SvgMask from '../../components/svg-mask/SvgMask';
import getTranslation from 'app/utils/i18nUtils';

const signSVG = require('../../assets/ark/ark-sign.svg').default;

const cls = BEMHelper('veiviser');

const faner = [
    {
        label: 'veiviser.fane.mor',
        icon: 'mor2'
    },
    {
        label: 'veiviser.fane.far',
        icon: 'far1'
    },
    {
        label: 'veiviser.fane.medmor',
        icon: 'medmor2'
    }
];

interface Props {
    location: any;
}

type OwnProps = Props & InjectedIntlProps;

const Veiviser: React.StatelessComponent<OwnProps> = ({ location, intl }) => {
    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <Sidebanner text={getTranslation('veiviser.sidebanner.tittel', intl)} />
            </div>
            <div className={cls.element('body')}>
                <div className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedIllustrasjon
                        title={getTranslation('veiviser.panelMedIllustrasjon.tittel', intl)}
                        svg={<SvgMask svg={signSVG} anchorToBottom={true} />}>
                        <Valg faner={faner} />
                    </PanelMedIllustrasjon>
                </div>
            </div>
        </div>
    );
};

export default injectIntl(Veiviser);
