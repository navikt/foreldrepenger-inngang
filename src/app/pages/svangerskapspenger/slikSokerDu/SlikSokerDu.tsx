import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import getTranslation from '../../../utils/i18nUtils';
import Innhold, { getSource } from '../../../utils/innhold/Innhold';
import BEMHelper from '../../../utils/bem';
import Arbeidstaker from './faner/Arbeidstaker';
// import './slikSokerDu.less';
import SelvstendigNaringsdrivendeEllerFrilanser from './faner/SelvstendigNaringsdrivendeEllerFrilanser';
import ArbeidstakerIkon from '../../om-foreldrepenger/beregning/ikoner/ArbeidstakerIkon';
import { FrilanserIkon } from '../../om-foreldrepenger/beregning/ikoner/FrilanserIkon';
import Innholdsfaner from "../../../components/innholdsfaner/Innholdsfaner";

const cls = BEMHelper('slikSokerDu');
const seksjonsBilde = require('../../../assets/ark/ark-brev.svg').default;

interface InputProps {
    id: string;
}
const faner = [
    {
        label: 'om_svangerskapspenger.slikSokerDu.faneEn.tittel',
        icon: <ArbeidstakerIkon />,
        component: <Arbeidstaker />
    },
    {
        label: 'om_svangerskapspenger.slikSokerDu.faneTo.tittel',
        icon: <FrilanserIkon />,
        component: <SelvstendigNaringsdrivendeEllerFrilanser />
    }
];

type Props = InputProps & InjectedIntlProps;

const SlikSokerDu: React.StatelessComponent<Props> = ({intl, id}) => {
    return (
        <PanelMedIllustrasjon
            className={cls.className}
            id={id}
            title={getTranslation('om_svangerskapspenger.slikSokerDu.tittel', intl)}
            svg={seksjonsBilde}>
            <div>
                <Innhold
                    source={getSource('svangerskapspenger/slik-soker-du/ingress', intl)}
                />
            </div>
       <Innholdsfaner tabs={faner}/>
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(SlikSokerDu);
