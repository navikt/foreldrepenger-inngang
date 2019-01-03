import * as React from 'react';
import BEMHelper from './../../../../utils/bem';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';

const cls = BEMHelper('selvstendigInnhold');

const beregningTekstPath = 'om-foreldrepenger/beregning/selvstendig';

const Selvstendig: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <div className={cls.className}>
            <StrukturertTekst tekst={getContent(beregningTekstPath, intl)} />
        </div>
    );
};

export default injectIntl(Selvstendig);
