import * as React from 'react';
import BEMHelper from './../../../../utils/bem';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

const cls = BEMHelper('selvstendigInnhold');

const beregningTekstPath = 'om-foreldrepenger/beregning/selvstendig';

const Selvstendig: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <div className={cls.className}>
            <Innhold source={getSource(beregningTekstPath, intl)} />
        </div>
    );
};

export default injectIntl(Selvstendig);
