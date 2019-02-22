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
import * as CSSTransition from 'react-transition-group/CSSTransition';
import NavigasjonsBoks from "./komponenter/valg/komponenter/NavigasjonsBoks";

const signSVG = require('../../assets/ark/ark-veiviser.svg').default;

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

interface State {
    resultat: object[];
    transition: boolean;
}

class Veiviser extends React.Component<Props & InjectedIntlProps, State> {
    constructor(props: Props & InjectedIntlProps) {
        super(props);
        this.state = {
            resultat: [],
            transition: false
        };
    }

    getResultatLenker = () => {
        const ammendItem = [...this.state.resultat];
        ammendItem.push(<NavigasjonsBoks/>);
        this.setState({
            resultat: ammendItem
        })
    };

    removeResultatLenker = () => {
        this.setState({
            resultat: []
        })
    };

    render = () => (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <Sidebanner text={getTranslation('veiviser.sidebanner.tittel', this.props.intl)} />
            </div>
            <div className={cls.element('body')}>
                <div className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedIllustrasjon
                        title={getTranslation(
                            'veiviser.panelMedIllustrasjon.tittel',
                            this.props.intl
                        )}
                        svg={<SvgMask svg={signSVG} anchorToBottom={true} />}>
                        <Valg
                            faner={faner}
                            aktivereResultatLenker={this.getResultatLenker}
                            CancelResultatLenker={this.removeResultatLenker}
                        />
                    </PanelMedIllustrasjon>
                    {this.state.resultat.map((res: any, index: number) => {
                        return (
                            <CSSTransition
                                key={index}
                                appear={true}
                                in={true}
                                classNames="message"
                                timeout={1000}>
                                {res}
                            </CSSTransition>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default injectIntl(Veiviser);
