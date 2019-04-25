import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Innhold, { getSource } from '../../../../utils/innhold/Innhold';

const Arbeidstaker: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return <Innhold source={getSource('svangerskapspenger/slik-soker-du/arbeidstaker', intl)} />;
};

export default injectIntl(Arbeidstaker);
