import * as React from 'react';
import { Definisjoner } from 'app/utils/strukturertTekst';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';
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
                <StrukturertTekst
                    tekst={getContent('kalkulator/advarsel-avviksgrense', intl)}
                    definisjoner={avviksvariabler}
                />
            )}
            {forLavLønnvariabler && (
                <StrukturertTekst
                    tekst={getContent('kalkulator/advarsel-lav-lønn', intl)}
                    definisjoner={forLavLønnvariabler}
                />
            )}
            {utbetalingsgrensevariabler && (
                <StrukturertTekst
                    tekst={getContent('kalkulator/advarsel-utbetalingsgrense', intl)}
                    definisjoner={utbetalingsgrensevariabler}
                />
            )}
        </div>
    );
};

export default injectIntl(Veiledermelding);
