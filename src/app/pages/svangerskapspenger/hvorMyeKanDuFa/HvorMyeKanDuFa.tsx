import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import getTranslation from '../../../utils/i18nUtils';
import Innhold, { getSource } from '../../../utils/innhold/Innhold';
import BEMHelper from '../../../utils/bem';
import ArbeidstakerIkon from '../../om-foreldrepenger/beregning/ikoner/ArbeidstakerIkon';
import { FrilanserIkon } from '../../om-foreldrepenger/beregning/ikoner/FrilanserIkon';
import SelvstendigIkon from '../../om-foreldrepenger/beregning/ikoner/SelvstendigIkon';
import Arbeidstaker from './faner/Arbeidstaker';
import Frilanser from './faner/Frilanser';
import SelvStendigNaring from './faner/SelvStendigNaring';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';

const cls = BEMHelper('hvorMyeKanDuFa');
const seksjonsBilde = require('../../../assets/ark/ark-beregning.svg').default;

interface Props {
    id: string;
}

const faner = [
    {
        label: 'om_svangerskapspenger.hvorMyeKanDuFa.faneTittel.arbeidstaker',
        icon: <ArbeidstakerIkon />,
        component: <Arbeidstaker />
    },
    {
        label: 'om_svangerskapspenger.hvorMyeKanDuFa.faneTittel.frilanser',
        icon: <FrilanserIkon />,
        component: <Frilanser />
    },
    {
        label: 'om_svangerskapspenger.hvorMyeKanDuFa.faneTittel.selvstendignaring',
        icon: <SelvstendigIkon />,
        component: <SelvStendigNaring />
    }
];

const HvorMyeKanDuFa: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            className={cls.block}
            title={getTranslation('om_svangerskapspenger.hvorMyeKanDuFa.tittel', intl)}
            svg={seksjonsBilde}>
            <Innhold
                source={getSource('svangerskapspenger/hvor-mye-kan-du-fa/informasjonstekst', intl)}
            />
            <div className={cls.element('alignLeft')}>
                <Innholdsfaner tabs={faner} />
            </div>
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(HvorMyeKanDuFa);
