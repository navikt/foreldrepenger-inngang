import * as React from 'react';
import { Definisjoner } from 'app/utils/strukturertTekst';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

import { injectIntl, InjectedIntlProps } from 'react-intl';

interface OwnProps {
    avviksvariabler?: Definisjoner;
    utbetalingsgrensevariabler?: Definisjoner;
    forLavLønnvariabler?: Definisjoner;
}

type Props = OwnProps & InjectedIntlProps;

const Veiledermelding = ({
    avviksvariabler,
    utbetalingsgrensevariabler,
    forLavLønnvariabler,
    intl
}: Props) => {
    return (
        <div>
            {avviksvariabler && (
                <Innhold
                    source={getSource('kalkulator/advarsel-avviksgrense', intl)}
                    values={avviksvariabler}
                />
            )}
            {forLavLønnvariabler && (
                <Innhold
                    source={getSource('kalkulator/advarsel-lav-lønn', intl)}
                    values={forLavLønnvariabler}
                />
            )}
            {utbetalingsgrensevariabler && (
                <Innhold
                    source={getSource('kalkulator/advarsel-utbetalingsgrense', intl)}
                    values={utbetalingsgrensevariabler}
                />
            )}
        </div>
    );
};

export default injectIntl(Veiledermelding);
