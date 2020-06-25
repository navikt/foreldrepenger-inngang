import React from 'react';
import Innhold, { getSource } from '../../../../utils/innhold/Innhold';
import { useIntl } from 'react-intl';

const Arbeidstaker = () => {
    const intl = useIntl();
    return <Innhold source={getSource('svangerskapspenger/hvor-mye-kan-du-fa/arbeidstaker', intl)} />;
};

export default Arbeidstaker;
