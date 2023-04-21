import * as React from 'react';

import { useIntl } from 'react-intl';
import { Resultater } from '../Kalkulator';
import { tjenerOverUtbetalingsgrensen, getLastYear, getUtbetalingsgrense, getEnHalvG } from 'app/utils/beregningUtils';
import Alertstriper from 'nav-frontend-alertstriper';
import Alternativ from '../alternativ/Alternativ';
import BEMHelper from 'app/utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import TypografiBase from 'nav-frontend-typografi';
import Veileder from 'app/components/veileder/Veileder';
import Veiledermelding from '../Veiledermelding';
import './resultat.less';

const cls = BEMHelper('resultat');
const pengerIcon = require('../../../assets/icons/money-100.svg').default;
const mindrePengerIcon = require('../../../assets/icons/money-80.svg').default;

interface Props {
    results: Resultater;
    fårUtbetaling: boolean;
}

const Resultat = ({ results, fårUtbetaling }: Props) => {
    const intl = useIntl();
    const { snittlønnPerMåned, nedreAvviksgrense, øvreAvviksgrense, tjenerForLite } = results;
    const localizeNumber = (n: number) => Math.round(n).toLocaleString(intl.locale);

    const inntektssituasjon = fårUtbetaling
        ? getTranslation('kalkulator.får_utbetalt', intl)
        : getTranslation('kalkulator.har_en_årsinntekt', intl);

    const avviksvariabler = {
        INNTEKTSSITUASJON: inntektssituasjon,
        INNTEKTSSITUASJON_PRETERITUM: fårUtbetaling
            ? getTranslation('kalkulator.fikk', intl)
            : getTranslation('kalkulator.tjente', intl),
        ÅRLIG_SNITTLØNN: localizeNumber(snittlønnPerMåned * 12),
        ÅRET_I_FJOR: getLastYear(),
        NEDRE_AVVIKSGRENSE: localizeNumber(nedreAvviksgrense),
        ØVRE_AVVIKSGRENSE: localizeNumber(øvreAvviksgrense),
    };

    let utbetalingsgrensevariabler;
    let forLavLønnvariabler;

    if (tjenerOverUtbetalingsgrensen(snittlønnPerMåned)) {
        utbetalingsgrensevariabler = {
            UTBETALINGSGRENSE: localizeNumber(getUtbetalingsgrense()),
        };
    }

    if (tjenerForLite) {
        forLavLønnvariabler = {
            INNTEKTSSITUASJON: inntektssituasjon,
            INNTEKTSSITUASJON_VERB: fårUtbetaling
                ? getTranslation('kalkulator.får', intl)
                : getTranslation('kalkulator.tjener', intl),
            ÅRLIG_SNITTLØNN: localizeNumber(snittlønnPerMåned * 12),
            EN_HALV_G: localizeNumber(getEnHalvG()),
        };
    }

    return (
        <div className={cls.element('flexDownwards')}>
            <TypografiBase type="undertittel">{getTranslation('kalkulator.resultat.tittel', intl)}</TypografiBase>

            <Veileder fargetema="normal" ansikt="glad" kompakt={true}>
                <Veiledermelding
                    avviksvariabler={forLavLønnvariabler ? undefined : avviksvariabler}
                    forLavLønnvariabler={forLavLønnvariabler}
                    utbetalingsgrensevariabler={utbetalingsgrensevariabler}
                />
            </Veileder>

            {!tjenerForLite && (
                <output className={cls.element('resultater')}>
                    <Alternativ percentage={100} icon={pengerIcon} monthlyWage={snittlønnPerMåned} />
                    <Alternativ percentage={80} icon={mindrePengerIcon} monthlyWage={snittlønnPerMåned} />
                </output>
            )}

            {!tjenerForLite && (
                <div className={cls.element('disclaimer')}>
                    <Alertstriper type="info">
                        <Innhold source={getSource('kalkulator/disclaimer', intl)} />
                    </Alertstriper>
                </div>
            )}
        </div>
    );
};

export default Resultat;
