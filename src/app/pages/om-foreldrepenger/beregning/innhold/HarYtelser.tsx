import * as React from 'react';
import { withIntl, IntlProps } from '../../../../intl/intl';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';

const beregningTekstPath = 'all-informasjon/beregning/har-ytelser';

const HarYtelser: React.StatelessComponent<IntlProps> = ({ lang }) => {
    return <StrukturertTekst tekst={getContent(beregningTekstPath, lang)} />;
};

export default withIntl(HarYtelser);
