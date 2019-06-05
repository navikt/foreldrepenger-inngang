import React, { FunctionComponent } from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';

interface Props {
    intl: InjectedIntl;
}

const InfoFarOgMor: FunctionComponent<Props> = ({ intl }) => {
    const kalender = require('../../components/panel-med-bilde/img/hvor-lenge.svg').default;
    const morBrev = require('../../assets/foreldre/mor2-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;
    const farBrev = require('../../assets/foreldre/far1-brev.svg').default;

    return (
        <Eventline>
            <Event title="Dere venter barn">
                <EkspanderbarSnakkeboble
                    svg={kalender}
                    tittel="Planlegg tiden hjemme med barnet"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
            <Event title="22. svangerskapsuke">
                <EkspanderbarSnakkeboble
                    svg={morBrev}
                    tittel="Mor kan søke om foreldrepenger"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
            <Event title="4 uker før mors første dag med foreldrepenger">
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel="Vi får opplysninger om inntekten til mor"
                    innhold="søk-foreldrepenger/planlegg"
                />
                <EkspanderbarSnakkeboble
                    svg={fåSvar}
                    tittel="Mor får svart på søknaden"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
            <Event title="Barnet blir født">
                <EkspanderbarSnakkeboble
                    svg={farBrev}
                    tittel="Far kan søke om foreldrepenger"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
            <Event title="4 uker før fars første dag med foreldrepenger">
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel="Inntektsopplysningene til far kan komme inn"
                    innhold="søk-foreldrepenger/planlegg"
                />
                <EkspanderbarSnakkeboble
                    svg={fåSvar}
                    tittel="Far kan få svar på søknaden"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
        </Eventline>
    );
};

export default injectIntl(InfoFarOgMor);
