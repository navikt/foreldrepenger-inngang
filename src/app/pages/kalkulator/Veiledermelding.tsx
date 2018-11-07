import * as React from 'react';
import { Definisjoner } from 'app/utils/strukturertTekst';
import { Language } from 'app/intl/intl';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';

const Veiledermelding = ({
    avviksvariabler,
    utbetalingsgrensevariabler,
    forLavLønnvariabler,
    lang
}: {
    avviksvariabler?: Definisjoner;
    utbetalingsgrensevariabler?: Definisjoner;
    forLavLønnvariabler?: Definisjoner;
    lang: Language;
}) => {
    return (
        <div>
            {avviksvariabler && (
                <StrukturertTekst
                    tekst={getContent('kalkulator/advarsel-avviksgrense', lang)}
                    definisjoner={avviksvariabler}
                />
            )}
            {forLavLønnvariabler && (
                <StrukturertTekst
                    tekst={getContent('kalkulator/advarsel-lav-lønn', lang)}
                    definisjoner={forLavLønnvariabler}
                />
            )}
            {utbetalingsgrensevariabler && (
                <StrukturertTekst
                    tekst={getContent('kalkulator/advarsel-utbetalingsgrense', lang)}
                    definisjoner={utbetalingsgrensevariabler}
                />
            )}
        </div>
    );
};

export default Veiledermelding;
