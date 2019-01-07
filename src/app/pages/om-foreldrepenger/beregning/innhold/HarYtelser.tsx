import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

const beregningTekstPath = 'om-foreldrepenger/beregning/har-ytelser';

const HarYtelser: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return <Innhold source={getSource(beregningTekstPath, intl)} />;
};

export default injectIntl(HarYtelser);
