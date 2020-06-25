import * as React from 'react';
import { Arbeidssituasjon, Resultater } from './Kalkulator';
import { InjectedIntl, injectIntl } from 'react-intl';
import BEMHelper from 'app/utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import Lønnskalkulator from './lønnskalkulator/Lønnskalkulator';
import Resultat from './resultat/Resultat';
import TypografiBase from 'nav-frontend-typografi';
import UtvidetInformasjon from './utvidetinformasjon/UtvidetInformasjon';
import './kalkulator.less';

const cls = BEMHelper('kalkulator');

interface Props {
    valgteSituasjoner: Arbeidssituasjon[];
    onSnittlønnChange: (snittlønn?: number) => void;
    results?: Resultater;
    intl: InjectedIntl;
}

const Utregning = ({ valgteSituasjoner, onSnittlønnChange, results, intl }: Props) => {
    const fårUtbetaling = valgteSituasjoner.includes('utbetaling_fra_nav');
    const selvstendig = valgteSituasjoner.includes('selvstendig_næringsdrivende');

    const tittel = fårUtbetaling ? 'kalkulator.skriv_inn_utbetaling' : 'kalkulator.skriv_inn_lønn';
    const periode = selvstendig ? 'årene' : 'månedene';

    const ingress = fårUtbetaling
        ? valgteSituasjoner.length > 1
            ? 'kalkulator.skriv_inn_utbetaling_og_lønn_ingress'
            : 'kalkulator.skriv_inn_utbetaling_ingress'
        : 'kalkulator.skriv_inn_lønn_ingress';

    return (
        <div className={cls.element('flexDownwards')}>
            <TypografiBase type="undertittel">{`${getTranslation(tittel, intl)} ${getTranslation(
                periode,
                intl
            )}?`}</TypografiBase>

            {fårUtbetaling && (
                <UtvidetInformasjon
                    apneLabel={getTranslation('kalkulator.ytelser_som_gir_rett_tittel', intl)}
                    lukkLabel={getTranslation('kalkulator.lukk_info', intl)}
                >
                    <Innhold source={getSource('kalkulator/ytelser-som-gir-rett', intl)} />
                </UtvidetInformasjon>
            )}
            <TypografiBase type="normaltekst">{getTranslation(ingress, intl)}</TypografiBase>
            <Lønnskalkulator situasjoner={valgteSituasjoner} onChange={onSnittlønnChange} />
            {results && <Resultat results={results} fårUtbetaling={fårUtbetaling} />}
        </div>
    );
};

export default injectIntl(Utregning);
