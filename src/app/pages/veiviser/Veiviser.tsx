import React, {FunctionComponent, useState} from 'react';
import BEMHelper from '../../utils/bem';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { injectIntl } from 'react-intl';
import Valg from './komponenter/valg/Valg';
import PanelMedIllustrasjon from '../../components/panel-med-illustrasjon/PanelMedIllustrasjon';

import './veiviser.less';
import SvgMask from '../../components/svg-mask/SvgMask';
import getTranslation from 'app/utils/i18nUtils';
import * as CSSTransition from 'react-transition-group/CSSTransition';
import NavigasjonsBoks from "./komponenter/valg/komponenter/NavigasjonsBoks";
import InjectedIntl = ReactIntl.InjectedIntl;

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
    intl: InjectedIntl;
}

const Veiviser: FunctionComponent<Props> = ({ location, intl }) => {
    const [visResultat, toggleResultat] = useState(false);

    const onToggle = (visResultat: boolean) => () => {
        toggleResultat(visResultat);
    };

    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <Sidebanner text={getTranslation('veiviser.sidebanner.tittel', intl)} />
            </div>
            <div className={cls.element('body')}>
                <div className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <PanelMedIllustrasjon
                        title={getTranslation(
                            'veiviser.panelMedIllustrasjon.tittel',
                            intl
                        )}
                        svg={<SvgMask svg={signSVG} anchorToBottom={true} />}>
                        <Valg
                            faner={faner}
                            aktivereResultatLenker={onToggle(true)}
                            CancelResultatLenker={onToggle(false)}
                        />
                    </PanelMedIllustrasjon>
                    {visResultat && ([<NavigasjonsBoks/>].map((res: any, index: number) => {
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
                    }))}
                </div>
            </div>
        </div>
    );
}

export default injectIntl(Veiviser);
