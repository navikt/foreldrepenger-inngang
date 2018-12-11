import * as React from 'react';
import BEMHelper from './../../../../utils/bem';
import { withIntl, IntlProps } from '../../../../intl/intl';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';
import { getGrunnbeløpet } from 'app/utils/beregningUtils';

const cls = BEMHelper('arbeidstakerTxt');

const beregningTekstPath = 'om-foreldrepenger/beregning/andre-inntekskilder';

const AndreInntekskilder: React.StatelessComponent<IntlProps> = ({ lang }) => {
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

export default withIntl(AndreInntekskilder);
