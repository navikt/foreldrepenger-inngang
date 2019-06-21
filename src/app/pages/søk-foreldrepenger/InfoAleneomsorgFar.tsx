import React, { FunctionComponent } from 'react';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import { InjectedIntl, injectIntl } from 'react-intl';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

interface Props {
    intl: InjectedIntl;
}

const InfoAleneomsorgFar: FunctionComponent<Props> = ({ intl }) => {
    const kalender = require('../../assets/planlegge.svg').default;
    const dokumentasjon = require('../../assets/dokumentasjon.svg').default;
    const farBrev = require('../../assets/foreldre/far4-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;

    return (
        <Eventline>
            <Event title="Du venter barn">
                <EkspanderbarSnakkeboble svg={kalender} tittel="Planlegg tiden hjemme med barnet">
                    <Innhold
                        source={getSource('søk-foreldrepenger/aleneomsorg-far/planlegg', intl)}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="Du får vite dato for termin eller omsorgsovertakelse">
                <EkspanderbarSnakkeboble
                    svg={dokumentasjon}
                    tittel="Du får dokumentasjon på at du er alene om omsorgen">
                    <Innhold
                        source={getSource('søk-foreldrepenger/aleneomsorg-far/dokumentasjon', intl)}
                    />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble svg={farBrev} tittel="Du kan søke om foreldrepenger">
                    <Innhold
                        source={getSource('søk-foreldrepenger/aleneomsorg-far/far-kan-søke', intl)}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="4 uker før din første dag med foreldrepenger eller utsettelse">
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel="Vi får opplysninger om inntekten din">
                    <Innhold
                        source={getSource(
                            'søk-foreldrepenger/aleneomsorg-far/opplysninger-inntekt-far',
                            intl
                        )}
                    />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble svg={fåSvar} tittel="Du kan få svar på søknaden">
                    <Innhold
                        source={getSource('søk-foreldrepenger/aleneomsorg-far/far-får-svar', intl)}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
        </Eventline>
    );
};

export default injectIntl(InfoAleneomsorgFar);
