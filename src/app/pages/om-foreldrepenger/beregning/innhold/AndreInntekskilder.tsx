import * as React from 'react';
import BEMHelper from './../../../../utils/bem';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';
import { getGrunnbeløpet } from 'app/utils/beregningUtils';

const cls = BEMHelper('arbeidstakerTxt');

const beregningTekstPath = 'om-foreldrepenger/beregning/andre-inntekskilder';

const AndreInntekskilder: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <div className={cls.className}>
            <StrukturertTekst
                tekst={getContent(beregningTekstPath, intl)}
                definisjoner={{
                    treGangerGrunnbeløpet: (getGrunnbeløpet() * 3).toLocaleString(intl.locale)
                }}
            />
        </div>
    );
};

export default injectIntl(AndreInntekskilder);
