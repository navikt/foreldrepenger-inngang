import React from 'react';
import Innhold, { getSource } from '../../../../utils/innhold/Innhold';
import { injectIntl, InjectedIntl } from 'react-intl';

const Frilanser = ({ intl }: { intl: InjectedIntl }) => (
    <Innhold source={getSource('svangerskapspenger/hvor-mye-kan-du-fa/frilanser', intl)} />
);

export default injectIntl(Frilanser);
