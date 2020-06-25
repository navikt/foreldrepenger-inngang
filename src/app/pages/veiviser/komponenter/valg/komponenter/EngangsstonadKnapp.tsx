import React from 'react';
import { useIntl } from 'react-intl';
import getTranslation from '../../../../../utils/i18nUtils';
import BEMHelper from '../../../../../utils/bem';
import Lenkeknapp from '../../../../../components/lenkeknapp/Lenkeknapp';

const resultat = BEMHelper('resultat');

const EngangsstonadKnapp = ({
    knappLeft,
    knappRight,
    knappLeftStyle,
    knappRightStyle,
    lenkeLeft,
    lenkeRight,
    buttonHeadertxtLeft,
    buttonHeadertxtRight,
}: {
    knappLeft: string;
    knappRight: string;
    knappLeftStyle: any;
    knappRightStyle: any;
    lenkeLeft: string;
    lenkeRight: string;
    buttonHeadertxtLeft?: any;
    buttonHeadertxtRight?: any;
}) => {
    const intl = useIntl();

    return (
        <div className={resultat.element('harRettKnapp group')}>
            <div className={resultat.element('harRettKol')}>
                {buttonHeadertxtLeft}
                <Lenkeknapp url={lenkeLeft} type={knappLeftStyle} urlIsExternal={false}>
                    {getTranslation(knappLeft, intl)}
                </Lenkeknapp>
            </div>
            <div className={resultat.element('harRettKol')}>
                {buttonHeadertxtRight}
                <Lenkeknapp url={lenkeRight} type={knappRightStyle} urlIsExternal={true}>
                    {getTranslation(knappRight, intl)}
                </Lenkeknapp>
            </div>
        </div>
    );
};

export default EngangsstonadKnapp;
