import * as React from 'react';
import { getContent } from '../../../../utils/getContent';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';

const beregningTekstPath = 'om-foreldrepenger/beregning/frilanser';

const Frilanser: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return <StrukturertTekst tekst={getContent(beregningTekstPath, intl)} />;
};

export default injectIntl(Frilanser);
