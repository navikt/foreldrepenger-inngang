import React from 'react';
import BEMHelper from '../../utils/bem';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { getTranslation, IntlProps, withIntl } from '../../intl/intl';
import Valg from './komponenter/valg/Valg';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';


import './veiviser.less';
import SvgMask from "../../components/svg-mask/SvgMask";

const signSVG = require('../../assets/ark/ark-sign.svg').default;

const cls = BEMHelper('veiviser');

const faner = [
    {
        label: 'Far',
        icon: 'far1',
    },
    {
        label: 'Mor',
        icon: 'mor2',
    },
    {
        label: 'Medmor',
        icon: 'medmor2',
    }
];

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
                    <PanelMedIllustrasjon
                        title={getTranslation('veiviser.panelMedIllustrasjon.tittel', lang)}
                        svg={<SvgMask svg={signSVG} anchorToBottom={true}/>}
                        >
                        <Valg faner={faner} />
                    </PanelMedIllustrasjon>
                </div>
            </div>
        </div>
    );
};

export default withIntl(Veiviser);
