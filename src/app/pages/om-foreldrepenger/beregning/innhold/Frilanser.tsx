import React from 'react';
import { Language, withIntl } from '../../../../intl/intl';
import BEMHelper from '../../../../utils/bem';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';
import { getGrunnbeløpet } from 'app/utils/beregningUtils';
const cls = BEMHelper('Frilanser');
const beregningTekstPath = 'om-foreldrepenger/beregning/frilanser';

const Frilanser = ({ lang }: { lang: Language }) => {
    return (
        <div className={cls.className}>
            <StrukturertTekst
                tekst={getContent(beregningTekstPath, lang)}
                definisjoner={{
                    treGangerGrunnbeløpet: (getGrunnbeløpet() * 3).toLocaleString(lang)
                }}
            />
        </div>
    );
};

export default withIntl(Frilanser);
