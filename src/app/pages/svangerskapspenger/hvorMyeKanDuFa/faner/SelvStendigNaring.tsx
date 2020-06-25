import React from 'react';
import Innhold, { getSource } from '../../../../utils/innhold/Innhold';
import { useIntl } from 'react-intl';

const SelvStendigNaring = () => {
    const intl = useIntl();
    return <Innhold source={getSource('svangerskapspenger/hvor-mye-kan-du-fa/selvstendignaring', intl)} />;
};

export default SelvStendigNaring;
