import React from 'react';
import Innhold, {getSource} from "../../../../utils/innhold/Innhold";
import { injectIntl, InjectedIntl } from 'react-intl'

const SelvStendigNaring = ({intl}: {intl : InjectedIntl}) => (
    <Innhold source={getSource('svangerskapspenger/hvor-mye-kan-du-fa/selvstendignaring', intl)}/>
);

export default injectIntl(SelvStendigNaring)




