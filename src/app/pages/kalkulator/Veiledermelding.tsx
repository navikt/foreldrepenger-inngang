import * as React from 'react';
import { Definisjoner } from 'app/utils/strukturertTekst';
import { Language } from 'app/intl/intl';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';

const Veiledermelding = ({
    avviksvariabler,
    utbetalingsgrensevariabler,
    lang
}: {
    avviksvariabler?: Definisjoner;
    utbetalingsgrensevariabler?: Definisjoner;
    lang: Language;
}) => {
    return (
        <div>
            <StrukturertTekst
                tekst={getContent('kalkulator/advarsel-avviksgrense', lang)}
                definisjoner={avviksvariabler}
            />
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
