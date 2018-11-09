import * as React from 'react';
import { withIntl, getTranslation, Language } from 'app/intl/intl';
import TypografiBase from 'nav-frontend-typografi';
import Alertstriper from 'nav-frontend-alertstriper';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';
import Alternativ from '../alternativ/Alternativ';
import {
    tjenerOverUtbetalingsgrensen,
    getLastYear,
    getUtbetalingsgrense,
    getEnHalvG
} from 'app/utils/beregningUtils';
import Veileder from 'app/components/veileder/Veileder';
import Veiledermelding from '../Veiledermelding';
import { Resultater } from '../Kalkulator';
import BEMHelper from 'app/utils/bem';
import './resultat.less';

const cls = BEMHelper('resultat');
const pengerIcon = require('../../../assets/icons/penger.svg').default;
const mindrePengerIcon = require('../../../assets/icons/mindre-penger.svg').default;

interface Props {
    results: Resultater;
    fårUtbetaling: boolean;
    lang: Language;
}

const Resultat: React.StatelessComponent<Props> = ({ results, fårUtbetaling, lang }) => {
    const { snittlønnPerMåned, nedreAvviksgrense, øvreAvviksgrense, tjenerForLite } = results;
    const localizeNumber = (n: number) => Math.round(n).toLocaleString(lang);

    const inntektssituasjon = fårUtbetaling
        ? getTranslation('kalkulator.får_utbetalt', lang)
        : getTranslation('kalkulator.har_en_årsinntekt', lang);

    const avviksvariabler = {
        INNTEKTSSITUASJON: inntektssituasjon,
        INNTEKTSSITUASJON_PRETERITUM: fårUtbetaling
            ? getTranslation('kalkulator.fikk', lang)
            : getTranslation('kalkulator.tjente', lang),
        ÅRLIG_SNITTLØNN: localizeNumber(snittlønnPerMåned * 12),
        ÅRET_I_FJOR: getLastYear(),
        NEDRE_AVVIKSGRENSE: localizeNumber(nedreAvviksgrense),
        ØVRE_AVVIKSGRENSE: localizeNumber(øvreAvviksgrense)
    };

    let utbetalingsgrensevariabler;
    let forLavLønnvariabler;

    if (tjenerOverUtbetalingsgrensen(snittlønnPerMåned)) {
        utbetalingsgrensevariabler = tjenerOverUtbetalingsgrensen && {
            UTBETALINGSGRENSE: localizeNumber(getUtbetalingsgrense())
        };
    }

    if (tjenerForLite) {
        forLavLønnvariabler = {
            INNTEKTSSITUASJON: inntektssituasjon,
            INNTEKTSSITUASJON_VERB: fårUtbetaling
                ? getTranslation('kalkulator.får')
                : getTranslation('kalkulator.tjener'),
            ÅRLIG_SNITTLØNN: localizeNumber(snittlønnPerMåned * 12),
            EN_HALV_G: localizeNumber(getEnHalvG())
        };
    }

    return (
        <div className={cls.element('flexDownwards')}>
            <TypografiBase type="undertittel">
                {getTranslation('kalkulator.resultat.tittel', lang)}
            </TypografiBase>

            <Veileder fargetema="normal" ansikt="glad" kompakt={true}>
                <Veiledermelding
                    avviksvariabler={forLavLønnvariabler ? undefined : avviksvariabler}
                    forLavLønnvariabler={forLavLønnvariabler}
                    utbetalingsgrensevariabler={utbetalingsgrensevariabler}
                    lang={lang}
                />
            </Veileder>

            {!tjenerForLite && (
                <output className={cls.element('resultater')}>
                    <Alternativ
                        lang={lang}
                        percentage={100}
                        icon={pengerIcon}
                        monthlyWage={snittlønnPerMåned}
                    />
                    <Alternativ
                        lang={lang}
                        percentage={80}
                        icon={mindrePengerIcon}
                        monthlyWage={snittlønnPerMåned}
                    />
                </output>
            )}

            {!tjenerForLite && (
                <div className={cls.element('disclaimer')}>
                    <Alertstriper type="info">
                        <StrukturertTekst tekst={getContent('kalkulator/disclaimer', lang)} />
                    </Alertstriper>
                </div>
            )}
        </div>
    );
};

export default withIntl(Resultat);
