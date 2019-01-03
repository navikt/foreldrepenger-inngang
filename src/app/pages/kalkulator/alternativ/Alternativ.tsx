import * as React from 'react';
import { getDailyPayment, GRUNNBELØPET } from 'app/utils/beregningUtils';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import BEMHelper from 'app/utils/bem';
import CustomSVGFromSprite from 'app/utils/CustomSVG';
import getTranslation from 'app/utils/i18nUtils';
import TypografiBase from 'nav-frontend-typografi';
import './alternativ.less';

const cls = BEMHelper('alternativ');

interface OwnProps {
    percentage: number;
    monthlyWage: number;
    icon: any;
}

type Props = OwnProps & InjectedIntlProps;

const Alternativ = ({ percentage, monthlyWage, icon, intl }: Props) => {
    const annualMax = 6 * GRUNNBELØPET;
    const monthlyMax = annualMax / 12;

    const decimal: number = percentage / 100;
    const monthlyPayment = Math.min(monthlyWage * decimal, monthlyMax * decimal);
    const dailyPayment = getDailyPayment(monthlyPayment);

    const monthlyPaymentFormatted = Math.round(monthlyPayment).toLocaleString(intl.locale);
    const dailyPaymentFormatted = Math.round(dailyPayment).toLocaleString(intl.locale);

    return (
        <output className={cls.className}>
            <TypografiBase type="element">{`${percentage} ${getTranslation(
                'kalkulator.resultat.undertittel',
                intl
            )}`}</TypografiBase>

            <div className={cls.element('divider')} />
            <TypografiBase type="normaltekst">
                {getTranslation('kalkulator.resultat.gjennomsnitt_per_måned', intl)}
            </TypografiBase>

            <TypografiBase type="undertittel">{`${monthlyPaymentFormatted} kr`}</TypografiBase>
            <TypografiBase className={cls.element('topMargin')} type="normaltekst">
                {getTranslation('kalkulator.resultat.dagsats', intl)}
            </TypografiBase>
            <TypografiBase type="undertittel">{`${dailyPaymentFormatted} kr`}</TypografiBase>
            <CustomSVGFromSprite className={cls.element('resultatIcon')} iconRef={icon} size={72} />
        </output>
    );
};

export default injectIntl(Alternativ);
