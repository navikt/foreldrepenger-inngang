import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import getTranslation from '../../../utils/i18nUtils';
import Innhold, { getSource } from '../../../utils/innhold/Innhold';
import BEMHelper from '../../../utils/bem';
import Tabs from 'nav-frontend-tabs';
import Arbeidstaker from './faner/Arbeidstaker';
import './slikSokerDu.less';
import SelvstendigNaringsdrivendeEllerFrilanser from './faner/SelvstendigNaringsdrivendeEllerFrilanser';
import ArbeidstakerIkon from '../../om-foreldrepenger/beregning/ikoner/ArbeidstakerIkon';
import { FrilanserIkon } from '../../om-foreldrepenger/beregning/ikoner/FrilanserIkon';

const cls = BEMHelper('slikSokerDu');
const seksjonsBilde = require('../../../assets/icons/brev.svg').default;

interface InputProps {
    id: string;
}
const faner = [
    {
        label: 'om_svangerskapspenger.slikSokerDu.faneEn.tittel',
        ikon: <ArbeidstakerIkon />,
        content: <Arbeidstaker />
    },
    {
        label: 'om_svangerskapspenger.slikSokerDu.faneTo.tittel',
        ikon: <FrilanserIkon />,
        content: <SelvstendigNaringsdrivendeEllerFrilanser />
    }
];

type Props = InputProps & InjectedIntlProps;

class SlikSokerDu extends React.Component<Props> {
    state: {
        currentTab: React.ReactNode;
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            currentTab: faner[0].content
        };
    }

    updateContent = (e: any, index: number): void => {
        this.setState({
            currentTab: faner[index].content
        });
    };

    render = () => (
        <PanelMedIllustrasjon
            className={cls.className}
            id={this.props.id}
            title={getTranslation('om_svangerskapspenger.slikSokerDu.tittel', this.props.intl)}
            svg={seksjonsBilde}>
            <div>
                <Innhold
                    source={getSource('svangerskapspenger/slik-soker-du/ingress', this.props.intl)}
                />
            </div>
            <Tabs
                kompakt={true}
                defaultAktiv={0}
                tabs={faner.map((fane) => ({
                    label: (
                        <div className={cls.element('fane')}>
                            {fane.ikon}
                            {getTranslation(fane.label, this.props.intl)}
                        </div>
                    )
                }))}
                onChange={this.updateContent}
            />
            {this.state.currentTab}
        </PanelMedIllustrasjon>
    );
}

export default injectIntl(SlikSokerDu);
