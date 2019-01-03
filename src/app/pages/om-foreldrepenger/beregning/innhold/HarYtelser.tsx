import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';

const beregningTekstPath = 'om-foreldrepenger/beregning/har-ytelser';

const HarYtelser: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return <StrukturertTekst tekst={getContent(beregningTekstPath, intl)} />;
};

export default injectIntl(HarYtelser);
