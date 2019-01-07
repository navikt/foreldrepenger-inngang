import * as React from 'react';
import BEMHelper from './../../../../utils/bem';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

import { getGrunnbeløpet } from 'app/utils/beregningUtils';

const cls = BEMHelper('arbeidstakerTxt');

const beregningTekstPath = 'om-foreldrepenger/beregning/andre-inntekskilder';

const AndreInntekskilder: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <div className={cls.className}>
            <Innhold
                source={getSource(beregningTekstPath, intl)}
                values={{
                    treGangerGrunnbeløpet: (getGrunnbeløpet() * 3).toLocaleString(intl.locale)
                }}
            />
        </div>
    );
};

export default injectIntl(AndreInntekskilder);
