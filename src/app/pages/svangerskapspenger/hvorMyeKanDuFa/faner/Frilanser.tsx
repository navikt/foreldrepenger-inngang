import React from 'react';
import Innhold, { getSource } from '../../../../utils/innhold/Innhold';
import { useIntl } from 'react-intl';

const Frilanser = () => {
    const intl = useIntl();
    return <Innhold source={getSource('svangerskapspenger/hvor-mye-kan-du-fa/frilanser', intl)} />;
};

export default Frilanser;
