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
                    tittel="Mor kan søke om foreldrepenger"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
            <Event title="4 uker før mors første dag med foreldrepenger">
                <EkspanderbarSnakkeboble
                    svg={svg}
                    tittel="Vi får opplysninger om inntekten til mor"
                    innhold="søk-foreldrepenger/planlegg"
                />
                <EkspanderbarSnakkeboble
                    svg={svg}
                    tittel="Mor får svart på søknaden"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
            <Event title="Barnet blir født">
                <EkspanderbarSnakkeboble
                    svg={svg}
                    tittel="Far kan søke om foreldrepenger"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
            <Event title="4 uker før fars første dag med foreldrepenger">
                <EkspanderbarSnakkeboble
                    svg={svg}
                    tittel="Inntektsopplysningene til far kan komme inn"
                    innhold="søk-foreldrepenger/planlegg"
                />
                <EkspanderbarSnakkeboble
                    svg={svg}
                    tittel="Far kan få svar på søknaden"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
        </Eventline>
    );
};

export default injectIntl(InfoFarOgMor);
