import React from 'react';
import Innhold, {getSource} from "../../../../utils/innhold/Innhold";
import { injectIntl, InjectedIntl } from 'react-intl'

const Arbeidstaker = ({intl}: {intl : InjectedIntl}) => (
    <Innhold source={getSource('svangerskapspenger/hvor-mye-kan-du-fa/arbeidstaker', intl)}/>
);

export default injectIntl(Arbeidstaker)




