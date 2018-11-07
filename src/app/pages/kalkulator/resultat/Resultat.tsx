import * as React from 'react';
import { getTranslation, Language } from 'app/intl/intl';
import TypografiBase from 'nav-frontend-typografi';
import { getDailyPayment, GRUNNBELØPET } from 'app/utils/beregningUtils';
import CustomSVGFromSprite from 'app/utils/CustomSVG';
import { BEMWrapper } from 'app/utils/bem';

const Resultat = ({
    percentage,
    monthlyWage,
    icon,
    cls,
    lang
}: {
    percentage: number;
    monthlyWage: number;
    icon: any;
    cls: BEMWrapper;
    lang: Language;
}) => {
    const annualMax = 6 * GRUNNBELØPET;
    const monthlyMax = annualMax / 12;

    const decimal: number = percentage / 100;
    const monthlyPayment = Math.min(monthlyWage * decimal, monthlyMax * decimal);
    const dailyPayment = getDailyPayment(monthlyPayment);

    const monthlyPaymentFormatted = Math.round(monthlyPayment).toLocaleString(lang);
    const dailyPaymentFormatted = Math.round(dailyPayment).toLocaleString(lang);

    return (
        <output className={cls.element('resultat')}>
            <TypografiBase type="element">{`${percentage} ${getTranslation(
                'kalkulator.resultat.undertittel'
            )}`}</TypografiBase>

            <div className={cls.element('divider')} />
            <TypografiBase type="normaltekst">
                {getTranslation('kalkulator.resultat.gjennomsnitt_per_måned')}
            </TypografiBase>

            <TypografiBase type="undertittel">{`${monthlyPaymentFormatted} kr`}</TypografiBase>
            <TypografiBase className={cls.element('topMargin')} type="normaltekst">
                {getTranslation('kalkulator.resultat.dagsats')}
            </TypografiBase>
            <TypografiBase type="undertittel">{`${dailyPaymentFormatted} kr`}</TypografiBase>
            <CustomSVGFromSprite className={cls.element('resultatIcon')} iconRef={icon} size={72} />
        </output>
    );
};

export default Resultat;
