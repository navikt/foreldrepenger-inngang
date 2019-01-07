import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { ValueMap } from 'app/utils/innhold/Node';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

interface OwnProps {
    avviksvariabler?: ValueMap;
    utbetalingsgrensevariabler?: ValueMap;
    forLavLønnvariabler?: ValueMap;
}

type Props = OwnProps & InjectedIntlProps;

const Veiledermelding = ({
    avviksvariabler,
    utbetalingsgrensevariabler,
    forLavLønnvariabler,
    intl
}: Props) => {
    if (avviksvariabler) {
        return (
            <Innhold
                source={getSource('kalkulator/advarsel-avviksgrense', intl)}
                values={avviksvariabler}
            />
        );
    } else if (forLavLønnvariabler) {
        return (
            <Innhold
                source={getSource('kalkulator/advarsel-lav-lønn', intl)}
                values={forLavLønnvariabler}
            />
        );
    } else if (utbetalingsgrensevariabler) {
        return (
            <Innhold
                source={getSource('kalkulator/advarsel-utbetalingsgrense', intl)}
                values={utbetalingsgrensevariabler}
            />
        );
    } else {
        return null;
    }
};

export default injectIntl(Veiledermelding);
