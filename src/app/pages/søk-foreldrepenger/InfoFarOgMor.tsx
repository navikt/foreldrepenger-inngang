import React, { FunctionComponent } from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';

interface Props {
    intl: InjectedIntl;
}

const InfoFarOgMor: FunctionComponent<Props> = ({ intl }) => {
    const svg = require('../../components/panel-med-bilde/img/hvor-lenge.svg').default;

    return (
        <Eventline>
            <Event title="Dere venter barn">
                <EkspanderbarSnakkeboble
                    svg={svg}
                    tittel="Planlegg tiden hjemme med barnet"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
            <Event title="22. svangerskapsuke">
                <EkspanderbarSnakkeboble
                    svg={svg}
                    tittel="Planlegg tiden hjemme med barnet"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
            <Event title="4 uker før mors første dag med foreldrepenger">
                <EkspanderbarSnakkeboble
                    svg={svg}
                    tittel="Planlegg tiden hjemme med barnet"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
        </Eventline>
    );
};

export default injectIntl(InfoFarOgMor);
