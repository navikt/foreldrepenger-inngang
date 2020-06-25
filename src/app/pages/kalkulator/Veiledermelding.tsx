import * as React from 'react';
import { useIntl } from 'react-intl';
import { ValueMap } from 'app/utils/innhold/Node';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import BEMHelper from 'app/utils/bem';

const cls = BEMHelper('kalkulator');

interface OwnProps {
    avviksvariabler?: ValueMap;
    utbetalingsgrensevariabler?: ValueMap;
    forLavLønnvariabler?: ValueMap;
}

type Props = OwnProps;

const Veiledermelding = ({ avviksvariabler, utbetalingsgrensevariabler, forLavLønnvariabler }: Props) => {
    const intl = useIntl();

    return (
        <div className={cls.element('veiledermeldinger')}>
            {avviksvariabler && (
                <Innhold source={getSource('kalkulator/advarsel-avviksgrense', intl)} values={avviksvariabler} />
            )}
            {forLavLønnvariabler && (
                <Innhold source={getSource('kalkulator/advarsel-lav-lønn', intl)} values={forLavLønnvariabler} />
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

export default Veiledermelding;
