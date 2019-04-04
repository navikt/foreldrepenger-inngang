import React from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';
import getTranslation from '../../../../../utils/i18nUtils';
import BEMHelper from '../../../../../utils/bem';
import Lenkeknapp from '../../../../../components/lenkeknapp/Lenkeknapp';

const resultat = BEMHelper('resultat');

const EngangsstonadKnapp = ({
    intl,
    knappLeft,
    knappRight,
    knappLeftStyle,
    knappRightStyle,
    lenkeLeft,
    lenkeRight,
    buttonHeadertxtLeft,
    buttonHeadertxtRight
}: {
    intl: InjectedIntl;
    knappLeft: string;
    knappRight: string;
    knappLeftStyle: any;
    knappRightStyle: any;
    lenkeLeft: string;
    lenkeRight: string;
    buttonHeadertxtLeft?: object;
    buttonHeadertxtRight?: object;
}) => {
    return (
        <div className={resultat.element('harRettKnapp group')}>
            <div className={resultat.element('harRettKol')}>
                {buttonHeadertxtLeft}
                <Lenkeknapp
                    url={lenkeLeft}
                    type={knappLeftStyle}
                    urlIsExternal={false}
                    children={getTranslation(knappLeft, intl)}
                />
            </div>
            <div className={resultat.element('harRettKol')}>
                {buttonHeadertxtRight}
                <Lenkeknapp
                    url={lenkeRight}
                    type={knappRightStyle}
                    urlIsExternal={true}
                    children={getTranslation(knappRight, intl)}
                />
            </div>
        </div>
    );
};

export default injectIntl(EngangsstonadKnapp);
